import React from 'react';
import appStyles from '../../app.module.css';
import styles from './contentSection.module.css';
import {DebtorDetails} from "./debtorsDetails/DebtorDetails";
import {AccountOverview} from "./AccountOverview/AccountOverview";
import {RepaymentActions} from "./repaymentActions/RepaymentActions";
import {HiMenuAlt1} from 'react-icons/hi';

export const ContentSection = () => {
    return(
        <div className={appStyles.container}>
            <div className={styles.dashMyDeskMenu}>
                <HiMenuAlt1 className={styles.dashMyDeskMenuIcon} size={20}/>My Desk
            </div>
            <div className={styles.contentSection}>
                <DebtorDetails />
                <AccountOverview />
                <RepaymentActions />
            </div>
        </div>
    );
}