/*import {FunctionHeaderItem, NumberNode} from '../../../types/nodes.types';
import { PluginFragment } from '../../../utils/plugin-builder';

const singleNumberHeader: FunctionHeaderItem[] = [{ name: 'n', type: 'number', evaluate: true }];


const istzahlFragment = new PluginFragment().addFunction(
    'istzahl',
    singleNumberHeader,
    'Returns true if a value is a number, or false if it is not.',
    'Gibt true zurück, wenn der Wert eine Zahl ist, andernfalls false.',
    ({ getParameter}) => {
        const n = (<NumberNode>getParameter('n')).value;
if (isNaN(n)) {
    console.log("false");
} else {
    console.log("true");
}
        return {
            type: 'boolean',
            value: true,
        };
    },
);
*/
/*
const istzahlFragment = new PluginFragment().addFunction(
    'istzahl',
    singleNumberHeader,
    'Returns true if a value is a number, or false if it is not.',
    'Gibt true zurück, wenn ein Wert eine Zahl ist, andernfalls false.',
    ({ getParameter }) => {
        const n = getParameter('n');
        return {
            type: 'boolean',
            value: !isNaN(Number(n)),
        };
    },
)


const istzahlFragment = new PluginFragment().addFunction(
    'istzahl',
    singleNumberHeader,
    'Returns true if a value is a number, or false if it is not.',
    'Gibt true zurück, wenn der Wert eine Zahl ist, andernfalls false.',
    ({ getParameter}) => {
        const n = (<NumberNode>getParameter('n')).value;
        if (isNaN(n)) {
            throw ("false")
        }
        else if (!isNaN(n))
        {throw ("true")}
        return {
            type: 'boolean',
            value: true,
        };
    },
);
*/


/*
const istZahlFragment = new PluginFragment().addFunction(
    'ISTZAHL',
    singleNumberHeader,
    'Returns true if a value is a number, or false if it is not.',
    'Gibt true zurück, wenn der Wert eine Zahl ist, andernfalls false.',
    ({ getParameter, runtimeError }) => {
        const n = (<NumberNode>getParameter('n')).value;
        if (isNaN(n)) {
            throw runtimeError('Funktion ISTZAHL funktioniert nur mit Zahlen.');
        }
        return {
            type: 'boolean',
            value: true,
        };
    },
);




const istzahlFragment = new PluginFragment().addFunction(
    'istzahl',
    singleNumberHeader,
    'Returns true if a value is a number, or false if it is not.',
    'Gibt true zurück, wenn ein Wert eine Zahl ist, andernfalls false.',
    ({ getParameter }) => {
        const value = getParameter('value', 0); // Standardwert von 0 angegeben
        return {
            type: 'boolean',
            value: !isNaN(Number(value)),
        };
    },
);

  */

//export default istzahlFragment;

