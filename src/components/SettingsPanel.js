import React, { useState, useEffect } from 'react';
import './SettingsPanel.css';

function SettingsPanel({ selectedNode, updateNodeText, onBack }) {
  const [text, setText] = useState('');

  // Update local state when selected node changes
  useEffect(() => {
    if (selectedNode) {
      setText(selectedNode.data.text || '');
    }
  }, [selectedNode]);

  // Handle text change
  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    if (selectedNode) {
      updateNodeText(selectedNode.id, newText);
    }
  };

  if (!selectedNode) return null;

  return (
    <div className="settings-panel">
      {/* Header with back button */}
      <div className="settings-header">
        <button className="back-btn" onClick={onBack}>
          Back
        </button>
        <h3>Message Settings</h3>
      </div>

      {/* Settings content */}
      <div className="settings-content">
        <div className="form-group">
          <label htmlFor="message-text">Message Text:</label>
          <textarea
            id="message-text"
            value={text}
            onChange={handleTextChange}
            placeholder="Enter your message here..."
            rows={4}
            className="message-input"
          />
        </div>
        
        <div className="node-info">
          <p><strong>Node ID:</strong> {selectedNode.id}</p>
          <p><strong>Node Type:</strong> Text Message</p>
        </div>
      </div>
    </div>
  );
}

export default SettingsPanel;