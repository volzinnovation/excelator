import createNumberNode from '../../../node-operations/create-node/create-number-node';
import { FunctionHeaderItem, NumberNode, SyntaxTreeNode } from '../../../types/nodes.types';
import { PluginFragment } from '../../../utils/plugin-builder';

const variableNumberHeader: FunctionHeaderItem[] = [{ name: 'numbers', type: 'number', evaluate: true, repeat: true }];


const quadratesummeFragment = new PluginFragment().addFunction(
    'quadratesumme',
    variableNumberHeader,
    'Returns the square sum of the numbers',
    'Gibt die Quadratsumme der Zahlen zurück',
    ({ getParameter, runtimeError }) => {
        const values = (<SyntaxTreeNode[]>getParameter('numbers')).map((value) => (<NumberNode>value).value);
        if (values.some((num) => isNaN(num))) {
            throw runtimeError('Funktion Quadratsumme funktioniert nur mit Zahlen.');
        }
        const q = values.reduce((sum, num) => sum + num * num, 0);
        return createNumberNode(q);
    },
);
export default quadratesummeFragment;
