/* eslint-disable @typescript-eslint/no-unused-vars */
import { style } from '../lib/api.js';
const colorResult = style.color.string({ 'color': style.color.override({
        'color': style.color.props().Neutral.Finch['10'],
        'alpha': .5,
    }) });
console.log(colorResult);
//# sourceMappingURL=debug.js.map