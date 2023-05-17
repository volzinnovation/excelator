import createNumberNode from '../../../node-operations/create-node/create-number-node';
import { FunctionHeaderItem, NumberNode } from '../../../types/nodes.types';
import { PluginFragment } from '../../../utils/plugin-builder';
import {calculateFact} from "../../discrete-math/utils/fact";

const singleNumberHeader: FunctionHeaderItem[] = [{ name: 'n', type: 'number', evaluate: true }];
const fakultaetFragment = new PluginFragment().addFunction(
    'fakultaet',
    singleNumberHeader,
    'Returns the faculty of a number.',
    'Gibt die Fakultaet einer Zahl zurück.',
    ({ getParameter }) => {
        const n = (<NumberNode>getParameter('n')).value;
        return createNumberNode(calculateFact(n));
    },
);

export default fakultaetFragment;