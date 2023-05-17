
import createNumberNode from '../../../node-operations/create-node/create-number-node';
import { FunctionHeaderItem, NumberNode } from '../../../types/nodes.types';
import { PluginFragment } from '../../../utils/plugin-builder';



const singleNumberHeader: FunctionHeaderItem[] = [{ name: 'n', type: 'number', evaluate: true }];



const binindezFragment = new PluginFragment()

    .addFunction(
        'BININDEZ',
        singleStringHeader,
        'Convert binary to decimal',
        'Binäre Zahl in Dezimalzahl umwandeln',
        ({ getParameter, createNumberNode, runtimeError }) => {
            const binary = (<StringNode>getParameter('binary')).value;

            if (!/^[01]+$/.test(binary)) {
                throw runtimeError('Ungültige Eingabe. Die Funktion unterstützt nur binäre Zahlen (0 und 1).');
            }

            const decimal = parseInt(binary, 2);
            return createNumberNode(decimal);
        },
    );





export default binindezFragment;