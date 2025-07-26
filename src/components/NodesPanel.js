import React from 'react';
import './NodesPanel.css';

function NodesPanel() {
  // Handle drag start for node creation
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div className="nodes-panel">
      <h3>Nodes Panel</h3>
      <div className="node-list">
        {/* Text Message Node */}
        <div
          className="draggable-node"
          onDragStart={(event) => onDragStart(event, 'textNode')}
          draggable
        >
          <div className="node-preview">
            <span className="node-icon">💬</span>
            <span>Message</span>
          </div>
          <p className="node-description">Send a text message</p>
        </div>
        
        {/* Placeholder for future node types */}
        <div className="future-nodes">
          <p>More node types coming soon...</p>
        </div>
      </div>
    </div>
  );
}

export default NodesPanel;
