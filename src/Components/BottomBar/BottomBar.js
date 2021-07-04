import React from 'react';
import appStyles from '../../app.module.css';
import styles from './bottomBar.module.css';

export const BottomBar = () => {
    return(
        <div className={[appStyles.widthBar, styles.bottomBar].join(' ')}>
            <button className={[appStyles.dashControlBtn, styles.caseNavigationBtn, styles.prevCaseBtn].join(' ')}>
                Previous Case
            </button>
            <div className={styles.dashStat}>
                <div className={styles.dashStatLabel}>connect</div>
                <div className={styles.dashStatValue}>123</div>
            </div>
            <div className={styles.dashStat}>
                <div className={styles.dashStatLabel}>repayment plans</div>
                <div className={styles.dashStatValue}>63</div>
            </div>
            <div className={styles.dashStat}>
                <div className={styles.dashStatLabel}>recurring payments</div>
                <div className={styles.dashStatValue}>05</div>
            </div>
            <div className={styles.dashStat}>
                <div className={styles.dashStatLabel}>distinct accounts</div>
                <div className={styles.dashStatValue}>11</div>
            </div>
            <div className={styles.dashStat}>
                <div className={styles.dashStatLabel}>kept rate</div>
                <div className={styles.dashStatValue}>5,4%</div>
            </div>
            <div className={styles.dashStat}>
                <div className={styles.dashStatLabel}>negotiate</div>
                <div className={styles.dashStatValue}>08</div>
            </div>
            <div className={styles.dashStat}>
                <div className={styles.dashStatLabel}>commission rate</div>
                <div className={styles.dashStatValue}>10%</div>
            </div>
            <div className={styles.dashStat}>
                <div className={styles.dashStatLabel}>my ranking</div>
                <div className={styles.dashStatValue}>4/100</div>
            </div>
            <button className={[appStyles.dashControlBtn, styles.caseNavigationBtn, styles.prevCaseBtn].join(' ')}>
                Next Case
            </button>
        </div>
    );
}