import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js";
export const MakeScene = (container) => {
  const scene = new THREE.Scene();
  
  const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
  );
  
  camera.position.z = 10;
  
  const renderer = new THREE.WebGLRenderer({
  alpha:true,
  antialias:true
  });

  const light = new THREE.DirectionalLight(0xffffff, 2);
  light.position.set(5,5,5);
  scene.add(light);
  
  const ambient = new THREE.AmbientLight(0xffffff, 1);
  scene.add(ambient);
  
  renderer.setSize(window.innerWidth, window.innerHeight);
  
  container.appendChild(renderer.domElement);

  camera.updateProjectionMatrix();
  return {scene, camera, renderer}
}

export function animate(renderer, scene, camera){
  requestAnimationFrame(() => animate(renderer, scene, camera));
  renderer.render(scene,camera);
}