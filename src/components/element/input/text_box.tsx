import React, {Fragment} from "react";
import {
    CommonDataSet,
    COLOR_TYPES,
    SIZES,
    STATES,
    TextBoxProps,
} from "../../@types";
import {ArrayRegexIncludes, convertDataSet} from "../../../utils";

export const TextBox = (props: TextBoxProps) => {
    const {
        fieldName,
        fieldType = 'text',
        value,
        onChange,
        placeholder = '',
        classes = [],
        attributes,
        datasets = new Map(),
    } = props;

    // Initialize if undefined
    (['colorType', 'state', 'size'] as Array<keyof TextBoxProps>).forEach((v: keyof TextBoxProps) => {
        if (props[v]) {
            let pattern = null;
            switch (v) {
                case 'colorType':
                    pattern = COLOR_TYPES.join('|'); break;
                case 'state':
                    pattern = STATES.join('|'); break;
                case 'size':
                    pattern = SIZES.join('|'); break;
            }
            if (pattern) {
                const reg: string = `^is-(${pattern})$`;
                if (ArrayRegexIncludes(classes, new RegExp(reg)) === -1) {
                    classes.push('is-' + props[v]);
                }
            }
        }
    });
    // Set default values if not already set
    if (!classes.includes('input')) {
        classes.push('input');
    }
    const datasetShown = convertDataSet(datasets as CommonDataSet);

    return (
        <Fragment>
            <input
                className={classes.join(' ')}
                type={fieldType}
                name={fieldName}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                {...attributes}
                {...datasetShown}
            />
        </Fragment>
    );
};
