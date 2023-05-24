import createNumberNode from '../../../node-operations/create-node/create-number-node';
import { FunctionHeaderItem, NumberNode } from '../../../types/nodes.types';
import { PluginFragment } from '../../../utils/plugin-builder';

const singleNumberHeader: FunctionHeaderItem[] = [{ name: 'n', type: 'number', evaluate: true }];

const gradFragment = new PluginFragment().addFunction(
    'grad',
    singleNumberHeader,
    'Converts radiants to degrees',
    'Wandelt Bogenmaß (Radiant) in Gradmaß um',
    ({ getParameter })  => {
        const n = (<NumberNode>getParameter('n')).value;
            return createNumberNode((n * 180) / Math.PI);
    },
)

export default gradFragment;
