import * as THREE from 'three';

$(function () {
  const camera = new THREE.PerspectiveCamera(120, window.innerWidth / window.innerHeight, 1, 10000);
  camera.position.z = 1000;

  const scene = new THREE.Scene();

  const container = $('#metric');

  const PI2 = Math.PI * 2;
  const SEPARATION = 100;
  const AMOUNTX = 50;
  const AMOUNTY = 50;

  const material = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 5,
  });

  let particles = [];

  const geometry = new THREE.BufferGeometry();
  const positions = [];

  for (let ix = 0; ix < AMOUNTX; ix++) {
    for (let iy = 0; iy < AMOUNTY; iy++) {
      positions.push(ix * SEPARATION - (AMOUNTX * SEPARATION) / 2);
      positions.push(0); // Y position is 0 for now
      positions.push(iy * SEPARATION - (AMOUNTY * SEPARATION) / 2);
    }
  }

  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

  const particleSystem = new THREE.Points(geometry, material);

  scene.add(particleSystem);

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.append(renderer.domElement);
})
