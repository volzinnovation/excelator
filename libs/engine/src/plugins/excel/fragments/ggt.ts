import { FunctionHeaderItem, NumberNode } from '../../../types/nodes.types';
import createNumberNode from '../../../node-operations/create-node/create-number-node';
import { greatestCommonDivisor } from '../../../utils/float-utils';
import { PluginFragment } from '../../../utils/plugin-builder';

const doubleNumberHeader: FunctionHeaderItem[] = [
        { name: 'n', type: 'number', evaluate: true },
        { name: 'x', type: 'number', evaluate: true },
];

const ggtFragment = new PluginFragment();

__FUNCTIONS.gcd &&
ggtFragment.addFunction(
    'ggt',
    doubleNumberHeader,
    'Calculates the greatest common divisor (gcd).',
    'Berechnet den größten gemeinsamen Teiler (ggT).',
    ({ getParameter, runtimeError }) => {
            const n = (<NumberNode>getParameter('n')).value;
            const x = (<NumberNode>getParameter('x')).value;

            if (n % 1 !== 0 || x % 1 !== 0) {
                    throw runtimeError('Only integers are allowed.');
            }
            if (n < 1 || x < 1) {
                    throw runtimeError('Numbers smaller than 1 are not allowed.');
            }

            return createNumberNode(greatestCommonDivisor(n, x));
    },
);

export default ggtFragment;


