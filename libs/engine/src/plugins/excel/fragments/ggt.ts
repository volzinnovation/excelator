import createNumberNode from '../../../node-operations/create-node/create-number-node';
import { FunctionHeaderItem, NumberNode } from '../../../types/nodes.types';
import { PluginFragment } from '../../../utils/plugin-builder';

const doubleNumberHeader: FunctionHeaderItem[] = [{ name: 'n', type: 'number', evaluate: true }];
const ggtHeader: FunctionHeaderItem[] = [
    { name: 'a', type: 'number', evaluate: true },
    { name: 'b', type: 'number', evaluate: true },
];
function ggt(a: number, b: number): number {
    if (b === 0) {
        return a;
    }
    return ggt(b, a % b);
}
const ggtFragment = new PluginFragment().addFunction(
    'ggt',
    doubleNumberHeader,
    'Returns the greatest common divisor of two numbers.',
    'Gibt den größten gemeinsamen Teiler zweier Zahlen zurück.',
    ({ getParameter, runtimeError }) => {
        const a = (<NumberNode>getParameter('a')).value;
        const b = (<NumberNode>getParameter('b')).value;
        if (!Number.isInteger(a) || !Number.isInteger(b)) {
            throw runtimeError('Function only works with integers.');
        }
        if (a === 0 && b === 0) {
            throw runtimeError('Function is not defined for 0 and 0.');
        }
        return createNumberNode(ggt(Math.abs(a), Math.abs(b)));
    },
)

export default ggtFragment;

