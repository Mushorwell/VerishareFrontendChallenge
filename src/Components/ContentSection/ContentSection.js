import React from 'react';
import appStyles from '../../app.module.css';
import styles from './contentSection.module.css';
import {DebtorDetails} from "./debtorsDetails/DebtorDetails";
import {AccountOverview} from "./AccountOverview/AccountOverview";
import {RepaymentActions} from "./repaymentActions/RepaymentActions";

export const ContentSection = () => {
    return(
        <div className={appStyles.container}>
            <div className={styles.contentSection}>
                <DebtorDetails />
                <AccountOverview />
                <RepaymentActions />
            </div>
        </div>
    );
}