import createNumberNode from '../../../node-operations/create-node/create-number-node';
import { FunctionHeaderItem, NumberNode } from '../../../types/nodes.types';
import { PluginFragment } from '../../../utils/plugin-builder';

const doubleNumberHeader: FunctionHeaderItem[] = [
    { name: 'n', type: 'number', evaluate: true },
    { name: 'a', type: 'number', evaluate: true },
]


const rundenFragment = new PluginFragment().addFunction(
        'runden',
        doubleNumberHeader,
        'Rounds a number to the specified decimal places',
        'Rundet eine Zahl auf die angegebene Anzahl von Dezimalstellen',
        ({ getParameter, runtimeError }) => {
            const n = (<NumberNode>getParameter('n')).value;
            const a = (<NumberNode>getParameter('a')).value;

            if (isNaN(n) || isNaN(a)) {
                throw runtimeError('Beide Parameter müssen Zahlen sein.');
            }

            const factor = Math.pow(10, a);
            const roundedNumber = Math.round(n * factor) / factor;

            return createNumberNode(roundedNumber);
        }
    )
;
export default rundenFragment;
