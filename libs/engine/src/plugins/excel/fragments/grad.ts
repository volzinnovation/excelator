import createNumberNode from '../../../node-operations/create-node/create-number-node';
import { FunctionHeaderItem, NumberNode } from '../../../types/nodes.types';
import { PluginFragment } from '../../../utils/plugin-builder';

const singleNumberHeader: FunctionHeaderItem[] = [{ name: 'n', type: 'number', evaluate: true }];

const gradFragment = new PluginFragment().addFunction(
    'grad',
    singleNumberHeader,
    'Calculates the angle to radian',
    'Berechnet das Gradmaß eines Winkels',
    ({ getParameter, runtimeError }) => {
        const n = (<NumberNode>getParameter('n')).value;
            return createNumberNode((n * 180) / Math.PI);
    },
)

export default gradFragment;
