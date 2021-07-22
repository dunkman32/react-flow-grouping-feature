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
        position: {x: 250, y: 0},
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
        position: {x: 100, y: 100},
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
        position: {x: 200, y: 100},
        className: 'element-dont',
        connectable: true,
    },
    {
        elType: 'groupArea',
        id: '4',
        data: {
            label: (
                <>
                    This is a <strong>Group Area</strong>
                </>
            ),
        },
        className: 'grouping-area',
        position: {x: 400, y: 100},
    },
];
