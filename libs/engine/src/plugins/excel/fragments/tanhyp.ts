import createNumberNode from '../../../node-operations/create-node/create-number-node';
import { FunctionHeaderItem, NumberNode } from '../../../types/nodes.types';
import { PluginFragment } from '../../../utils/plugin-builder';

const singleNumberHeader: FunctionHeaderItem[] = [{ name: 'n', type: 'number', evaluate: true }];

const tanhypFragment = new PluginFragment().addFunction(
    'tanhyp',
    singleNumberHeader,
    'Returns the hyperbolic tangent of a number',
    'Gibt den hyperbolischen Tangens einer Zahl zurück',
    ({ getParameter, runtimeError }) => {
        const n = (<NumberNode>getParameter('n')).value;
        if (isNaN(n)) {
            throw runtimeError('Die Funktion tanhyp funktioniert nur mit Zahlen.');
        }
        return createNumberNode(Math.tanh(n));
    },
)
export default tanhypFragment;
