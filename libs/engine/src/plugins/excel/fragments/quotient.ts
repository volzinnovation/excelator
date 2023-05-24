import createNumberNode from '../../../node-operations/create-node/create-number-node';
import { FunctionHeaderItem, NumberNode } from '../../../types/nodes.types';
import { PluginFragment } from '../../../utils/plugin-builder';

const doubleNumberHeader: FunctionHeaderItem[] = [
    { name: 'n', type: 'number', evaluate: true },
    { name: 'a', type: 'number', evaluate: true },
]


const quotientFragment = new PluginFragment().addFunction(
    'quotient',
    doubleNumberHeader,
    'Returns the integer part of a division without remainder',
    'Gibt den ganzzahligen Anteil einer Division ohne Rest zurück',
    ({ getParameter, runtimeError }) => {
        const n = (<NumberNode>getParameter('n')).value;
        const a =  (<NumberNode>getParameter('a')).value;

        if (isNaN(n) || isNaN(a)) {
            throw runtimeError('Funktion Quotient funktioniert nur mit Zahlen.');
        }
        else if (a === 0) {
            throw runtimeError('Division durch Null ist nicht zulässig.');
        }
        const q = (n/a)
        return createNumberNode(Math.trunc(q));
    },
);
export default quotientFragment;
