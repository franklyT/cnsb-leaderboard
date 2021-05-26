import React, { useContext, useEffect } from 'react';
import firebase from "firebase/app";
import 'firebase/database';
import styles from './Leaderboard.module.scss';
import { Pagination } from './Pagination/Pagination';
import Labels from '../../shared/components/Labels/Labels';
import Loader from '../../shared/components/Loader/Loader';
import UIContext from "../../shared/contexts/UIContext";

// Initialize Firebase
firebase.initializeApp({
    apiKey: "AIzaSyDCrAReuMHagtH0ri7NIYRXj8XgA7y-R6A",
    authDomain: "cnsb-admin-db.firebaseapp.com",
    databaseURL: "https://cnsb-admin-db-default-rtdb.firebaseio.com",
    projectId: "cnsb-admin-db",
    storageBucket: "cnsb-admin-db.appspot.com",
    messagingSenderId: "827805297764",
    appId: "1:827805297764:web:6c9718b526a0e4c4620371",
    measurementId: "G-GXZDDMPVRN"
});

function Leaderboard() {
    const { sortedLeaderboard, setSortedLeaderboard } = useContext(UIContext);

    useEffect(() => {
        firebase
            .database()
            .ref("/leaderboard")
            .once("value", (snapshot: any) => {
                setSortedLeaderboard(Object.values(JSON.parse(JSON.stringify(snapshot)))
                    .map((user: any) => user) // creates an array from the JSON
                    .filter(user => user[0].toLowerCase().includes("sensei") === false && user[0].toLowerCase().includes("code ninja") === false) // senseis don't get to be on the Leaderboard
                    .sort((a: any, b: any) => a[1] > b[1] ? -1 : 1)); // sorts by total NP
            });
    }, [])

    // click on name, get list of COMPLETE projects that you got ninja points from

    return (
        <div className={styles.flex}>
            <div style={{alignItems: "center", width: "fit-content", marginTop: "1rem", marginBottom: "1rem", fontStyle: "italic", marginLeft: "auto", marginRight: "auto"}}> 
                (Tip: Mouse over your points for current total!)
            </div>
            <Labels labels={[["Rank", { maxWidth: '1%' }], ["Student Name", { maxWidth: '40%' }], ["Ninja Points (All Time)", { marginLeft: "10rem", maxWidth: '100%' }]]} />
            {sortedLeaderboard.length > 1 || <Loader />}
            <Pagination />
        </div>
    );
}

export default React.memo(Leaderboard);
