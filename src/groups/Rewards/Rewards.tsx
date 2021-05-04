import { Labels } from "../../shared/components/Labels/Labels";
import styles from "./Rewards.module.scss";

export function Rewards() {
  const rewards = [
    [3000, 15],
    [5500, 10],
    [10000, 20],
    [20000, 50],
    [35000, 75],
    [50000, 100],
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
          <p> Answer riddles, complete projects, and ask for more things to do! There are endless ways to earn points at Code Ninjas ©. </p>
        </div>
      </div>
    </div>
  );
}

export default Rewards;
