import React from 'react';
import appStyles from '../../app.module.css';
import styles from './topBar.module.css';
import logo from '../../images/AgentViewDashboardLogo_noBg.svg';
import {GiKnifeFork} from 'react-icons/gi';
import {FaRegKeyboard} from "react-icons/fa";

export const TopBar = () => {
    return(
        <div className={[styles.topBar, appStyles.widthBar].join(' ')}>
            <div className={[styles.leftAlignedBarItems, styles.topBarSection].join(' ')}>
                <img className={styles.logo} src={logo} alt="Agent View Dashboard Logo"/>
                    <div className={styles.activitySection}>
                        <button className={[styles.activityBtn, styles.activityBtnActive].join(' ')}>
                            <GiKnifeFork size={12}/>Lunch/Tea Break
                        </button>
                        <button className={styles.activityBtn}>
                            <FaRegKeyboard size={12}/>Away from Keyboard
                        </button>
                    </div>
            </div>
            <div className={[styles.campaignControlsSection, styles.topBarSection].join(' ')}>
                <button className={styles.campaignBtn}>Login to Campaign</button>
                <button className={styles.campaignBtn}>Pause Campaign</button>
            </div>
        </div>
    )
}