import { FunctionHeaderItem, NumberNode } from '../../../types/nodes.types';
import { PluginFragment } from '../../../utils/plugin-builder';

const singleNumberHeader: FunctionHeaderItem[] = [{ name: 'n', type: 'number', evaluate: true }];

const istgeradeFragment = new PluginFragment().addFunction(
    'istgerade',
    singleNumberHeader,
    'Returns true if a number is even, or false if it is odd.',
    'Gibt true zurück, wenn eine Zahl gerade ist, andernfalls false.',
    ({ getParameter, runtimeError }) => {
        const n = (<NumberNode>getParameter('n')).value;
        if (isNaN(n)) {
            throw runtimeError('Die Funktion istgerade funktioniert nur mit Zahlen.');
        }
        return {
            type: 'boolean',
            value: n % 2 === 0,
        };
    },
);
export default istgeradeFragment;
