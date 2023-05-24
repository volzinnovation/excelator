import { FunctionHeaderItem } from '../../../types/nodes.types';
import { PluginFragment } from '../../../utils/plugin-builder';
import createStringNode from '../../../node-operations/create-node/create-string-node';

const singleNumberHeader: FunctionHeaderItem[] = [
    { name: 'n', type: 'number', evaluate: true },
];

const falschFragment = new PluginFragment().addFunction(
    'falsch',
    singleNumberHeader,
    'returns the truth value "false"',
    'Gibt den Wahrheitswert "falsch" zurück',
    () => {
        return createStringNode("FALSCH");
    },
);

export default falschFragment;
