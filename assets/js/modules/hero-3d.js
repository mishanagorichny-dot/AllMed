// Hero visual: a slowly rotating 3D head with the brain visible inside.
// - Head: a dot-matrix "scan" point cloud plus a faint fresnel glass shell.
// - Brain: two procedurally folded hemispheres and a cerebellum.
// Every colour is read from the CSS design tokens, so the model always
// matches the palette. Three.js (vendored) loads lazily after first paint;
// without WebGL (or with Save-Data) the CSS halo remains as a calm fallback.
const THREE_URL = new URL('../../vendor/three.module.min.js', import.meta.url).href; // Three.js r169 (MIT), vendored

const smooth = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
const gauss = (dx, dy, sx, sy) => Math.exp(-(dx * dx) / sx - (dy * dy) / sy);

// Unit-sphere point → stylised head (y up, z towards the viewer's face side).
function shapeHead(x, y, z) {
  const low = smooth(0.1, -0.95, y); // 0 across the cranium → 1 at the chin
  let X = x * 0.74 * (1 - 0.3 * low);
  const Y = y * 1.02;
  let Z = z * 0.9 * (1 - 0.16 * low);
  if (z < 0) Z *= 1 + 0.08 * (1 - low); // fuller occiput

  const front = smooth(0.35, 0.85, z);
  const ax = Math.abs(X);
  let dz = 0;
  dz += 0.19 * gauss(X, Y + 0.24, 0.0035, 0.02) * (0.4 + 0.6 * smooth(0.05, -0.26, Y)); // nose
  dz += 0.035 * gauss(ax - 0.22, Y - 0.16, 0.02, 0.003);  // brow
  dz -= 0.055 * gauss(ax - 0.22, Y - 0.03, 0.009, 0.006); // eye sockets
  dz += 0.03 * gauss(X, Y + 0.52, 0.018, 0.003);          // lips
  dz += 0.05 * gauss(X, Y + 0.8, 0.03, 0.01);             // chin
  dz += 0.025 * gauss(ax - 0.32, Y + 0.12, 0.01, 0.01);   // cheekbones
  Z += dz * front;

  const side = smooth(0.8, 0.98, Math.abs(x)); // ears
  X += Math.sign(x) * 0.06 * side * gauss(z + 0.08, y + 0.02, 0.02, 0.05);
  return [X, Y, Z];
}

// Small deterministic value noise for the cortical folds.
function hash(x, y, z) {
  let h = Math.imul(x, 374761393) ^ Math.imul(y, 668265263) ^ Math.imul(z, 1440662683);
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
}
function noise(x, y, z) {
  const xi = Math.floor(x), yi = Math.floor(y), zi = Math.floor(z);
  const f = (t) => t * t * (3 - 2 * t);
  const u = f(x - xi), v = f(y - yi), w = f(z - zi);
  const l = (a, b, t) => a + (b - a) * t;
  const c = (dx, dy, dz) => hash(xi + dx, yi + dy, zi + dz);
  return l(
    l(l(c(0, 0, 0), c(1, 0, 0), u), l(c(0, 1, 0), c(1, 1, 0), u), v),
    l(l(c(0, 0, 1), c(1, 0, 1), u), l(c(0, 1, 1), c(1, 1, 1), u), v), w);
}
// Cortical folds: contour lines of a smooth noise field wander like sulci.
// Returns 0 in a sulcus and 1 on a gyrus crest.
function folds(x, y, z) {
  const n = noise(x * 1.7, y * 1.7, z * 1.7) * 0.72 + noise(x * 3.4 + 11, y * 3.4, z * 3.4) * 0.28;
  return Math.sqrt(Math.abs(Math.sin(n * Math.PI * 6.5)));
}

function token(name) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

function supportsWebGL() {
  try {
    const c = document.createElement('canvas');
    return Boolean(c.getContext('webgl2') || c.getContext('webgl'));
  } catch { return false; }
}

export async function initHero3D() {
  const canvas = document.querySelector('[data-hero-3d]');
  if (!canvas || !supportsWebGL() || navigator.connection?.saveData) return;

  let THREE;
  try { THREE = await import(THREE_URL); } catch { return; }

  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const col = (n) => new THREE.Color(token(n));
  const palette = {
    ink: col('--canal-700'),
    scan: col('--canal-500'),
    rim: col('--canal-500'),
    gyrus: col('--canal-200'),
    sulcus: col('--canal-500'),
    light: col('--canal-100'),
  };

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'low-power' });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 50);
  camera.position.set(0, 0.05, 7);
  camera.lookAt(0, -0.12, 0);

  scene.add(new THREE.HemisphereLight(0xffffff, palette.light, 1.5));
  const key = new THREE.DirectionalLight(0xffffff, 1.7);
  key.position.set(2.5, 3, 4);
  scene.add(key);
  const rim = new THREE.DirectionalLight(palette.gyrus, 1.1);
  rim.position.set(-3, 0.5, -3);
  scene.add(rim);

  const figure = new THREE.Group();
  scene.add(figure);

  // ---- Head: point cloud --------------------------------------------------
  const HEAD_POINTS = 8000;
  const NECK_POINTS = 1600;
  const pos = [], nrm = [], alpha = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  const fade = (y) => smooth(-1.75, -0.95, y);
  for (let i = 0; i < HEAD_POINTS; i++) {
    const y = 1 - (2 * (i + 0.5)) / HEAD_POINTS;
    const r = Math.sqrt(1 - y * y);
    const th = i * golden;
    const x = Math.cos(th) * r, z = Math.sin(th) * r;
    const [X, Y, Z] = shapeHead(x, y, z);
    pos.push(X, Y, Z); nrm.push(x, y, z); alpha.push(fade(Y));
  }
  // Neck: regular staggered rings, matching the head's dot matrix
  const RINGS = 30;
  const PER_RING = Math.round(NECK_POINTS / RINGS);
  for (let j = 0; j < RINGS; j++) {
    const h = j / (RINGS - 1);
    const y = -0.78 - h * 1.0;
    const rad = 0.3 + 0.05 * h;
    for (let k = 0; k < PER_RING; k++) {
      const a = ((k + (j % 2) * 0.5) / PER_RING) * Math.PI * 2;
      const x = Math.cos(a) * rad, z = Math.sin(a) * rad * 0.9 - 0.12;
      if (z > -0.05 && y > -1.05) continue; // hidden behind the jaw
      pos.push(x, y, z); nrm.push(Math.cos(a), 0, Math.sin(a)); alpha.push(fade(y) * 0.9);
    }
  }
  const pointsGeo = new THREE.BufferGeometry();
  pointsGeo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  pointsGeo.setAttribute('normal', new THREE.Float32BufferAttribute(nrm, 3));
  pointsGeo.setAttribute('aAlpha', new THREE.Float32BufferAttribute(alpha, 1));

  const pointsMat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    uniforms: {
      uTime: { value: 0 },
      uSize: { value: 1.8 },
      uPixelRatio: { value: renderer.getPixelRatio() },
      uColor: { value: palette.ink },
      uScanColor: { value: palette.scan },
    },
    vertexShader: /* glsl */`
      uniform float uTime; uniform float uSize; uniform float uPixelRatio;
      attribute float aAlpha;
      varying float vAlpha; varying float vScan;
      void main() {
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = uSize * uPixelRatio * (6.4 / -mv.z);
        vec3 n = normalize(normalMatrix * normal);
        float facing = smoothstep(-0.35, 0.65, n.z);
        float band = fract(uTime * 0.07);
        float yN = (position.y + 1.8) / 2.9;
        vScan = smoothstep(0.05, 0.0, abs(yN - band));
        vAlpha = aAlpha * mix(0.12, 1.0, facing);
      }`,
    fragmentShader: /* glsl */`
      uniform vec3 uColor; uniform vec3 uScanColor;
      varying float vAlpha; varying float vScan;
      void main() {
        float d = length(gl_PointCoord - 0.5);
        if (d > 0.5) discard;
        float a = smoothstep(0.5, 0.12, d) * vAlpha * (0.4 + 0.5 * vScan);
        gl_FragColor = vec4(mix(uColor, uScanColor, vScan), a);
        #include <colorspace_fragment>
      }`,
  });
  const points = new THREE.Points(pointsGeo, pointsMat);
  points.renderOrder = 2;
  figure.add(points);

  // ---- Head: fresnel glass shell ----------------------------------------
  const shellGeo = new THREE.SphereGeometry(1, 128, 96);
  const sp = shellGeo.attributes.position;
  for (let i = 0; i < sp.count; i++) {
    const [X, Y, Z] = shapeHead(sp.getX(i), sp.getY(i), sp.getZ(i));
    sp.setXYZ(i, X, Y, Z);
  }
  shellGeo.computeVertexNormals();
  const shell = new THREE.Mesh(shellGeo, new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    uniforms: { uColor: { value: palette.rim } },
    vertexShader: /* glsl */`
      varying vec3 vN; varying vec3 vV; varying float vY;
      void main() {
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vN = normalize(normalMatrix * normal);
        vV = normalize(-mv.xyz);
        vY = position.y;
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: /* glsl */`
      uniform vec3 uColor;
      varying vec3 vN; varying vec3 vV; varying float vY;
      void main() {
        float f = pow(1.0 - abs(dot(vN, vV)), 2.6);
        float fadeLow = smoothstep(-1.05, -0.7, vY);
        gl_FragColor = vec4(uColor, (f * 0.42 + 0.025) * fadeLow);
        #include <colorspace_fragment>
      }`,
  }));
  shell.renderOrder = 3;
  figure.add(shell);

  // ---- Brain --------------------------------------------------------------
  const brain = new THREE.Group();
  brain.position.set(0, 0.3, -0.04);
  brain.scale.setScalar(0.94);
  figure.add(brain);
  const brainMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.52, metalness: 0.04 });
  const tmp = new THREE.Color();

  function hemisphere(sideSign) {
    const g = new THREE.SphereGeometry(1, 192, 144);
    const p = g.attributes.position;
    const colors = new Float32Array(p.count * 3);
    for (let i = 0; i < p.count; i++) {
      const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
      const inner = x * sideSign < 0;
      let X = x * (inner ? 0.105 : 0.42); // flat medial face meets the midline
      let Y = y * 0.4 * (y < -0.2 ? 0.82 : 1);
      let Z = z * 0.6;
      if (y < -0.1 && z > 0.2) Y -= 0.05 * smooth(0.2, 0.7, z) * (1 - Math.abs(x)); // temporal lobe
      const r = folds(x + sideSign * 3.7, y, z);
      const d = (r - 0.65) * 0.045 * (inner ? 0.35 : 1);
      const len = Math.hypot(X, Y, Z) || 1;
      X += (X / len) * d; Y += (Y / len) * d; Z += (Z / len) * d;
      p.setXYZ(i, X, Y, Z);
      tmp.copy(palette.sulcus).lerp(palette.gyrus, 0.25 + 0.75 * smooth(0.15, 0.75, r));
      colors.set([tmp.r, tmp.g, tmp.b], i * 3);
    }
    g.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    g.computeVertexNormals();
    const m = new THREE.Mesh(g, brainMat);
    m.position.x = sideSign * 0.112;
    return m;
  }
  brain.add(hemisphere(1), hemisphere(-1));

  const cereGeo = new THREE.SphereGeometry(1, 96, 64);
  const cp = cereGeo.attributes.position;
  const cc = new Float32Array(cp.count * 3);
  for (let i = 0; i < cp.count; i++) {
    const x = cp.getX(i), y = cp.getY(i), z = cp.getZ(i);
    const band = 0.5 + 0.5 * Math.sin(y * 42);
    const s = 1 + 0.04 * band;
    cp.setXYZ(i, x * 0.36 * s, y * 0.15 * s, z * 0.2 * s);
    tmp.copy(palette.sulcus).lerp(palette.gyrus, 0.35 + 0.5 * band);
    cc.set([tmp.r, tmp.g, tmp.b], i * 3);
  }
  cereGeo.setAttribute('color', new THREE.BufferAttribute(cc, 3));
  cereGeo.computeVertexNormals();
  const cerebellum = new THREE.Mesh(cereGeo, brainMat);
  cerebellum.position.set(0, -0.3, -0.34);
  brain.add(cerebellum);

  // ---- Sizing, motion, lifecycle -----------------------------------------
  const resize = () => {
    const { clientWidth: w, clientHeight: h } = canvas;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    // Keep the whole head in frame on tall, narrow stages
    camera.position.z = camera.aspect < 0.85 ? 7 / Math.max(camera.aspect, 0.55) * 0.85 : 7;
    camera.updateProjectionMatrix();
  };
  new ResizeObserver(resize).observe(canvas);
  resize();

  const tilt = { x: 0, y: 0, tx: 0, ty: 0 };
  if (matchMedia('(pointer: fine)').matches) {
    addEventListener('pointermove', (e) => {
      tilt.tx = (e.clientY / innerHeight - 0.5) * 0.14;
      tilt.ty = (e.clientX / innerWidth - 0.5) * 0.3;
    }, { passive: true });
  }

  figure.rotation.y = -0.55; // three-quarter view to start
  figure.position.y = -0.08;
  const clock = new THREE.Clock();
  let running = false;
  let visible = true;

  const frame = () => {
    if (!running) return;
    const dt = Math.min(clock.getDelta(), 0.05);
    const t = clock.elapsedTime;
    figure.rotation.y += dt * 0.16;
    tilt.x += (tilt.tx - tilt.x) * 0.04;
    tilt.y += (tilt.ty - tilt.y) * 0.04;
    figure.rotation.x = tilt.x;
    figure.position.x = tilt.y * 0.3;
    figure.position.y = -0.08 + Math.sin(t * 0.6) * 0.025; // breathing drift
    pointsMat.uniforms.uTime.value = t;
    renderer.render(scene, camera);
    requestAnimationFrame(frame);
  };
  const start = () => {
    if (running || reduceMotion.matches || !visible || document.hidden) return;
    running = true; clock.getDelta(); requestAnimationFrame(frame);
  };
  const stop = () => { running = false; };

  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    visible ? start() : stop();
  }).observe(canvas);
  document.addEventListener('visibilitychange', () => (document.hidden ? stop() : start()));
  reduceMotion.addEventListener('change', () => { if (reduceMotion.matches) { stop(); renderer.render(scene, camera); } else start(); });

  renderer.render(scene, camera); // static first frame (and the reduced-motion view)
  canvas.classList.add('is-ready');
  start();
}
