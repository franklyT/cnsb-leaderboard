import styles from './Labels.module.scss';
import React from "react";

export function Labels(props: any) {
    const {labels} = props;

    return (
        <div className={`${'row'} ${styles.labels}`}>
            {/* <span className={'col'} style={{maxWidth: "10%"}}> Rank </span> */}
            {/* <span className={'col'}> Student Name </span> */}
            {/* <span className={'col'} style={{textAlign: "right", marginRight: "3rem"}}> Ninja Points </span> */}
            
            {labels.map((label: string)=> {
                return <span className={'col'}> {label} </span>;
            })}
        </div>
    )
}

export default React.memo(Labels);