import createNumberNode from '../../../node-operations/create-node/create-number-node';
import { FunctionHeaderItem, NumberNode } from '../../../types/nodes.types';
import { PluginFragment } from '../../../utils/plugin-builder';

const singleNumberHeader: FunctionHeaderItem[] = [{ name: 'n', type: 'number', evaluate: true }];

const sinhypFragment = new PluginFragment().addFunction(
    'sinhyp',
    singleNumberHeader,
    'Returns the hyperbolic sine of a number',
    'Gibt den hyperbolischen Sinus einer Zahl zurück',
    ({ getParameter, runtimeError }) => {
        const n = (<NumberNode>getParameter('n')).value;
        if (isNaN(n)) {
            throw runtimeError('Die Funktion sinhyp funktioniert nur mit Zahlen.');
        } else if (n < -1 || n > 1) {
            throw runtimeError('Nur im Intervall [-1,1] definiert.');
        }
        return createNumberNode(Math.sinh(n));
    },
)
export default sinhypFragment;
