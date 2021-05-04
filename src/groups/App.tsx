import styles from "./App.module.scss";
import { UIContextProvider } from "../shared/contexts/UIContext";
import Header from "../shared/components/Header/Header";
import Footer from "../shared/components/Footer/Footer";
import { useState } from "react";
import Leaderboard from "./Leaderboard/Leaderboard";
import Rewards from "./Rewards/Rewards";
import { MenuContextProvider } from "../shared/contexts/MenuContext";
import { ActivePage } from "./Toolbar/ToolbarEnums";
import { Toolbar } from "./Toolbar/Toolbar";

export function App() {
  const [sortedLeaderboard, setSortedLeaderboard] = useState([[]] as any[][]);
  const [activeMenu, setActiveMenu] = useState(ActivePage.leaderboard);

  function uiOrMenu() {
    if (activeMenu === ActivePage.leaderboard) {
      return (
        <UIContextProvider value={{ sortedLeaderboard, setSortedLeaderboard }}>
          <Leaderboard />
        </UIContextProvider>
      );
    } else {
      return <Rewards />;
    }
  }

  return (
    <MenuContextProvider value={{ activeMenu, setActiveMenu }}>
      <div className={styles.container}>
        <Header />
        <Toolbar />
        {uiOrMenu()}
        <Footer />
      </div>
    </MenuContextProvider>
  );
}

export default App;
