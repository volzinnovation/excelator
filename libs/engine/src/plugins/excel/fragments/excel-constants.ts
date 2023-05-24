import createNumberNode from '../../../node-operations/create-node/create-number-node';
import { PluginFragment } from '../../../utils/plugin-builder';
import { FunctionHeaderItem, NumberNode } from '../../../types/nodes.types';
//import createVector from '../../../../node-operations/create-node/create-vector';

const singleNumberHeader: FunctionHeaderItem[] = [{ name: 'n', type: 'number', evaluate: true }];

const doubleNumberHeader: FunctionHeaderItem[] = [
    { name: 'n', type: 'number', evaluate: true },
    { name: 'a', type: 'number', evaluate: true },
];
const singleVectorHeader: FunctionHeaderItem[] = [{ name: 'v', type: 'vector', evaluate: true }];

const excelConstantsFragment = new PluginFragment()
    .addConstant('excel:five', 'Test output five', 'Test output fünf', createNumberNode(5))

    // Anfang Gruppe C - Tom
/*
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
*/
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
        'binindez',         // Name der Funktion
        singleNumberHeader,         //ein einzelner nummerischer Wert wird definiert
        'Convert binary to decimal',
        'Binäre Zahl in Dezimalzahl umwandeln',
        ({ getParameter,  runtimeError }) => {
            const n = (<NumberNode>getParameter('n')).value;        //Paramteter ´n´ wird deklariert

            if (!/^[01]+$/.test(String(n))) {
                throw runtimeError('Ungültige Eingabe. Die Funktion unterstützt nur binäre Zahlen (0 und 1).');     //Prüfung ob ´n´ein gültige binäre Zahl ist
            }

            const decimal = parseInt(String(n), 2);     //n wird erstmal als String intepretiert und hier in eine Dezimalzahl umgewandelt
            return createNumberNode(decimal);       //dezimalzahl wird als numerischer Wert ausgegeben
        },
    )
    .addFunction(
        'bininhex',         // Name der Funktion
        singleNumberHeader,          //ein einzelner nummerischer Wert wird definiert
        'Convert binary to hexadecimal',
        'Binäre Zahl in Hexadezimalzahl umwandeln',
        ({ getParameter, runtimeError }) => {
            const binary = (<NumberNode>getParameter('n')).value;       //es wird 'n' abgerufen und in der Variable binary gespeichert.

            if (!/^[01]+$/.test(String(binary))) {
                throw runtimeError('Ungültige Eingabe. Die Funktion unterstützt nur binäre Zahlen (0 und 1).');         //Prüfung ob ´n´ein gültige binäre Zahl ist
            }

            const decimal = parseInt(String(binary), 2);        //n wird erstmal als String intepretiert und hier in eine Dezimalzahl umgewandelt        
            const hexadecimal = decimal.toString(16).toUpperCase();     //die Dezimalzahl wird in eine hexadezimale Zeichenkette umgewandelt und ind Großbuchstaben umgewandelt
            return createNumberNode(Number(hexadecimal));       //hexadezimalzahl wird als numerischer Wert ausgegeben
        },
    )
    .addFunction(
        'Kotangens',        // Name der Funktion
        singleNumberHeader,
        'Compute the cotangent',
        'Kotangens berechnen',
        ({ getParameter, runtimeError }) => {
            const angle = (<NumberNode>getParameter('n')).value;        //n wird abgerufen und in angle gespeichert
            const radians = angle * (Math.PI / 180);        // Umwandlung in Bogenmaß


            if (angle === 0) {
                throw runtimeError('Ungültiger Winkel. Der Kotangens ist für den Winkel 0 nicht definiert.');       //prüfung ob der Winkel gleich 0 ist
            }
            else if (Math.cos(radians) === 0) {
                throw runtimeError('Ungültiger Winkel. Der Kotangens ist für Winkel mit einem Cosinus von 0 nicht definiert.');     //sonst wird überprüft ob der Cos des Winkels 0 ist, da tan=sin/cos
            }

            const cotangent = 1 / Math.tan(radians);        //wenn der Winkel nicht 0 ist und der Cosinus nicht 0 ist dann wird der Kotangens des Winkels berechnet
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
                throw runtimeError('Funktion Bogenmaß funktioniert nur mit Zahlen.');       //Prüfung, ob der Wert von 'n' keine Zahl ist
            } else if (n < 0) {
                throw runtimeError('Nur Zahlen größer als 0 möglich');      //Prüfung ob der Wert kleiner als 0 ist
            }
            return createNumberNode((n * Math.PI) / 180);       //Berechnung Bogenmass
        },
    );


export default excelConstantsFragment;
