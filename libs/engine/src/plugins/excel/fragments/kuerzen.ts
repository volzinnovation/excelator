import {FunctionHeaderItem, NumberNode} from '../../../types/nodes.types';
import { PluginFragment } from '../../../utils/plugin-builder';
import createNumberNode from "../../../node-operations/create-node/create-number-node";

const doubleNumberHeader: FunctionHeaderItem[] = [
    { name: 'n', type: 'number', evaluate: true },
    { name: 'a', type: 'number', evaluate: true },
]
const kuerzenFragment = new PluginFragment().addFunction(
    'kuerzen',
    doubleNumberHeader,
    'Returns a number rounded to a specified number of decimal places.',
    'Gibt eine Zahl auf eine bestimmte Anzahl von Dezimalstellen gerundet zurück.',
    ({ getParameter, runtimeError }) => {
        const n = (<NumberNode>getParameter('n')).value;
        const a = (<NumberNode>getParameter('a')).value;
        if (isNaN(n) || isNaN(a)) {
            throw runtimeError('Funktion KÜRZEN funktioniert nur mit Zahlen.');
        } else if (a < 0) {
            throw runtimeError('Anzahl der Dezimalstellen muss größer oder gleich 0 sein.');
        }
        const factor = Math.pow(10, a);
        return createNumberNode(Math.round(n * factor) / factor);
    },
)
export default kuerzenFragment;
