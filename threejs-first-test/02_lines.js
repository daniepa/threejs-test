import * as THREE from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  45, window.innerWidth / window.innerHeight, 1, 500);

camera.position.set(0,0,50);
camera.lookAt(0,0,0);

// renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth / 1.5, window.innerHeight / 1.5);
document.body.appendChild(renderer.domElement);

// creazione della geometria
const points = [];
points.push(new THREE.Vector3(-10,0,0));
points.push(new THREE.Vector3(0,10,0));
points.push(new THREE.Vector3(10,0,0));

const geometry = new THREE.BufferGeometry().setFromPoints(points);
const material = new THREE.LineBasicMaterial({ color: '#00ff00' });

const line = new THREE.Line(geometry, material);
scene.add(line);

renderer.render(scene, camera);

// function animate() {
// }
// if (WebGL.isWebGL2Available()) {
//   renderer.setAnimationLoop(animate);
// }
// else {
//   const warning = WebGL.getWebGL2ErrorMessage();
//   document.body.appendChild(warning);
// }