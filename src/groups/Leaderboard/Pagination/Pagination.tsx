import React, { useContext, useEffect, useState } from 'react';
import UIContext from '../../../shared/contexts/UIContext';
import styles from './Pagination.module.scss';

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
        return <span> #{rank} </span>;

        // TODO: New icons before re-implementation, but the distributions are good
        // (Apparently I accidentally stole the original icons from Overwatch)
        // const img = (src: string, altTitle: string) => <img src={src} alt={altTitle} title={altTitle} style={{width: "3rem", transform: "translateZ(0)"}} />;
        // if (rank === 1) return img(rankEight, "Rank Eight");
        // else if (rank <= Math.ceil(0.03 * NUM_STUDENTS) /* Top 3% */) return img(rankSeven, "Rank Seven");
        // else if (rank <= Math.ceil(0.06 * NUM_STUDENTS) /* Top 6% */) return img(rankSix, "Rank Six");
        // else if (rank <= Math.ceil(0.10 * NUM_STUDENTS) /* Top 10% */) return img(rankFive, "Rank Five");
        // else if (rank <= Math.ceil(0.20 * NUM_STUDENTS) /* Top 20% */) return img(rankFour, "Rank Four");
        // else if (rank <= Math.ceil(0.40 * NUM_STUDENTS) /* Top 40% */) return img(rankThree, "Rank Three");
        // else if (rank <= Math.ceil(0.60 * NUM_STUDENTS) /* Top 60% */) return img(rankTwo, "Rank Two");
        // else if (true) return img(rankOne, "Rank One");
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
                            <span className={'col'} style={{maxWidth: "10%", marginLeft: "1em", alignSelf: "center"}}> {calcTrophy(index)} </span>
                            <span className={'col'} style={{fontWeight: 700, alignSelf: "center"}}> {STUDENT_NAME} </span>
                            <span className={'col'} style={{fontFamily: "monospace", fontSize: "1.5rem", marginRight: "8rem", alignSelf: "center", alignItems: "flex-end", textAlign:"right"}}> {STUDENT_NP} </span>
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