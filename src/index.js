import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { BoxGeometry, TextureLoader } from "three";

import isWebGLAvailable from "./WebGL";

// Need to require all files so that Webpack knows to process them
require("./style.css");
require("./index.html");


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

// geometry.applyMatrix4([])
let matrix = new THREE.Matrix4(
    0.5981300006716681, 0.7921181089976145, 1.8297291093374277, 0,
    0.9982886796694259, 0.05546048220385699, 0.2789934828672578, 0,
    0.12043256484812515, 1.6724220326079262, -0.7633862853691145, 0,
    0, 0, 0, 1
)

const cube = new THREE.Mesh(geometry, boxMat);

cube.applyMatrix4(matrix);

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