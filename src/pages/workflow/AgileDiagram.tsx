import ReactFlow, { MiniMap, Controls, Node, Edge } from 'react-flow-renderer';

const nodes: Node[] = [];
const edges: Edge[] = [];

export const AgileDiagram = () => {
  return (
    <ReactFlow nodes={nodes} edges={edges}>
      <MiniMap />
      <Controls />
    </ReactFlow>
  );
};
