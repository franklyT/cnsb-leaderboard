import styles from './Ranks.module.scss';

import rankOne from '../Leaderboard/Pagination/images/one.webp';
import rankTwo from '../Leaderboard/Pagination/images/two.webp';
import rankThree from '../Leaderboard/Pagination/images/three.webp';
import rankFour from '../Leaderboard/Pagination/images/four.webp';
import rankFive from '../Leaderboard/Pagination/images/five.webp';
import rankSix from '../Leaderboard/Pagination/images/six.webp';
import rankSeven from '../Leaderboard/Pagination/images/seven.png';
import rankEight from '../Leaderboard/Pagination/images/eight.webp';
import { Labels } from '../../shared/components/Labels/Labels';

export function Ranks() {
    return (
        <div className={styles.flex}>
            <div className={styles.container}>
                <Labels labels={["Rank", "Percentage"]} />

                <div className={`row`}>
                    <img className={`${styles.rankImage}`} src={rankOne} />
                    <h2 style={{ marginLeft: "1rem", fontWeight: 500 }}> Recruit </h2>
                    <h2 style={{width: "33%", textAlign: "left", marginLeft: "auto", marginRight: "3rem"}}> Keep going! </h2>
                </div>

                <div className={`row`}>
                    <img className={`${styles.rankImage}`} src={rankTwo} />
                    <h2 style={{ marginLeft: "1rem", fontWeight: 500 }}> Iron </h2>
                    <h2 style={{width: "33%", textAlign: "left", marginLeft: "auto", marginRight: "3rem"}}> Top 60% </h2>
                </div>

                <div className={`row`}>
                    <img className={`${styles.rankImage}`} src={rankThree} />
                    <h2 style={{ marginLeft: "1rem", fontWeight: 500 }}> Bronze </h2>
                    <h2 style={{width: "33%", textAlign: "left", marginLeft: "auto", marginRight: "3rem"}}> Top 40% </h2>
                </div>

                <div className={`row`}>
                    <img className={`${styles.rankImage}`} src={rankFour} />
                    <h2 style={{ marginLeft: "1rem", fontWeight: 500 }}> Copper </h2>
                    <h2 style={{width: "33%", textAlign: "left", marginLeft: "auto", marginRight: "3rem"}}> Top 20% </h2>
                </div>

                <div className={`row`}>
                    <img className={`${styles.rankImage}`} src={rankFive} />
                    <h2 style={{ marginLeft: "1rem", fontWeight: 500 }}> Silver </h2>
                    <h2 style={{width: "33%", textAlign: "left", marginLeft: "auto", marginRight: "3rem"}}> Top 10% </h2>
                </div>

                <div className={`row`}>
                    <img className={`${styles.rankImage}`} src={rankSix} />
                    <h2 style={{ marginLeft: "1rem", fontWeight: 500 }}> Gold </h2>
                    <h2 style={{width: "33%", textAlign: "left", marginLeft: "auto", marginRight: "3rem"}}> Top 6% </h2>
                </div>

                <div className={`row`}>
                    <img className={`${styles.rankImageResized}`} src={rankSeven} />
                    <h2 style={{ marginLeft: "1rem", fontWeight: 500 }}> Platinum </h2>
                    <h2 style={{width: "33%", textAlign: "left", marginLeft: "auto", marginRight: "3rem"}}> Top 3% </h2>
                </div>

                <div className={`row`}>
                    <img className={`${styles.rankImageResized}`} src={rankEight} />
                    <h2 style={{ marginLeft: "1rem", fontWeight: 500 }}> Diamond </h2>
                    <h2 style={{width: "33%", textAlign: "left", marginLeft: "auto", marginRight: "3rem"}}> Rank 1 </h2>
                </div>
            </div>
        </div>
    )
}

export default Ranks;