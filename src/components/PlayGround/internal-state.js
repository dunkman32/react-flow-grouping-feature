import {useStoreActions, useStoreState} from "react-flow-renderer";
import {useCallback, useEffect, useMemo, useState} from "react";

/**
 * The main idea is that the nodes that should be grouped have a certain type.
 * I'm taking the  midpoints of these nodes to calculate whether or not
 * these midpoints fall between those 4 points which we call the grouping area
 */

const InternalState = () => {
    const {nodes} = useStoreState((store) => store)

    const {setSelectedElements} = useStoreActions((actions) => actions)

    const [inners, setInners] = useState([])
    // grouping node elType is groupArea, so I take this node from react-flow story
    const {
        groupAreas,
        selectableNodes,
    } = useMemo(() => ({
        groupAreas: nodes.filter(({elType}) => elType === 'groupArea'),
        selectableNodes: nodes.filter(({selectable}) => selectable),
    }), [nodes])

    const clearInners = useCallback(() => {
            setInners([])
        }
    , [])

    const groupNodes = useCallback((groupArea) => {
        const isAlreadyInInners = inners?.find(({id}) => id === groupArea.id)
        const rf = groupArea.__rf
        if (rf.isDragging && !isAlreadyInInners) {
            /**
             *  {{a1, a2, a3, a4}}
             *  a1: top left for X
             *  a2: top right for X
             *  a3: top left for Y
             *  a4: bottom left for Y
             */
            const rect = {
                a1: rf.position.x,
                a2: rf.position.x + rf.width,
                a3: rf.position.y,
                a4: rf.position.y + rf.height
            }
            /**
             * make selected elements whose centers (x, y)
             * are into those 4 (an) points
             */
            setSelectedElements(selectableNodes.filter((node) => {
                if (node.elType === '-' || node.id === groupArea.id) {
                    return false
                }
                const rf2 = node.__rf
                /**
                 *  center coordinates of current node which is selectable
                 */
                const x = rf2.position.x + rf2.width / 2
                const y = rf2.position.y + rf2.height / 2

                if (x > rect.a1 && x < rect.a2 && y > rect.a3 && y < rect.a4) {
                    const isAlreadyInInners = inners?.find(({id}) => id === node.id)
                    if (!isAlreadyInInners && node.elType === 'groupArea') {
                        setInners([...inners, {
                            id: node.id,
                            type: node.elType
                        }])
                    }
                    return true
                }
                return false
            }))
        }
    }, [inners, selectableNodes, setSelectedElements])

    useEffect(() => {
        groupAreas.forEach((groupArea) => {
            groupNodes(groupArea)
        })
    }, [groupAreas, setSelectedElements, nodes, groupNodes, inners])
    return <>
        <button className='button' onClick={clearInners}>
            click to clear inner group areas list
        </button>
    </>
}

export default InternalState
