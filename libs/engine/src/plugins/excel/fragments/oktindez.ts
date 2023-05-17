import createNumberNode from '../../../node-operations/create-node/create-number-node';
import { FunctionHeaderItem, NumberNode } from '../../../types/nodes.types';
import { PluginFragment } from '../../../utils/plugin-builder';

const singleNumberHeader: FunctionHeaderItem[] = [{ name: 'n', type: 'number', evaluate: true }];

const oktindezFragment = new PluginFragment().addFunction(
    'oktindez',
    singleNumberHeader,
    'Converting octal numbers to decimal numbers',
    'Umwandlung von Oktalzahlen in Dezimalzahlen',
    ({ getParameter, runtimeError }) => {
        const n = (<NumberNode>getParameter('n')).value;
        const decimal = parseInt(n+'', 8);
        if (isNaN(decimal)) {
            throw runtimeError('Ungültige Oktalzahl');
        }
        return createNumberNode(decimal);
    },
);
export default oktindezFragment;
