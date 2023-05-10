import createNumberNode from '../../../node-operations/create-node/create-number-node';
import { PluginFragment } from '../../../utils/plugin-builder';
import { FunctionHeaderItem, NumberNode } from '../../../types/nodes.types';
// import createVector from '../../../../node-operations/create-node/create-vector';

const singleNumberHeader: FunctionHeaderItem[] = [{ name: 'n', type: 'number', evaluate: true }];
const doubleNumberHeader: FunctionHeaderItem[] = [
    { name: 'n', type: 'number', evaluate: true },
    { name: 'a', type: 'number', evaluate: true },
];

const excelConstantsFragment = new PluginFragment()
    .addConstant('excel:five', 'Test output five', 'Test output fünf', createNumberNode(5))

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
        'abrunden',
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
        }else if (n<1) {
            throw runtimeError('Nur Zahlen größer als 1 möglich');
        }
        return createNumberNode(Math.acosh(n));
    },

)
    .addFunction(
        'ungerade', singleNumberHeader,
        'Rounds up a number to the nearest odd integer',
        'Rundet eine Zahl auf die nächste ungerade ganze Zahl auf',
        ({ getParameter, runtimeError }) => {
            const n = (<NumberNode>getParameter('n')).value;

            if (isNaN(n)) {
                throw runtimeError('Funktion ungerade funktioniert nur mit Zahlen');
            }

            const gerundeteZahl = Math.round(n); // Runden
            const istGerade = gerundeteZahl % 2 === 0; // Überprüfen gerundete Zahl gerade?
            const ungeradeZahl = istGerade ? gerundeteZahl + 1 : gerundeteZahl;
            return createNumberNode (ungeradeZahl);
        },
    )

    .addFunction(
        'zufallsbereich', doubleNumberHeader,
        'Returns a random number between two specified numbers or just a random number.',
        'Gibt Zufallszahl zwischen zwei angegebenen Zahlen zurück bzw. eine Zufallszahl.',
        ({ getParameter, runtimeError }) => {
            const n = (<NumberNode>getParameter('n')).value;
            const a = (<NumberNode>getParameter('a')).value;
            if (isNaN(n || a)) {
                throw runtimeError('Funktion zufallsbereich funktioniert nur mit Zahlen.');
            }
            else if (n !== undefined && a !== undefined) {
                // Wenn minValue und maxValue definiert sind, generieren Sie eine Zufallszahl im angegebenen Bereich
                return createNumberNode(Math.random() * (a - n) + n);
            } else {
                // Wenn minValue und maxValue nicht definiert sind, generieren Sie einfach eine Zufallszahl zw. 0 und 1
                return createNumberNode(Math.random());
            }
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
        }else if (n <0) {
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
        'BOGENMASS',
        singleNumberHeader,
        'Calculates the Radian to an angle',
        'Berechnet das Bogenmaß eines Winkels',
        ({ getParameter, runtimeError }) => {
            const n = (<NumberNode>getParameter('n')).value;
            if (isNaN(n)) {
                throw runtimeError('Funktion Bogenmaß funktioniert nur mit Zahlen.');
            }else if (n <0) {
                throw runtimeError('Nur Zahlen größer als 0 möglich');
            }
            return createNumberNode(n*Math.PI/180);
        },
    )
    
    // Beginn Funktionen Gruppe C - Lukas
    .addFunction(
        'istgerade',
        singleNumberHeader,
        'Returns true if a number is even, or false if it is odd.',
        'Gibt true zurück, wenn eine Zahl gerade ist, andernfalls false.',
        ({ getParameter, runtimeError }) => {
            const n = (<NumberNode>getParameter('n')).value;
            if (isNaN(n)) {
                throw runtimeError('Die Funktion istgerade funktioniert nur mit Zahlen.');
            }
            return {
                type: 'boolean',
                value: n % 2 === 0,
            };
        },
    )
    .addFunction(
        'istungerade',
        singleNumberHeader,
        'Returns true if a number is odd, or false if it is even.',
        'Gibt true zurück, wenn eine Zahl ungerade ist, andernfalls false.',
        ({ getParameter, runtimeError }) => {
            const n = (<NumberNode>getParameter('n')).value;
            if (isNaN(n)) {
                throw runtimeError('Funktion ISTUNGERADE funktioniert nur mit Zahlen.');
            }
            return {
                type: 'boolean',
                value: n % 2 !== 0,
            };
        },
    )
    .addFunction(
        'isttext',
        singleNumberHeader,
        'Returns true if a value is text, or false if it is not.',
        'Gibt true zurück, wenn ein Wert Text ist, andernfalls false.',
        ({ getParameter }) => {
            const value = getParameter('value');
            return {
                type: 'boolean',
                value: typeof value === 'string',
            };
        },
    )
    .addFunction(
        'istzahl',
        singleNumberHeader,
        'Returns true if a value is a number, or false if it is not.',
        'Gibt true zurück, wenn ein Wert eine Zahl ist, andernfalls false.',
        ({ getParameter }) => {
            const value = getParameter('value');
            return {
                type: 'boolean',
                value: !isNaN(Number(value)),
            };
        },
    )
    .addFunction(
        'kuerzen',
        doubleNumberHeader,
        'Returns a number rounded to a specified number of decimal places.',
        'Gibt eine Zahl auf eine bestimmte Anzahl von Dezimalstellen gerundet zurück.',
        ({ getParameter, runtimeError }) => {
            const n = (<NumberNode>getParameter('n')).value;
            const d = (<NumberNode>getParameter('d')).value;
            if (isNaN(n) || isNaN(d)) {
                throw runtimeError('Funktion KÜRZEN funktioniert nur mit Zahlen.');
            } else if (d < 0) {
                throw runtimeError('Anzahl der Dezimalstellen muss größer oder gleich 0 sein.');
            }
            const factor = Math.pow(10, d);
            return createNumberNode(Math.round(n * factor) / factor);
        },
    )
    .addFunction(
        'log10',
        singleNumberHeader,
        'Returns the base 10 logarithm of a number.',
        'Gibt den Logarithmus zur Basis 10 einer Zahl zurück.',
        ({ getParameter, runtimeError }) => {
            const n = (<NumberNode>getParameter('n')).value;
            if (isNaN(n) || n <= 0) {
                throw runtimeError('Funktion LOG10 funktioniert nur mit positiven Zahlen.');
            }
            return createNumberNode(Math.log10(n));
        },
    )
// Ende Funktionen Gruppe C - Lukas
// Beginn Funktionen Gruppe C - Tom
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
        }
    )
// Ende Funktionen Gruppe C - Tom
// Beginn Funktionen Gruppe B
function faculty(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}



const facultyHeader: FunctionHeaderItem[] = [{ name: 'n', type: 'number', evaluate: true }];

const facultyFunction = new PluginFragment()
    .addFunction(
        'faculty',
        facultyHeader,
        'Returns the faculty of a number.',
        'Gibt die Fakultät einer Zahl zurück.',
        ({ getParameter, runtimeError }) => {
            const n = (<NumberNode>getParameter('n')).value;
            if (!Number.isInteger(n) || n < 0) {
                throw runtimeError('Function only works with non-negative integers.');
            }
            return createNumberNode(faculty(n));
        },
    )

const ggtHeader: FunctionHeaderItem[] = [
    { name: 'a', type: 'number', evaluate: true },
    { name: 'b', type: 'number', evaluate: true },
];

function ggt(a: number, b: number): number {
    if (b === 0) {
        return a;
    }
    return ggt(b, a % b);
}

const ggtFunction = new PluginFragment()
    .addFunction(
        'ggt',
        ggtHeader,
        'Returns the greatest common divisor of two numbers.',
        'Gibt den größten gemeinsamen Teiler zweier Zahlen zurück.',
        ({ getParameter, runtimeError }) => {
            const a = (<NumberNode>getParameter('a')).value;
            const b = (<NumberNode>getParameter('b')).value;
            if (!Number.isInteger(a) || !Number.isInteger(b)) {
                throw runtimeError('Function only works with integers.');
            }
            if (a === 0 && b === 0) {
                throw runtimeError('Function is not defined for 0 and 0.');
            }
            return createNumberNode(ggt(Math.abs(a), Math.abs(b)));
        },
    )


    .addFunction(
        'grad',
        singleNumberHeader,
        'Calculates the angle to radian',
        'Berechnet das Gradmaß eines Winkels',
        ({ getParameter, runtimeError }) => {
            const n = (<NumberNode>getParameter('n')).value;
            return createNumberNode(n*180/Math.PI);
        },
    )


    .addFunction(
        'gganzzahl',
        doubleNumberHeader,
        'Checks if a value is bigger than a given threshold',
        'Überprüft, ob eine Zahl größer als ein gegebener Schwellenwert ist',
        ({ getParameter, runtimeError }) => {
            const n = (<NumberNode>getParameter('n')).value;
            if (isNaN(n)) {
                throw runtimeError('Funktion GGanzzahl funktioniert nur mit Zahlen.');
            }
            const x = (<NumberNode>getParameter('x')).value;
            if (isNaN(n)) {
                throw runtimeError('Funktion GGanzzahl funktioniert nur mit Zahlen.');
            }

            if (n > x) {
                return createNumberNode(1);
            } else {
                return createNumberNode(0);
            }
        },
    )

    .addFunction(
        'delta',
        doubleNumberHeader,
        'Checks if two values are equal',
        'Überprüft, ob zwei Werte gleich sind',
        ({ getParameter, runtimeError }) => {
            const n = (<NumberNode>getParameter('n')).value;
            if (isNaN(n)) {
                throw runtimeError('Funktion Delta funktioniert nur mit Zahlen.');
            }
            const x = (<NumberNode>getParameter('x')).value;
            if (isNaN(n)) {
                throw runtimeError('Funktion Delta funktioniert nur mit Zahlen.');
            }

            if (n === x) {
                return createNumberNode(1);
            } else {
                return createNumberNode(0);
            }
        },
    )

.addFunction(
    'aufrunden',
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
);
// Ende Funktionen Gruppe B
export default excelConstantsFragment;
