import React from 'react';
import { Handle, Position } from 'reactflow';
import './TextNode.css';

function TextNode({ data, selected }) {
  return (
    <div className={`text-node ${selected ? 'selected' : ''}`}>
      {/* Target Handle (input) */}
      <Handle
        type="target"
        position={Position.Top}
        className="handle target-handle"
      />
      
      {/* Node Header */}
      <div className="node-header">
        <span className="node-icon">💬</span>
        <span className="node-title">Send Message</span>
      </div>
      
      {/* Node Content */}
      <div className="node-content">
        <p>{data.text}</p>
      </div>

      {/* Source Handle (output) */}
      <Handle
        type="source"
        position={Position.Bottom}
        className="handle source-handle"
      />
    </div>
  );
}

export default TextNode;