import React, { useState, useCallback, useRef } from "react";
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  Background,
  MiniMap,
} from "reactflow";
import "reactflow/dist/style.css";
import "./App.css";
import TextNode from "./components/TextNode";
import NodesPanel from "./components/NodesPanel";
import SettingsPanel from "./components/SettingsPanel";

// Define custom node types
const nodeTypes = {
  textNode: TextNode,
};

// Initial nodes and edges (empty to start)
const initialNodes = [];
const initialEdges = [];


function App() {
  // React Flow hooks for managing nodes and edges
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  // State for selected node and panels
  const [selectedNode, setSelectedNode] = useState(null);
  const [showSettings, setShowSettings] = useState(false);

  // Ref for tracking node IDs
  const nodeIdRef = useRef(1);
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  // Handle connection between nodes
  const onConnect = useCallback(
    (params) => {
      // Check if source already has an outgoing connection
      const sourceHasConnection = edges.some(
        (edge) => edge.source === params.source
      );

      if (sourceHasConnection) {
        alert("A source handle can only have one outgoing connection!");
        return;
      }

      setEdges((eds) => addEdge(params, eds));
    },
    [edges, setEdges]
  );

  // Handle node selection
  const onNodeClick = useCallback((event, node) => {
    setSelectedNode(node);
    setShowSettings(true);
  }, []);

  // Handle clicking on empty space (deselect node)
  const onPaneClick = useCallback(() => {
    setSelectedNode(null);
    setShowSettings(false);
  }, []);

  // Add new text node by dragging from panel
  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData("application/reactflow");

      if (typeof type === "undefined" || !type) {
        return;
      }

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });

      const newNode = {
        id: `node_${nodeIdRef.current++}`,
        type: "textNode",
        position,
        data: {
          label: `Text Message ${nodeIdRef.current - 1}`,
          text: "Enter your message here...",
        },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance, setNodes]
  );

  // Update node text from settings panel
  const updateNodeText = useCallback(
    (nodeId, newText) => {
      setNodes((nds) =>
        nds.map((node) => {
          if (node.id === nodeId) {
            return {
              ...node,
              data: {
                ...node.data,
                text: newText,
                label:
                  newText.substring(0, 20) + (newText.length > 20 ? "..." : ""),
              },
            };
          }
          return node;
        })
      );
    },
    [setNodes]
  );

  // Save flow validation
  const handleSave = useCallback(() => {
    // Check if there are more than one nodes
    if (nodes.length > 1) {
      // Check for nodes with empty target handles (no incoming connections)
      const nodesWithoutIncoming = nodes.filter((node) => {
        return !edges.some((edge) => edge.target === node.id);
      });

      if (nodesWithoutIncoming.length > 1) {
        alert(
          "Error: More than one node has empty target handles. Please connect all nodes properly."
        );
        return;
      }
    }

    // If validation passes
    alert("Flow saved successfully!");
    console.log("Saved Flow:", { nodes, edges });
  }, [nodes, edges]);

  return (
    <div className="app">
      {/* Header */}
      <div className="header">
        <h1>Chatbot Flow Builder</h1>
        <button className="save-btn" onClick={handleSave}>
          Save Changes
        </button>
      </div>

      <div className="main-content">
        {/* React Flow Canvas */}
        <div className="flow-container" ref={reactFlowWrapper}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onNodeClick={onNodeClick}
            onPaneClick={onPaneClick}
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            onDragOver={onDragOver}
            nodeTypes={nodeTypes}
            fitView
          >
            <Controls />
            <MiniMap />
            <Background variant="dots" gap={12} size={1} />
          </ReactFlow>
        </div>

        {/* Side Panel */}
        <div className="side-panel">
          {showSettings ? (
            <SettingsPanel
              selectedNode={selectedNode}
              updateNodeText={updateNodeText}
              onBack={() => setShowSettings(false)}
            />
          ) : (
            <NodesPanel />
          )}
        </div>
      </div>
    </div>
  );
}

// Wrap App with ReactFlowProvider
function AppWithProvider() {
  return (
    <ReactFlowProvider>
      <App />
    </ReactFlowProvider>
  );
}

export default AppWithProvider;
