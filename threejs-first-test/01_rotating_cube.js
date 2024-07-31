import * as THREE from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth/1.5, window.innerHeight/1.5);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: '#ff0000' });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;
// camera.position.y = 2;
// camera.position.x = 2;

function animate() {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
if(WebGL.isWebGL2Available()) {
  renderer.setAnimationLoop(animate);
}
else {
  const warning = WebGL.getWebGL2ErrorMessage();
	document.body.appendChild( warning );
}