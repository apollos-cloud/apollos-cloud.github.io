import ReactFlow, { MiniMap, Controls } from 'react-flow-renderer';
import { nodes, edges } from './diagramData';

export const AgileDiagram = () => {
  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      style={{ width: '100%', height: '100%' }}
      fitView
      panOnDrag={false}
      zoomOnDoubleClick={false}
      zoomOnPinch={false}
      zoomOnScroll={false}
    >
      <MiniMap />
      <Controls />
    </ReactFlow>
  );
};
