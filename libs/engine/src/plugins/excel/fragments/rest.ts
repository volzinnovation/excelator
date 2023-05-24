import createNumberNode from '../../../node-operations/create-node/create-number-node';
import { FunctionHeaderItem, NumberNode } from '../../../types/nodes.types';
import { PluginFragment } from '../../../utils/plugin-builder';

const doubleNumberHeader: FunctionHeaderItem[] = [
    { name: 'n', type: 'number', evaluate: true },
    { name: 'a', type: 'number', evaluate: true },
]


const restFragment = new PluginFragment().addFunction(
    'rest',
    doubleNumberHeader,
    'Returns the remainder of a division',
    'Gibt den Rest einer Division zurück',
    ({ getParameter, runtimeError }) => {
        const n = (<NumberNode>getParameter('n')).value;
        const a = (<NumberNode>getParameter('a')).value;
        if (isNaN(n) || isNaN(a)) {
            throw runtimeError('Funktion rest funktioniert nur mit Zahlen.');
        }else if (a === 0) {
            throw runtimeError('Division durch Null ist nicht zulässig.');
        }
        return createNumberNode(((n % a) + a) % a);
    },

)

export default restFragment;
