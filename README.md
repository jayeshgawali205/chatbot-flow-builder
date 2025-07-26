# Chatbot Flow Builder

A React-based visual flow builder for creating chatbot conversation flows using drag-and-drop interface built with React Flow.

##  Live Demo

**Deployed Application**: https://chatbot-flow-builder-h48q6jp0c-jayesh-gawalis-projects.vercel.app

**GitHub Repository**: https://github.com/jayeshgawali205/chatbot-flow-builder

---


## Features

### Implemented Features (As per Requirements)

- **Text Node Support**: Create and manage text message nodes
- **Drag & Drop Interface**: Drag nodes from the panel to create new text nodes
- **Node Connections**: Connect nodes with edges to define conversation flow
- **Settings Panel**: Edit text content of selected nodes
- **Save Validation**: Validates flow before saving with proper error handling
- **Extensible Architecture**: Easy to add new node types in the future

### Key Functionalities

1. **Text Nodes**
   - Multiple text nodes can be added to the flow
   - Each node displays message content
   - Nodes can be selected and edited

2. **Nodes Panel**
   - Houses all available node types
   - Currently supports Message nodes
   - Extensible design for future node types

3. **Edge Connections**
   - Source handles can only have ONE outgoing connection
   - Target handles can have MULTIPLE incoming connections
   - Visual feedback for connections

4. **Settings Panel**
   - Replaces Nodes Panel when a node is selected
   - Text field to edit the selected node's message
   - Back button to return to Nodes Panel

5. **Save Functionality**
   - Validates the flow before saving
   - Shows error if more than one node has empty target handles
   - Success message on valid save

## Technology Stack

- **React 18** - Frontend framework
- **React Flow** - Flow builder library
- **CSS3** - Styling
- **Create React App** - Build tooling

## Project Creation & Development Process

### How This Project Was Built

1. **Project Initialization**
   npx create-react-app chatbot-flow-builder
   cd chatbot-flow-builder


2. **React Flow Integration**
   npm install reactflow


3. **Project Structure Setup**
   - Created modular component architecture
   - Separated concerns with dedicated CSS files
   - Implemented extensible design patterns

4. **Core Components Developed**
   - `App.js` - Main application logic and state management
   - `TextNode.js` - Custom node component with handles
   - `NodesPanel.js` - Drag & drop interface for adding nodes
   - `SettingsPanel.js` - Node editing interface

5. **Key Features Implementation**
   - Drag & drop functionality using React Flow's built-in features
   - Node connection system with validation rules
   - Real-time text editing with state synchronization
   - Flow validation before saving

### Development Workflow

1. **Component-First Approach**: Built reusable, modular components
2. **State Management**: Used React hooks for efficient state handling
3. **UI/UX Focus**: Implemented professional interface with smooth interactions
4. **Validation Logic**: Added comprehensive error handling and user feedback

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and enhanced with React Flow for the flow builder functionality.

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

### Installation & Setup

1. **Clone the repository**
   git clone https://github.com/jayeshgawali205/chatbot-flow-builder.git
   cd chatbot-flow-builder


2. **Install dependencies**
   npm install


   This will install all required dependencies including:
   - `react` & `react-dom` - Core React libraries
   - `reactflow` - Flow builder library
   - Other Create React App dependencies

3. **Start the development server**
   npm start

   
   Runs the app in development mode.\
   Open [http://localhost:3000](http://localhost:3000) to view it in your browser.\
   The page will reload when you make changes.

4. **Build for production**
   npm run build

   
   Builds the app for production to the `build` folder.\
   It correctly bundles React in production mode and optimizes the build for the best performance.

## How to Use the Application

### Application Workflow

1. **Starting the Application**
   - Run `npm start` to launch the development server
   - Navigate to `http://localhost:3000` in your browser
   - You'll see the main interface with a canvas and nodes panel

2. **Creating Your First Flow**
   
   **Step 1: Add Nodes**
   - Look at the right panel labeled "Nodes Panel"
   - Drag the "Message" node from the panel
   - Drop it anywhere on the canvas
   - Repeat to add more nodes

   **Step 2: Edit Node Content**
   - Click on any node to select it
   - The right panel switches to "Settings Panel"
   - Edit the message text in the textarea
   - Changes appear in real-time on the node

   **Step 3: Connect Nodes**
   - Hover over the bottom of a node to see the source handle (blue dot)
   - Click and drag from the source handle to the top of another node (target handle)
   - This creates a connection showing the conversation flow
   - Note: Each source can only connect to one target, but targets can receive multiple connections

   **Step 4: Save Your Flow**
   - Click "Save Changes" button in the top-right header
   - The system validates your flow automatically
   - Success message appears if the flow is valid
   - Error message shows if there are validation issues

### Advanced Features

- **Canvas Navigation**: Use mouse wheel to zoom, click and drag to pan
- **MiniMap**: Small overview in bottom-right corner for navigation
- **Node Selection**: Click nodes to edit, click empty space to deselect
- **Connection Rules**: System prevents invalid connections automatically


## 📝 Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## 🔧 Learn More & Additional Resources

### React Flow Documentation
- [React Flow Docs](https://reactflow.dev/) - Official React Flow documentation
- [React Flow Examples](https://reactflow.dev/examples) - Interactive examples and tutorials

### Create React App Documentation
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Useful Create React App Sections

#### Code Splitting
This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size
This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App
This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration
This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment
This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### Troubleshooting: `npm run build` fails to minify
This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

---

**Project Created by:** Jayesh Gawali  
**Task:** BiteSpeed Frontend Task - Chatbot Flow Builder  
**Technologies:** React, React Flow, CSS3, Create React App
**Submission Date:** 26-07-2025