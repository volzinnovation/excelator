import createNumberNode from '../../../node-operations/create-node/create-number-node';
import { FunctionHeaderItem, NumberNode } from '../../../types/nodes.types';
import { PluginFragment } from '../../../utils/plugin-builder';

const doubleNumberHeader: FunctionHeaderItem[] = [{ name: 'n', type: 'number', evaluate: true }];

const deltaFragment = new PluginFragment().addFunction(
    'delta',
    doubleNumberHeader,
    'Checks if two values are equal',
    'Überprüft, ob zwei Werte gleich sind',
    ({ getParameter, runtimeError }) => {
        const n = (<NumberNode>getParameter('n')).value;
            if (isNaN(n)) {
                    throw runtimeError('Funktion Delta funktioniert nur mit Zahlen.');
            }
            const x = (<NumberNode>getParameter('x')).value;
            if (isNaN(n)) {
                    throw runtimeError('Funktion Delta funktioniert nur mit Zahlen.');
            }

            if (n === x) {
                    return createNumberNode(1);
            } else {
                    return createNumberNode(0);
            }
    },
);

export default deltaFragment;