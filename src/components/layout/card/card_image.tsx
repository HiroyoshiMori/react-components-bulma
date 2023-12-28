import {Fragment} from "react";
import {
    CommonDataSet,
    CardImageAttributes,
    CardImageClasses,
    CardImageDatasets,
    CardImageProps,
} from "../../@types";
import {convertDataSet} from "../../../utils";
import {Image} from "../../element";

export const CardImage = (props: CardImageProps) => {
    const {
        src,
        alt,
        classes = {},
        attributes = {},
        datasets = {},
    } = {...props};

    // Initialize if undefined
    (['wrap', 'figure', 'image'] as Array<keyof CardImageAttributes>)
        .forEach((k: keyof CardImageAttributes) => {
            if (attributes[k] === undefined) {
                attributes[k] = {};
            }
        });
    (['wrap', 'figure', 'image'] as Array<keyof CardImageDatasets>)
        .forEach((k: keyof CardImageDatasets) => {
            if (datasets[k] === undefined) {
                datasets[k] = new Map();
            }
        });
    // Initialize if undefined and set default values if not already set
    (['wrap', 'figure', 'image'] as Array<keyof CardImageClasses>)
        .forEach((k: keyof CardImageClasses) => {
            if (classes[k] === undefined) {
                classes[k] = [];
            }
            let checkValue = undefined;
            switch (k) {
                case 'wrap': checkValue = 'card-image'; break;
                case 'figure': checkValue = 'image'; break;
            }
            if (checkValue && !classes[k]?.includes(checkValue)) {
                classes[k]?.push(checkValue);
            }
        });

    // Set default values if not already set

    let datasetShown = {} as any;
    (['wrap'] as Array<keyof CardImageDatasets>)
        .forEach((k: keyof CardImageDatasets) => {
            if (datasetShown[k] === undefined) {
                datasetShown[k] = {};
            }
            datasetShown[k] = convertDataSet(datasets[k] as CommonDataSet);
        });
    
    return (
        <Fragment>
            <div
                className={classes.wrap?.join(' ')}
                {...attributes.wrap}
                {...datasetShown.wrap}
            >
                <Image
                    src={src}
                    alt={alt}
                    classes={{
                        wrap: classes.figure,
                        image: classes.image,
                    }}
                    attributes={{
                        wrap: attributes.figure,
                        image: attributes.image,
                    }}
                    datasets={{
                        wrap: datasets.figure,
                        image: datasets.image,
                    }}
                />
            </div>
        </Fragment>
    );
};
