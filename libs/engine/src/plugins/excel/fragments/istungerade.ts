import { FunctionHeaderItem, NumberNode } from '../../../types/nodes.types';
import { PluginFragment } from '../../../utils/plugin-builder';

const singleNumberHeader: FunctionHeaderItem[] = [{ name: 'n', type: 'number', evaluate: true }];

const istungeradeFragment = new PluginFragment().addFunction(
    'istungerade',
    singleNumberHeader,
    'Returns true if a number is odd, or false if it is even.',
    'Gibt true zurück, wenn eine Zahl ungerade ist, andernfalls false.',
    ({ getParameter, runtimeError }) => {
        const n = (<NumberNode>getParameter('n')).value;
        if (isNaN(n)) {
            throw runtimeError('Funktion ISTUNGERADE funktioniert nur mit Zahlen.');
        }
        return {
            type: 'boolean',
            value: n % 2 !== 0,
        };
    },
);
export default istungeradeFragment;
