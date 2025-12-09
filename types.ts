export enum TreeState {
  SCATTERED = 'SCATTERED',
  TREE_SHAPE = 'TREE_SHAPE',
}

export interface Coordinates {
  x: number;
  y: number;
  z: number;
}

export interface OrnamentData {
  id: number;
  type: 'box' | 'sphere' | 'light';
  color: string;
  scale: number;
  treePos: [number, number, number];
  scatterPos: [number, number, number];
  rotationSpeed: [number, number, number];
  randomPhase: number;
}
