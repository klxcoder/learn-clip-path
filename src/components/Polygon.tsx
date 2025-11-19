import type { ReactElement } from "react";

interface PolygonProps {
  readonly onClick: () => void;
}

function Polygon({ onClick }: PolygonProps): ReactElement {
  return (
    <div
      onClick={onClick}
      style={{
        width: '200px',
        height: '200px',
        backgroundColor: 'rgba(255,0,0,0.3)',
        cursor: 'pointer',
        clipPath: 'polygon(0% 0%, 100% 0%, 80% 100%, 20% 100%)',
      }}
    />
  );
}

export default Polygon;