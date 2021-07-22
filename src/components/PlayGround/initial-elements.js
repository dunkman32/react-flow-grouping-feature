import './styles.css';

// https://reactflow.dev/examples/
export default [
    {
        elType: '+',
        id: '1',
        type: 'input',
        data: {
            label: (
                <>
                    <strong>1</strong>
                </>
            ),
        },
        position: {x: 50, y: 150},
        className: 'element',
        connectable: true,
        selectable: true,
    },
    {
        elType: '+',
        id: '2',
        data: {
            label: (
                <>
                    <strong>2</strong>
                </>
            ),
        },
        position: {x: 250, y: 250},
        className: 'element',
        connectable: true,
        selectable: true,
    },
    {
        elType: '-',
        id: '3',
        data: {
            label: (
                    <strong>I don't join in any group</strong>
            ),
        },
        position: {x: 260, y: 0},
        className: 'element-dont',
        connectable: true,
    },
    {
        elType: 'groupArea',
        id: '4',
        data: {
            label: (
                <>
                    This is a <strong>unselectable group area</strong>
                </>
            ),
        },
        className: 'grouping-area',
        position: {x: 350, y: 100},
        connectable: true
    },
    {
        elType: 'groupArea',
        id: '5',
        data: {
            label: (
                <>
                    This is a <strong>selectable group area</strong>
                </>
            ),
        },
        className: 'grouping-area-2',
        position: {x: 0, y: 100},
        connectable: true,
        selectable: true,
    },
    {
        id: 'e1-2',
        source: '1',
        target: '2',
        type: 'step',
        style: { stroke: 'cornflowerblue' },
        animated: true,
        labelStyle: { fill: 'cornflowerblue', fontWeight: 700 },
    },
    {
        id: 'e3-4',
        source: '3',
        target: '4',
        type: 'step',
        style: { stroke: '#222138' },
        animated: true,
        labelStyle: { fill: '#222138', fontWeight: 700 },
    },
];
