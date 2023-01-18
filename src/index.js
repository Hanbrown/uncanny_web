import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { BoxGeometry, TextureLoader } from "three";

import isWebGLAvailable from "./WebGL";


if (isWebGLAvailable) {
    console.log("Web GL Is available");
} else {
    console.log("Web GL is not available, this application will not work");
}

document.body.style.margin = 0;

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 100);

camera.position.y = 2;
camera.position.z = 3;

// Set size of canvas and add to index.html
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

// Allow orbit controls for main camera
new OrbitControls(camera, renderer.domElement);

// 1x1x1 Cube
const geometry = new BoxGeometry();
const boxMat = new THREE.MeshPhongMaterial({
    color: 0x00ffff,
    wireframe: false
});

const cube = new THREE.Mesh(geometry, boxMat);
scene.add(cube);

// Light
const lamp = new THREE.PointLight(0xffffff, 30, 100);
lamp.position.set(50, 50, 50);
scene.add(lamp);

// Allow canvas to be resized properly
const onWindowResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth / window.innerHeight);
    render();
};

window.addEventListener("resize", onWindowResize, false);



const render = () => {
    renderer.render(scene, camera);
}

const animate = () => {
    requestAnimationFrame(animate);

    render();
}

animate();