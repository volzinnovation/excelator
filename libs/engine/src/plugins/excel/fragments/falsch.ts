import createNumberNode from '../../../node-operations/create-node/create-number-node';
import { FunctionHeaderItem, NumberNode } from '../../../types/nodes.types';
import { PluginFragment } from '../../../utils/plugin-builder';

const singleNumberHeader: FunctionHeaderItem[] = [{ name: 'n', type: 'number', evaluate: true }];

const aufrundenFragment = new PluginFragment().addFunction(
    'aufrunden',
    singleNumberHeader,
    'Round up without decimal place',
    'Aufrunden ohne Nachkommastelle',
    ({ getParameter, runtimeError }) => {
        const n = (<NumberNode>getParameter('n')).value;

        if (isNaN(n)) {
            throw runtimeError('Funktion Aufrunden funktioniert nur mit Zahlen.');
        }
        return createNumberNode(Math.ceil(n));
        },
);

export default aufrundenFragment;


