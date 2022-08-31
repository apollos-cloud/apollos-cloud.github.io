import { Node, Edge, Position, MarkerType } from 'react-flow-renderer';

export const nodes: Node[] = [
  {
    id: 'Stakeholders management',
    type: 'input',
    data: { label: 'Stakeholders management' },
    position: { x: -250, y: -50 },
    sourcePosition: Position.Right
  },
  {
    id: 'Transformation of business requirements',
    data: { label: 'Transformation of business requirements' },
    position: { x: 70, y: 100 },
    targetPosition: Position.Top,
    sourcePosition: Position.Left
  },
  {
    id: 'Milestone Breakdown',
    data: { label: 'Milestone Breakdown' },
    position: { x: -250, y: 250 },
    targetPosition: Position.Bottom,
    sourcePosition: Position.Top,
    style: { height: 50 }
  },
  {
    id: 'Budget Review',
    data: { label: 'Budget Review' },
    position: { x: 0, y: 250 },
    targetPosition: Position.Bottom,
    sourcePosition: Position.Top,
    style: { height: 50 }
  },
  {
    id: 'Technical Implementation',
    data: { label: 'Technical Implementation' },
    position: { x: -250, y: 375 },
    targetPosition: Position.Top,
    sourcePosition: Position.Bottom,
    style: { height: 50 }
  },
  {
    id: 'Stakeholder Report',
    data: { label: 'Stakeholder Report' },
    position: { x: 0, y: 375 },
    targetPosition: Position.Bottom,
    sourcePosition: Position.Top,
    style: { height: 50 }
  }
];
export const edges: Edge[] = [
  {
    id: 'intial gathering information',
    source: 'Stakeholders management',
    target: 'Transformation of business requirements',
    animated: true,
    markerStart: MarkerType.Arrow,
    markerEnd: MarkerType.Arrow,
    label: 'Clarifications the product',
    style: { stroke: 'red' }
  },
  {
    id: 'executing',
    source: 'Transformation of business requirements',
    target: 'Development',
    animated: true,
    markerStart: MarkerType.Arrow,
    markerEnd: MarkerType.Arrow,
    label: 'Technical implementation'
  },
  {
    id: 'Project Management',
    source: 'Milestone Breakdown',
    target: 'Transformation of business requirements',
    markerStart: MarkerType.ArrowClosed,
    markerEnd: MarkerType.ArrowClosed,
    label: 'Project Management',
    type: 'step',
    animated: true
  },
  {
    id: 'Milestone Budget',
    source: 'Milestone Breakdown',
    target: 'Budget Review',
    markerStart: MarkerType.ArrowClosed,
    markerEnd: MarkerType.ArrowClosed,
    label: 'Milestone Budget',
    type: 'step',
    animated: true
  },
  {
    id: 'Technical Feedback',
    target: 'Technical Implementation',
    source: 'Stakeholder Report',
    markerStart: MarkerType.ArrowClosed,
    markerEnd: MarkerType.ArrowClosed,
    label: 'Technical Feedback',
    type: 'step',
    animated: true
  },
  {
    id: 'Stakeholders Feedback',
    target: 'Stakeholder Report',
    source: 'Technical Implementation',
    markerStart: MarkerType.ArrowClosed,
    markerEnd: MarkerType.ArrowClosed,
    label: 'Stakeholders Feedback',
    type: 'step',
    animated: true
  }
];
