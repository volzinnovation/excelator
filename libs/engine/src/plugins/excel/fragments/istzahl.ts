import { FunctionHeaderItem} from '../../../types/nodes.types';
import { PluginFragment } from '../../../utils/plugin-builder';

const singleNumberHeader: FunctionHeaderItem[] = [{ name: 'n', type: 'number', evaluate: true }];

const istzahlFragment = new PluginFragment().addFunction(
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
export default istzahlFragment;
