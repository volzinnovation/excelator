import { FunctionHeaderItem, NumberNode } from '../../../types/nodes.types';
import createNumberNode from '../../../node-operations/create-node/create-number-node';
import { greatestCommonDivisor } from '../../../utils/float-utils';
import { PluginFragment } from '../../../utils/plugin-builder';

const doubleNumberHeader: FunctionHeaderItem[] = [
        { name: 'a', type: 'number', evaluate: true },
        { name: 'b', type: 'number', evaluate: true },
];

const ggtFragment = new PluginFragment();

__FUNCTIONS.gcd &&
ggtFragment.addFunction(
    'ggt',
    doubleNumberHeader,
    'Calculates the greatest common divisor (gcd).',
    'Berechnet den größten gemeinsamen Teiler (ggT).',
    ({ getParameter, runtimeError }) => {
            const a = (<NumberNode>getParameter('a')).value;
            const b = (<NumberNode>getParameter('b')).value;

            if (a % 1 !== 0 || b % 1 !== 0) {
                    throw runtimeError('Only integers are allowed.');
            }
            if (a < 1 || b < 1) {
                    throw runtimeError('Numbers smaller than 1 are not allowed.');
            }

            return createNumberNode(greatestCommonDivisor(a, b));
    },
);

export default ggtFragment;


