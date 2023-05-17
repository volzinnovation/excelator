import createNumberNode from '../../../node-operations/create-node/create-number-node';
import { FunctionHeaderItem, NumberNode } from '../../../types/nodes.types';
import { PluginFragment } from '../../../utils/plugin-builder';

const singleNumberHeader: FunctionHeaderItem[] = [{ name: 'n', type: 'number', evaluate: true }];

const log10Fragment = new PluginFragment().addFunction(
    'log10',
    singleNumberHeader,
    'Returns the base 10 logarithm of a number.',
    'Gibt den Logarithmus zur Basis 10 einer Zahl zurück.',
    ({ getParameter, runtimeError }) => {
        const n = (<NumberNode>getParameter('n')).value;
        if (isNaN(n) || n <= 0) {
            throw runtimeError('Funktion LOG10 funktioniert nur mit positiven Zahlen.');
        }
        return createNumberNode(Math.log10(n));
    },
);
export default log10Fragment;
