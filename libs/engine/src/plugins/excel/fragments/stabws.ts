import createNumberNode from '../../../node-operations/create-node/create-number-node';
import { FunctionHeaderItem, NumberNode, SyntaxTreeNode } from '../../../types/nodes.types';
import { PluginFragment } from '../../../utils/plugin-builder';
import {calculateUnbiasedStandardDeviation} from "../../statistics/utils/sd";

const numberSeriesHeader: FunctionHeaderItem[] = [{ name: 'x', type: 'number', evaluate: true, repeat: true }]


const stabwsFragment = new PluginFragment().addFunction(
    'stabws',
    numberSeriesHeader,
    'Estimates the standard deviation on the basis of a sample',
    'Schätzt die Standardabweichung auf der Grundlage einer Stichprobe',
    ({ getParameter, runtimeError }) => {
        const xs = (<SyntaxTreeNode[]>getParameter('x')).map((x) => (<NumberNode>x).value);
        if (xs.some((num) => isNaN(num))) {
            throw runtimeError('Funktion stabws funktioniert nur mit Zahlen.');
        }
        return createNumberNode(calculateUnbiasedStandardDeviation(xs));
    },
)
export default stabwsFragment;
