import createNumberNode from '../../../node-operations/create-node/create-number-node';
import { FunctionHeaderItem, NumberNode } from '../../../types/nodes.types';
import { PluginFragment } from '../../../utils/plugin-builder';

const doubleNumberHeader: FunctionHeaderItem[] = [
    { name: 'n', type: 'number', evaluate: true },
    { name: 'x', type: 'number', evaluate: true },
]

const gganzzahlFragment = new PluginFragment().addFunction(
    'gganzzahl',
    doubleNumberHeader,
    'Checks if a value is bigger than a given threshold',
    'Überprüft, ob eine Zahl größer als ein gegebener Schwellenwert ist',
    ({ getParameter, runtimeError }) => {
        const n = (<NumberNode>getParameter('n')).value;
        if (isNaN(n)) {
            throw runtimeError('Funktion gganzzahl funktioniert nur mit Zahlen.');
        }
        const x = (<NumberNode>getParameter('x')).value;
        if (isNaN(x)) {
            throw runtimeError('Funktion gganzzahl funktioniert nur mit Zahlen.');
        }

        if (n > x) {
            return createNumberNode(1);
        } else {
            return createNumberNode(0);
        }
    },
)

export default gganzzahlFragment;