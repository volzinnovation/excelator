import createNumberNode from '../../../node-operations/create-node/create-number-node';
import { PluginFragment } from '../../../utils/plugin-builder';
import { FunctionHeaderItem, NumberNode } from '../../../types/nodes.types';
// import createVector from '../../../../node-operations/create-node/create-vector';

const singleNumberHeader: FunctionHeaderItem[] = [{ name: 'n', type: 'number', evaluate: true }];
/*
const doubleNumberHeader: FunctionHeaderItem[] = [
    { name: 'n', type: 'number', evaluate: true },
    { name: 'a', type: 'number', evaluate: true },
];
const singleVectorHeader: FunctionHeaderItem[] = [{ name: 'v', type: 'vector', evaluate: true }];
*/
const excelConstantsFragment = new PluginFragment()
    .addConstant('excel:five', 'Test output five', 'Test output fünf', createNumberNode(5))

    // Anfang Gruppe C - Tom

    .addFunction(
        'median',
        singleNumberHeader,
        'Returns the median',
        'gibt den Median aus',
        ({ getParameter, runtimeError }) => {
            const v = getParameter('v') as number[];
            if (!Array.isArray(v)) {
                throw runtimeError('Invalid input provided.');
            }
            if (v.length === 0) {
                throw runtimeError('Array is empty.');
            }
            const sortedArray = v.sort((n1, n2) => n1 - n2);
            let median;
            const middle = Math.floor(sortedArray.length / 2);
            // array has even length --> take avg of two middle elements
            if (sortedArray.length % 2 == 0) {
                median = (sortedArray[middle - 1] + sortedArray[middle]) / 2;
            }
            // array has uneven length --> middle element
            else {
                median = sortedArray[middle];
            }
            return createNumberNode(median);
        },
    )

    .addFunction(
        'max',
        singleNumberHeader,
        'Returns the maximum value from an array of numbers.',
        'gibt den größten Wert aus einem Array von Zahlen zurück',
        ({ getParameter, runtimeError }) => {
            const n = getParameter('n') as number[];
            if (!Array.isArray(n)) {
                throw runtimeError('Invalid array provided.');
            }
            if (n.length === 0) {
                throw runtimeError('Array is empty.');
            }
            const max = Math.max(...n);
            return createNumberNode(max);
        },
    )
    // Ende Funktionen Gruppe C - Tom

    //Gruppe A Funktionen
    .addFunction(
        'arccos',
        singleNumberHeader,
        'Returns the arcus cosine of a number.',
        'Gibt den Arkuskosinus einer Zahl zurück.',
        ({ getParameter, runtimeError }) => {
            const n = (<NumberNode>getParameter('n')).value;
            if (isNaN(n)) {
                throw runtimeError('Function only works with numbers.');
            } else if (n < -1 || n > 1) {
                throw runtimeError('Only defined in the interval [-1,1].');
            }
            return createNumberNode(Math.acos(n));
        },
    )

    .addFunction(
        'Abrunden',
        singleNumberHeader,
        'square root.',
        'Abrunden ohne Nachkomma stelle',
        ({ getParameter, runtimeError }) => {
            const n = (<NumberNode>getParameter('n')).value;
            if (isNaN(n)) {
                throw runtimeError('Function abrunden only works with numbers.');
            }

            return createNumberNode(Math.floor(n));
        },
    )

    .addFunction(
        'Acosh',
        singleNumberHeader,
        'Returns the inverse hyperbolic cosine of a number',
        'Gibt den umgekehrten hyperbolischen Kosinus einer Zahl zurück',
        ({ getParameter, runtimeError }) => {
            const n = (<NumberNode>getParameter('n')).value;
            if (isNaN(n)) {
                throw runtimeError('Function acosh funktioniert nur mit Zahlen.');
            } else if (n < 1) {
                throw runtimeError('Nur Zahlen größer als 1 möglich');
            }
            return createNumberNode(Math.acosh(n));
        },
    )

    .addFunction(
        'ASin',
        singleNumberHeader,
        'Returns the arc sine or inverted sine of a number',
        'Gibt den Arkussinus oder umgekehrten Sinus einer Zahl zurück.',
        ({ getParameter, runtimeError }) => {
            const n = (<NumberNode>getParameter('n')).value;
            if (isNaN(n)) {
                throw runtimeError('Funktion asin funktioniert nur mit Zahlen.');
            }
            return createNumberNode(Math.asin(n));
        },
    )
    .addFunction(
        'Atan',
        singleNumberHeader,
        'Returns the arc tangent or inverse tangent of a number.',
        'Gibt den Arkustangens oder umgekehrten Tangens einer Zahl zurück.',
        ({ getParameter, runtimeError }) => {
            const n = (<NumberNode>getParameter('n')).value;
            if (isNaN(n)) {
                throw runtimeError('Funktion atan funktioniert nur mit Zahlen.');
            }
            return createNumberNode(Math.atan(n));
        },
    )
    .addFunction(
        'ASinh',
        singleNumberHeader,
        'Returns the inverse hyperbolic sine of a number.',
        'Gibt den umgekehrten hyperbolischen Sinus einer Zahl zurück.',
        ({ getParameter, runtimeError }) => {
            const n = (<NumberNode>getParameter('n')).value;
            if (isNaN(n)) {
                throw runtimeError('Funktion asin funktioniert nur mit Zahlen.');
            } else if (n < 0) {
                throw runtimeError('Nur Zahlen größer als 0 möglich');
            }
            return createNumberNode(Math.asinh(n));
        },
    )
    .addFunction(
        'Aufrunden',
        singleNumberHeader,
        'Round up without decimal place',
        'Aufrunden ohne Nachkommastelle',
        ({ getParameter, runtimeError }) => {
            const n = (<NumberNode>getParameter('n')).value;
            if (isNaN(n)) {
                throw runtimeError('Funktion Aufrunden funktioniert nur mit Zahlen.');
            }
            return createNumberNode(Math.ceil(n));
        },
    )
    .addFunction(
        'binindez',
        singleNumberHeader,
        'Convert binary to decimal',
        'Binäre Zahl in Dezimalzahl umwandeln',
        ({ getParameter,  runtimeError }) => {
            const n = (<NumberNode>getParameter('n')).value;

            if (!/^[01]+$/.test(String(n))) {
                throw runtimeError('Ungültige Eingabe. Die Funktion unterstützt nur binäre Zahlen (0 und 1).');
            }

            const decimal = parseInt(String(n), 2);
            return createNumberNode(decimal);
        },
    )
    .addFunction(
        'bininhex',
        singleNumberHeader,
        'Convert binary to hexadecimal',
        'Binäre Zahl in Hexadezimalzahl umwandeln',
        ({ getParameter, runtimeError }) => {
            const binary = (<NumberNode>getParameter('n')).value;

            if (!/^[01]+$/.test(String(binary))) {
                throw runtimeError('Ungültige Eingabe. Die Funktion unterstützt nur binäre Zahlen (0 und 1).');
            }

            const decimal = parseInt(String(binary), 2);
            const hexadecimal = decimal.toString(16).toUpperCase();
            return createNumberNode(Number(hexadecimal));
        },
    )
    .addFunction(
        'Kotangens',
        singleNumberHeader,
        'Compute the cotangent',
        'Kotangens berechnen',
        ({ getParameter, runtimeError }) => {
            const angle = (<NumberNode>getParameter('n')).value;
            const radians = angle * (Math.PI / 180); // Umwandlung in Bogenmaß


            if (angle === 0) {
                throw runtimeError('Ungültiger Winkel. Der Kotangens ist für den Winkel 0 nicht definiert.');
            }
            else if (Math.cos(radians) === 0) {
                throw runtimeError('Ungültiger Winkel. Der Kotangens ist für Winkel mit einem Cosinus von 0 nicht definiert.');
            }

            const cotangent = 1 / Math.tan(radians);
            return createNumberNode(cotangent);
        },
    )

.addFunction(
        'bogenmass',
        singleNumberHeader,
        'Calculates the Radian to an angle',
        'Berechnet das Bogenmaß eines Winkels',
        ({ getParameter, runtimeError }) => {
            const n = (<NumberNode>getParameter('n')).value;
            if (isNaN(n)) {
                throw runtimeError('Funktion Bogenmaß funktioniert nur mit Zahlen.');
            } else if (n < 0) {
                throw runtimeError('Nur Zahlen größer als 0 möglich');
            }
            return createNumberNode((n * Math.PI) / 180);
        },
    );


export default excelConstantsFragment;
