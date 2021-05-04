import React, { useContext, useEffect, useState } from 'react';
import UIContext from '../../../shared/contexts/UIContext';
import styles from './Pagination.module.scss';

import rankOne from './images/one.webp';
import rankTwo from './images/two.webp'
import rankThree from './images/three.webp'
import rankFour from './images/four.webp'
import rankFive from './images/five.webp'
import rankSix from './images/six.webp'
import rankSeven from './images/seven.png'
import rankEight from './images/eight.webp';

export function Pagination() {
    const { sortedLeaderboard } = useContext(UIContext);
    let [activePage, setActivePage] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [activePage])

    const ROWS_PER_PAGE = 50;
    const NUM_STUDENTS = sortedLeaderboard.length;
    const PAGE_ARRAY: Array<number> = Array.from(new Array(Math.ceil(NUM_STUDENTS / ROWS_PER_PAGE)), (_, index) => index + 1);

    function calcTrophy(rank: number) {
        rank += 1;

        const img = (src: string, altTitle: string, className = styles.rankImage) => <img src={src} alt={altTitle} title={altTitle} className={className}/>;
        
        if (rank === 1) return img(rankEight, "Diamond", styles.rankImageResized);
        else if (rank <= Math.ceil(0.03 * NUM_STUDENTS) /* Top 3% */) return img(rankSeven, "Platinum", styles.rankImageResized);
        else if (rank <= Math.ceil(0.06 * NUM_STUDENTS) /* Top 6% */) return img(rankSix, "Gold");
        else if (rank <= Math.ceil(0.10 * NUM_STUDENTS) /* Top 10% */) return img(rankFive, "Silver");
        else if (rank <= Math.ceil(0.20 * NUM_STUDENTS) /* Top 20% */) return img(rankFour, "Copper");
        else if (rank <= Math.ceil(0.40 * NUM_STUDENTS) /* Top 40% */) return img(rankThree, "Bronze");
        else if (rank <= Math.ceil(0.60 * NUM_STUDENTS) /* Top 60% */) return img(rankTwo, "Iron");
        else return img(rankOne, "Recruit");
    }

    function getPagination() {
        if (sortedLeaderboard.length < 2) return;

        return (
            <>
                <div className={styles.paginated}
                    onClick={() => activePage > 0 && setActivePage(activePage - 1)}
                >
                    <span> &laquo; </span>
                </div>

                {PAGE_ARRAY.map((page: number, index: number) =>
                    <div className={`${styles.paginated} ${index === activePage && styles.paginatedActive}`}
                        key={index}
                        onClick={() => setActivePage(index)}
                    >
                        {page}
                    </div>
                )}

                <div className={styles.paginated}
                    onClick={() => ROWS_PER_PAGE * (activePage + 1) < NUM_STUDENTS && setActivePage(activePage + 1)}
                >
                    <span> &raquo; </span>
                </div>
            </>
        )
    }

    function writePage(startIndex: number) {
        if (sortedLeaderboard.length < 2) return;

        return (
            <div className={styles.writtenPage}>
                {sortedLeaderboard.map((student: any, index: number) => {
                    if (index < (startIndex * ROWS_PER_PAGE)) return null;
                    if (index >= (startIndex * ROWS_PER_PAGE) + ROWS_PER_PAGE) return null;

                    const [STUDENT_NAME, STUDENT_NP] = Object.values(student);

                    return (
                        <div className={'row'} key={index}>
                            <span className={'col'} style={{maxWidth: "5%", marginLeft: "1rem", marginRight: "2.8rem", alignSelf: "center"}}> {calcTrophy(index)} </span>
                            <span className={'col'} style={{fontWeight: 700, alignSelf: "center"}}> {STUDENT_NAME} </span>
                            <span className={'col'} style={{fontFamily: "monospace", fontSize: "1.5rem", marginRight: "11rem", alignSelf: "center", alignItems: "flex-end", textAlign:"right"}}> {STUDENT_NP} </span>
                        </div>
                    )
                })}
            </div>
        )
    }

    return (
        <>
            <div className={styles.tableContainer}>
                {writePage(activePage)}
            </div>

            <div className={styles.container}>
                {getPagination()}
            </div>
        </>
    )
}

export default React.memo(Pagination);