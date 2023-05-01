import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { BoxGeometry, TextureLoader } from "three";

import isWebGLAvailable from "./WebGL";

import BKG_IMG from "./bowling.jpg";

require("./style.css");
require("./index.html");


const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer();
let camera;
const init = (flength) => {
    if (isWebGLAvailable) console.log("WebGL is supported");
    else
        console.warn(
            "WebGL is not supported, this page will not work as intended"
        );

    camera = new THREE.PerspectiveCamera(
        flength, // TODO change to python result
        window.innerHeight / window.innerHeight,
        0.1,
        100
    );
    camera.position.y = 2;
    camera.position.z = 3;

    renderer.setSize(window.innerHeight, window.innerHeight);
    document.querySelector("#container").appendChild(renderer.domElement);

    new OrbitControls(camera, renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshPhongMaterial({
        color: 0x00ff00,
        wireframe: false,
    });

    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const cube2 = new THREE.Mesh(geometry, material);
    cube2.position.set(0, 0, -5);
    scene.add(cube2);

    const loader = new THREE.TextureLoader();
    const bgTexture = loader.load(BKG_IMG);
    scene.background = bgTexture;

    const lamp = new THREE.PointLight(0xffffff, 50, 100);
    lamp.position.set(50, 50, 50);
    scene.add(lamp);

    const lamp1 = new THREE.PointLight(0xffffff, 10, 100);
    lamp1.position.set(-50, 50, 50);
    scene.add(lamp1);
};

window.addEventListener("resize", onWindowResize, false);
function onWindowResize() {
    camera.aspect = window.innerHeight / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerHeight, window.innerHeight);
    render();
}

function animate() {
    requestAnimationFrame(animate);

    render();
}

function render() {
    renderer.render(scene, camera);
}

fetch("/focus")
    .then((res) => res.json())
    .then((res) => {
        init(res.length);
        animate();
    });
