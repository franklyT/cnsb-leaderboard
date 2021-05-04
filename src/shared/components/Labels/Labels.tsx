import styles from './Labels.module.scss';
import React from "react";

export function Labels(props: any) {
    const {labels} = props;
    
    return (
        <div className={`${styles.row} ${styles.labels}`} style={labels.every((label: any) => Array.isArray(label) === false) ? {justifyContent: 'auto'} : {}}>            
            {labels.map((label: any)=> {
                let name, extraStyles;
                if (typeof label === 'object') [name, extraStyles] = label; else name = label;

                return <div className={'col'} style={extraStyles} key={name}> {name} </div>;
            })}
        </div>
    )
}

export default React.memo(Labels);