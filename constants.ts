import * as THREE from 'three';

export const COLORS = {
  emerald: new THREE.Color('#085C36'), // Slightly more vibrant emerald
  emeraldDark: new THREE.Color('#00241B'),
  gold: new THREE.Color('#FFD700'),
  goldMetallic: new THREE.Color('#C5A059'),
  accentRed: new THREE.Color('#8a1c1c'),
  whiteWarm: new THREE.Color('#FFF8E7'),
};

export const CONFIG = {
  foliageCount: 30000, // Significantly increased from 12000
  ornamentCount: 500, // Increased from 300
  treeHeight: 12,
  treeBaseRadius: 4.8, // Slightly wider base
  scatterRadius: 18,
  transitionSpeed: 1.2, // Slightly faster snap
};

// Helper to generate a point on a cone surface
export const getConePoint = (
  height: number,
  radius: number,
  ratio: number, // 0 to 1 (bottom to top)
  angleOffset: number
): [number, number, number] => {
  const y = (ratio - 0.5) * height; // Center vertically
  const r = (1 - ratio) * radius;
  const x = r * Math.cos(angleOffset);
  const z = r * Math.sin(angleOffset);
  return [x, y, z];
};

// Helper to get a random point in a sphere
export const getSpherePoint = (radius: number): [number, number, number] => {
  const u = Math.random();
  const v = Math.random();
  const theta = 2 * Math.PI * u;
  const phi = Math.acos(2 * v - 1);
  const r = Math.cbrt(Math.random()) * radius;
  const sinPhi = Math.sin(phi);
  return [
    r * sinPhi * Math.cos(theta),
    r * sinPhi * Math.sin(theta),
    r * Math.cos(phi),
  ];
};