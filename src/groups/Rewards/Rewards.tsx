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
    <>
      <Labels labels={["Points", "Reward"]} />
      <div className={styles.container}>
        {rewards.map((rewardArray: any, key: number) => {
          const [points, dollars] = rewardArray;

          return (
            <div className={"row"} key={key}>
              {" "}
              {/* Index key is appropriate here given the static nature of the array */}
              <div>{points}</div>
              <div>${dollars}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Rewards;
