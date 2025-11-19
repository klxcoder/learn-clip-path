export const MouseButton = {
  Left: 0,
  Middle: 1,
  Right: 2,
} as const;

export const PolygonMode = {
  Add: 0,
  Edit: 1,
  View: 2,
  Remove: 3,
} as const;

export type Point = {
  x: number,
  y: number,
}