import { FunctionHeaderItem} from '../../../types/nodes.types';
import { PluginFragment } from '../../../utils/plugin-builder';

const singleNumberHeader: FunctionHeaderItem[] = [{ name: 'n', type: 'number', evaluate: true }];

const isttextFragment = new PluginFragment().addFunction(
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
export default isttextFragment;
