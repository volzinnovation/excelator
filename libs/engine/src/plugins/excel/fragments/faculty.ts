import createNumberNode from '../../../node-operations/create-node/create-number-node';
import { FunctionHeaderItem, NumberNode } from '../../../types/nodes.types';
import { PluginFragment } from '../../../utils/plugin-builder';

const singleNumberHeader: FunctionHeaderItem[] = [{ name: 'n', type: 'number', evaluate: true }];
function faculty(n) {
        let result = 1;
        for (let i = 2; i <= n; i++) {
                result *= i;
        }
        return result;
}
const facultyFragment = new PluginFragment().addFunction(
    'faculty',
    singleNumberHeader,
    'Returns the faculty of a number.',
    'Gibt die Fakultät einer Zahl zurück.',
    ({ getParameter, runtimeError }) => {
        const n = (<NumberNode>getParameter('n')).value;
            if (!Number.isInteger(n) || n < 0) {
                    throw runtimeError('Function only works with non-negative integers.');
            }
            return createNumberNode(faculty(n));
    },
);

export default facultyFragment;
