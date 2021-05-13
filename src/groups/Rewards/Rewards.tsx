import { Labels } from "../../shared/components/Labels/Labels";
import styles from "./Rewards.module.scss";

export function Rewards() {
  const rewards = [
    ['3,000', 5],
    ['5,500', 10],
    ['10,000', 20],
    ['25,000', 50],
    ['35,000', 75],
    ['50,000', 100],
  ];

  return (
    <div className={styles.flex}>
      <Labels labels={["Points", "Reward"]} />
      <div className={styles.container}>
        {rewards.map((rewardArray: any, key: number) => {
          const [points, dollars] = rewardArray;

          return (
            <div className={styles.row} key={key}> {/* Index key is appropriate here given the static nature of the array */}
              <div className={styles.rowItem}>{points}</div>
              <div className={styles.rowItem}>${dollars}</div>
            </div>
          );
        })}

        <div className={styles.morePoints}>
          <p> Want more points? </p>
          <p> Answer riddles, complete projects, and ask for more things to do! There are endless ways to earn points at Code Ninjas. </p>
        </div>
      </div>
    </div>
  );
}

export default Rewards;
