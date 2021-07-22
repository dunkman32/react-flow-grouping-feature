import {useStoreActions, useStoreState} from "react-flow-renderer";
import {useEffect} from "react";


/**
 * The main idea is that the nodes that should be grouped have a certain type.
 * I'm taking the  midpoints of these nodes to calculate whether or not
 * these midpoints fall between those 4 points which we call the grouping area
 */

const InternalState = () => {
    // reg: https://reactflow.dev/docs/api/internal-state-actions/
    const {nodes} = useStoreState((store) => store)
    const {setSelectedElements} = useStoreActions((actions) => actions)

    // grouping node elType is groupArea, so I take this node from react-flow story
    const groupArea = nodes.find(({elType}) => elType === 'groupArea')
    useEffect(() => {
        if (groupArea?.__rf.isDragging) {
            const rf = groupArea.__rf
            const rect = {
                a1: rf.position.x,
                a2: rf.position.x + rf.width,
                a3: rf.position.y,
                a4: rf.position.y + rf.height
            }
            setSelectedElements(nodes.filter((node) => {
                if (node.elType !== '+') {
                    return false
                }
                // center coordinates of current node which is selectable
                const x = node.__rf.position.x + node.__rf.width / 2
                const y = node.__rf.position.y - node.__rf.height / 2
                return x > rect.a1 && x < rect.a2 && y > rect.a3 && y < rect.a4
            }))
        }
    }, [groupArea, setSelectedElements, nodes])
    return <></>
}

export default InternalState
