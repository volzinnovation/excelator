import createNumberNode from '../../../node-operations/create-node/create-number-node';
import { FunctionHeaderItem, NumberNode } from '../../../types/nodes.types';
import { PluginFragment } from '../../../utils/plugin-builder';

const tripleNumberHeader: FunctionHeaderItem[] = [
    { name: 'n', type: 'number', evaluate: true },
    { name: 'a', type: 'number', evaluate: true },
    { name: 'b', type: 'number', evaluate: true }
]


const pdurationFragment = new PluginFragment().addFunction(
    'pduration',
    tripleNumberHeader,
    'Returns the number of periods required to bring an investment to a specified value. The first value (n) is the current value of the investment, the second value (a) is the desired future value of the investment, the third value (b) is the interest rate per payment period.',
    'Gibt die Anzahl der Perioden zurück, die erforderlich sind, um eine Investition auf einen bestimmten Wert zu bringen. Der erste Wert (n) ist der Zinssatz pro Zahlungsperiode und muss als Dezimalzahl angegeben werden, der zweite Wert (a) ist der aktuelle Wert der Investition, der dritte Wert (b) ist der gewünschte zukünftige Wert der Investition',
    ({ getParameter, runtimeError }) => {
        const n = (<NumberNode>getParameter('n')).value;
        const a = (<NumberNode>getParameter('a')).value;
        const b = (<NumberNode>getParameter('b')).value;

        if (isNaN(n) || isNaN(a) || isNaN(b)) {
            throw runtimeError('Funktion pduration funktioniert nur mit Zahlen.');
        } else if (n <= 0 || a <= 0 || b <= 0) {
            throw runtimeError('Nur Zahlen größer als 0 möglich.');
        }
        else if (a > b){
            throw runtimeError('Der gewünschte zukünftige Wert der Investition (b) muss größer als der aktuelle Wert der Investition (a) sein.');
        }

        return createNumberNode((Math.log(b) - Math.log(a)) / Math.log(1 + n));
    },
);
export default pdurationFragment;
