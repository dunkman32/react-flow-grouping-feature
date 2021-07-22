import {useState} from 'react'
import ReactFlow, {addEdge, updateEdge} from 'react-flow-renderer'
import initialElements from './initial-elements'
import './styles.css';
import InternalState from "./internal-state";

const onLoad = (reactFlowInstance) => reactFlowInstance.fitView()


/**
 * @returns {JSX.Element}
 * desc: just a typical component with some functions and child (InternalState) where is main logic
 * example copied from https://reactflow.dev/examples/ 😅😅😅😅😅😅
 */
const PlayGround = () => {
    const [elements, setElements] = useState(initialElements);
    const onConnect = (params) => setElements((els) => addEdge(params, els));
    const onEdgeUpdate = (oldEdge, newConnection) =>
        setElements((els) => updateEdge(oldEdge, newConnection, els))

    return (
            <ReactFlow
                onLoad={onLoad}
                elements={elements}
                onConnect={onConnect}
                selectNodesOnDrag={true}
                onEdgeUpdate={onEdgeUpdate}
            >
                <InternalState/>
            </ReactFlow>
    )
}

export default PlayGround
