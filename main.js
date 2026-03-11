import { animate, MakeScene } from "./animation/scene.js";
import { MakeFigure } from "./animation/figure.js";
import { animateScroll } from "./animation/animationScroll.js";

const container = document.getElementById("three-container");
const {scene, camera, renderer} = MakeScene(container)

const legoGroup = MakeFigure()
scene.add(legoGroup);


animate(renderer, scene, camera);
animateScroll(legoGroup);


window.addEventListener("resize",()=>{
  const width = window.innerWidth;
  const height = window.innerHeight;
  
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});