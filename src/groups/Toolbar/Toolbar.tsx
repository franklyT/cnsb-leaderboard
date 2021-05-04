import React, {useContext, useState} from "react";
import {ActivePage} from "./ToolbarEnums";
import styles from './Toolbar.module.scss';
import MenuContext from "../../shared/contexts/MenuContext";

export function Toolbar() {
    const {activeMenu, setActiveMenu} = useContext(MenuContext);

    return (
        <div className={`row ${styles.labels}`} style={{justifyContent: "left"}}>
            {Object.values(ActivePage).map((page: ActivePage) => {
                return (
                    <span key={page} onClick={() => setActiveMenu(page)}
                          className={`${styles.label} ${activeMenu === page ? styles.active : ""}`}>
                        {page}
                    </span>
                )
            })}
        </div>
    )
}

export default React.memo(Toolbar);