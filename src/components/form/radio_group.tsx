import React, {
    Fragment,
} from "react";
import {
    RadioAttributes,
    RadioClasses,
    RadioDatasets,
    RadioGroupProps,
    RadioGroupFieldsProps,
} from "../@types";
import {Radio} from "../element";

export const RadioGroup = (props: RadioGroupProps) => {
    const {
        fieldName,
        fields,
        currentValue,
        onChange,
        prefix = '',
        classes = {},
    } = props;

    // Initialize if undefined
    (['label', 'input'] as Array<keyof RadioClasses>).forEach((k) => {
        if (classes[k] === undefined) {
            classes[k] = [];
        }
    });

    return (
        <Fragment>
            {
                fields && fields.map((v: RadioGroupFieldsProps, idx: number) => {
                    // Initialize if undefined
                    v.attributes = v.attributes ?? {};
                    v.datasets = v.datasets ?? {};
                    (['wrap', 'label', 'input'] as Array<keyof RadioAttributes>)
                        .forEach((k: keyof RadioAttributes) => {
                            if (v.attributes && v.attributes[k] === undefined) {
                                v.attributes[k] = {};
                            }
                        });
                    (['wrap', 'label', 'input'] as Array<keyof RadioDatasets>)
                        .forEach((k: keyof RadioDatasets) => {
                            if (v.datasets && v.datasets[k] === undefined) {
                                v.datasets[k] = new Map();
                            }
                        });
                    return (
                        <Fragment key={idx}>
                            <Radio
                                field={{
                                    ...v.field,
                                    name: fieldName,
                                }}
                                currentValue={currentValue}
                                onChange={onChange}
                                prefix={prefix}
                                classes={{
                                    label: classes.label,
                                    input: classes.input,
                                }}
                                attributes={v.attributes}
                                datasets={v.datasets}
                            />
                        </Fragment>
                    );
                })
            }
        </Fragment>
    )
}