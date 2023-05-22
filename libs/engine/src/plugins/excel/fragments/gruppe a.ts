
import createNumberNode from '../../../node-operations/create-node/create-number-node';
import { PluginFragment } from '../../../utils/plugin-builder';
import { FunctionHeaderItem, NumberNode } from '../../../types/nodes.types';


const singleNumberHeader: FunctionHeaderItem[] = [{ name: 'n', type: 'number', evaluate: true }];



const excelConstantsFragment = new PluginFragment()


    .addFunction(
        'BININDEZ',
        singleNumberHeader,
        'Convert binary to decimal',
        'Binäre Zahl in Dezimalzahl umwandeln',
        ({ getParameter,  runtimeError }) => {
            const binary = (<NumberNode>getParameter('n')).value;

            if (!/^[01]+$/.test(binary)) {
                throw runtimeError('Ungültige Eingabe. Die Funktion unterstützt nur binäre Zahlen (0 und 1).');
            }

            const decimal = parseInt(binary, 2);
            return createNumberNode(decimal);
        },
    )
    .addFunction(
    'BININHEX',
    singleNumberHeader,
    'Convert binary to hexadecimal',
    'Binäre Zahl in Hexadezimalzahl umwandeln',
    ({ getParameter, runtimeError }) => {
        const binary = (<NumberNode>getParameter('n')).value;

        if (!/^[01]+$/.test(binary)) {
            throw runtimeError('Ungültige Eingabe. Die Funktion unterstützt nur binäre Zahlen (0 und 1).');
        }

        const decimal = parseInt(binary, 2);
        const hexadecimal = decimal.toString(16).toUpperCase();
        return createNumberNode(hexadecimal);
    }
)
    .addFunction(
        'Kotangens',
        singleNumberHeader,
        'Compute the cotangent',
        'Kotangens berechnen',
        ({ getParameter, runtimeError }) => {
            const angle = (<NumberNode>getParameter('angle')).value;
            const radians = angle * (Math.PI / 180); // Umwandlung in Bogenmaß

            if (Math.cos(radians) === 0) {
                throw runtimeError('Ungültiger Winkel. Der Kotangens ist für Winkel mit einem Cosinus von 0 nicht definiert.');
            }

            const cotangent = 1 / Math.tan(radians);
            return createNumberNode(cotangent);
        }
    );





export default excelConstantsFragment;
