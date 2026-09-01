// Fond 3D — sphère filaire type "réseau", décor discret derrière tout le contenu.
// Si Three.js ne charge pas (CDN indisponible), la page reste 100% fonctionnelle sans lui.

function initScene() {
  const canvas = document.getElementById("scene");
  if (typeof THREE === "undefined" || !canvas) { document.body.classList.add("no-scene"); return; }
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { document.body.classList.add("no-scene"); return; }

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.set(0, 0, 9);

  const group = new THREE.Group();
  scene.add(group);

  const geo = new THREE.IcosahedronGeometry(3.1, 2);
  const wire = new THREE.LineSegments(
    new THREE.WireframeGeometry(geo),
    new THREE.LineBasicMaterial({ color: 0xb7ffb0, transparent: true, opacity: 0.16 })
  );
  group.add(wire);

  const pointsMat = new THREE.PointsMaterial({ color: 0xb7ffb0, size: 0.045, transparent: true, opacity: 0.55 });
  const points = new THREE.Points(geo, pointsMat);
  group.add(points);

  let targetRotX = 0, targetRotY = 0;
  let mouseX = 0, mouseY = 0;

  window.addEventListener("mousemove", (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  function resize() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  }
  window.addEventListener("resize", resize);

  let scrollProgress = 0;
  function onScroll() {
    const doc = document.documentElement;
    const max = doc.scrollHeight - doc.clientHeight;
    scrollProgress = max > 0 ? window.scrollY / max : 0;
  }
  document.addEventListener("scroll", onScroll, { passive: true });

  let raf = 0;
  function tick() {
    targetRotY += 0.0016;
    group.rotation.y += (targetRotY + mouseX * 0.3 - group.rotation.y) * 0.04;
    group.rotation.x += (mouseY * 0.2 + scrollProgress * Math.PI * 0.6 - group.rotation.x) * 0.04;
    renderer.render(scene, camera);
    raf = requestAnimationFrame(tick);
  }
  tick();

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) cancelAnimationFrame(raf);
    else tick();
  });
}

initScene();
