import { useEffect, useRef } from "react";
import * as THREE from "three";

function getThemeColor(name) {
  const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return value;
}

export default function HeroCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(48, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.set(0, 0.2, 7.5);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const ambient = new THREE.AmbientLight(getThemeColor("--blue-100"), 1.05);
    const point = new THREE.PointLight(getThemeColor("--accent-electric"), 2.6, 30);
    point.position.set(4, 4, 6);
    const fill = new THREE.PointLight(getThemeColor("--accent-sapphire"), 1.6, 20);
    fill.position.set(-5, -2, 4);
    scene.add(ambient, point, fill);

    const globeGeometry = new THREE.SphereGeometry(2.1, 28, 28);
    const globeMaterial = new THREE.PointsMaterial({
      color: getThemeColor("--blue-300"),
      size: 0.05,
      transparent: true,
      opacity: 0.95,
    });
    const globe = new THREE.Points(globeGeometry, globeMaterial);
    scene.add(globe);

    const wireframe = new THREE.Mesh(
      new THREE.SphereGeometry(2.12, 18, 18),
      new THREE.MeshBasicMaterial({
        color: getThemeColor("--blue-500"),
        wireframe: true,
        transparent: true,
        opacity: 0.22,
      }),
    );
    scene.add(wireframe);

    const floatingShapes = [];
    const materials = [
      new THREE.MeshStandardMaterial({ color: getThemeColor("--accent-electric"), roughness: 0.28, metalness: 0.2, emissive: new THREE.Color(getThemeColor("--accent-electric")).multiplyScalar(0.1) }),
      new THREE.MeshStandardMaterial({ color: getThemeColor("--blue-100"), roughness: 0.35, metalness: 0.08 }),
      new THREE.MeshStandardMaterial({ color: getThemeColor("--accent-sapphire"), roughness: 0.42, metalness: 0.12 }),
    ];

    const geometries = [
      new THREE.ConeGeometry(0.28, 1.2, 6),
      new THREE.OctahedronGeometry(0.48, 0),
      new THREE.TetrahedronGeometry(0.42, 0),
    ];

    for (let index = 0; index < 7; index += 1) {
      const mesh = new THREE.Mesh(
        geometries[index % geometries.length],
        materials[index % materials.length],
      );
      mesh.position.set(
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 3,
      );
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      mesh.userData = {
        speed: 0.002 + Math.random() * 0.0035,
        drift: Math.random() * Math.PI * 2,
      };
      floatingShapes.push(mesh);
      scene.add(mesh);
    }

    let animationFrame = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();
      globe.rotation.y += 0.0022;
      globe.rotation.x = Math.sin(elapsed * 0.4) * 0.12;
      wireframe.rotation.y += 0.0016;
      wireframe.rotation.z = Math.cos(elapsed * 0.25) * 0.05;

      floatingShapes.forEach((mesh, index) => {
        mesh.rotation.x += mesh.userData.speed;
        mesh.rotation.y += mesh.userData.speed * 1.2;
        mesh.position.y += Math.sin(elapsed + mesh.userData.drift + index) * 0.0025;
        mesh.position.x += Math.cos(elapsed * 0.7 + index) * 0.001;
      });

      renderer.render(scene, camera);
      animationFrame = window.requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", handleResize);
      floatingShapes.forEach((shape) => {
        shape.geometry.dispose();
        shape.material.dispose();
      });
      globeGeometry.dispose();
      globeMaterial.dispose();
      wireframe.geometry.dispose();
      wireframe.material.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="h-full min-h-[320px] w-full" aria-hidden="true" />;
}

