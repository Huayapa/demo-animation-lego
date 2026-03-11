
import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js";
export const MakeFigure = () => {
  const legoGroup = new THREE.Group();
  
  const material = new THREE.MeshStandardMaterial({ color: 0xff0000 });
  
  const baseGeometry = new THREE.BoxGeometry(3, 1, 1.5);
  const base = new THREE.Mesh(baseGeometry, material);
  
  legoGroup.add(base);
  
  const studGeometry = new THREE.CylinderGeometry(0.25, 0.25, 0.2, 32);
  
  const positions = [
    [-0.9, 0.6, -0.4],
    [-0.3, 0.6, -0.4],
    [0.3, 0.6, -0.4],
    [0.9, 0.6, -0.4],
    [-0.9, 0.6, 0.4],
    [-0.3, 0.6, 0.4],
    [0.3, 0.6, 0.4],
    [0.9, 0.6, 0.4],
  ];
  
  positions.forEach(pos=>{
    const stud = new THREE.Mesh(studGeometry, material);
    stud.position.set(pos[0],pos[1],pos[2]);
    legoGroup.add(stud);
  });
  return legoGroup
}