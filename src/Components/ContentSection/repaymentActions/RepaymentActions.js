import React from 'react';
import appStyles from '../../../app.module.css';
import contentStyles from "../contentSection.module.css";
import accountStyles from '../AccountOverview/accountOverview.module.css';
import styles from './repaymentActions.module.css';
import {FiAlertTriangle} from 'react-icons/fi';
import {FaChevronDown} from 'react-icons/fa';
import {FiCalendar} from 'react-icons/fi';

export const RepaymentActions = () => {
    return(
        <div className={[contentStyles.contentMainSections, contentStyles.contentSubSections].join(' ')}>
            <div className={contentStyles.contentSectionHeading}>
                <h1>Repayment Actions</h1>
            </div>
            <div className={contentStyles.mainSectionTabView}>
                <div className={contentStyles.mainSectionTabHeader}>
                    <div className={styles.repaymentActionsTabs}>
                        <div className={[contentStyles.dashTab, styles.repaymentActionsTab].join(' ')}>
                            Account Details
                        </div>
                        <div className={[contentStyles.dashActionLink, styles.repaymentActionsNoTab].join(' ')}>
                            <div>Transaction History</div>
                            <div>Insert Costs</div>
                        </div>
                    </div>
                </div>
                <div className={contentStyles.dashTabBody}>
                    <div className={styles.repaymentActionTabBody}>
                        <div className={[styles.repaymentActionDetailRows, contentStyles.dashDetailRowHeader].join(' ')}>
                            <div></div>
                            <div>Charged</div>
                            <div className={contentStyles.dashDetailRowAlignRight}>Paid</div>
                        </div>
                        <div className={styles.repaymentActionDetailRows}>
                            <div className={styles.repaymentActionsLabel}>Capital Amount</div>
                            <div className="">${50000}.00</div>
                            <div className={contentStyles.dashDetailRowAlignRight}>${15000}.00</div>
                        </div>
                        <div className={styles.repaymentActionDetailRows}>
                            <div className={styles.repaymentActionsLabel}>Interest</div>
                            <div className="">${20000}.00</div>
                            <div className={contentStyles.dashDetailRowAlignRight}>${7000}.00</div>
                        </div>
                        <div className={styles.repaymentActionDetailRows}>
                            <div className={styles.repaymentActionsLabel}>Costs</div>
                            <div className="">${10000}.00</div>
                            <div className={contentStyles.dashDetailRowAlignRight}>${9000}.00</div>
                        </div>
                        <div
                            className={[styles.repaymentActionDetailRows, styles.repaymentActionDetailRowsNoBorder, styles.repaymentAggregations].join(' ')}>
                            <div>Balance</div>
                            <div></div>
                            <div className={contentStyles.dashDetailRowAlignRight}>${50000-15000+20000-7000+10000-9000}</div>
                        </div>
                        <div
                            className={[contentStyles.dashDetailRowAddMargins, styles.repaymentActionDetailRows, styles.repaymentActionDetailRowsNoBorder].join(' ')}>
                            <div className={styles.repaymentActionsLabel}>Receipting Fee on Settlement</div>
                            <div>{10}%</div>
                            <div className={contentStyles.dashDetailRowAlignRight}>${2576}.00</div>
                        </div>
                        <div
                            className={[styles.repaymentActionDetailRows, styles.repaymentActionDetailRowsNoBorder, styles.repaymentAggregations].join(' ')}>
                            <div>Full Settlement Amount</div>
                            <div></div>
                            <div className={contentStyles.dashDetailRowAlignRight}>${50000-15000+20000-7000+10000-9000 +0.1*(50000-15000+20000-7000+10000-9000 - 2576)}.00</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={contentStyles.mainSectionTabView}>
                <div className={contentStyles.mainSectionTabHeader}>
                    <div className={styles.repaymentActionsTabs}>
                        <div className={[contentStyles.dashTab, styles.repaymentActionsTab].join(' ')}>
                            Repayment Plan
                        </div>
                        <div className={[contentStyles.dashTab, styles.repaymentActionsTab, contentStyles.inactiveTab].join(' ')}>
                            Payment History
                        </div>
                    </div>
                </div>
                <div className={contentStyles.dashTabBody}>
                    <div className={styles.repaymentActionTabBody}>
                        <div className={styles.repaymentPlanStatusRow}>
                            <div className={styles.repaymentPlanStatusSection}>
                                <div className={[styles.repaymentPlanStatusEmphasis, styles.repaymentPlanStatusCenterIcon].join(' ')}><FiAlertTriangle size={25}/></div>
                                <div className={styles.repaymentStatusBarLineHeight}>
                                    <div>You have never made payment to this account.</div>
                                    <div>We recommend an <span className={styles.repaymentPlanStatusEmphasis}>installment of $379.83</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={[styles.repaymentActionDetailRows, styles.repaymentPlanDetailRows].join(' ')}>
                            <div className={styles.repaymentActionsLabel}>First Payment Date</div>
                            <div className="">{new Date(2021,6,1).toLocaleDateString()}</div>
                            <div className={contentStyles.dashDetailRowAlignRight}><FiCalendar size={12} color={'#4990e2'}/></div>
                        </div>
                        <div className={[styles.repaymentActionDetailRows, styles.repaymentPlanDetailRows].join(' ')}>
                            <div className={styles.repaymentActionsLabel}>Payment Occurrence</div>
                            <div className="">Monthly</div>
                            <div className={contentStyles.dashDetailRowAlignRight}><FaChevronDown size={12} color={'#4990e2'}/></div>
                        </div>
                        <div className={[styles.repaymentActionDetailRows, styles.repaymentPlanDetailRows].join(' ')}>
                            <div className={styles.repaymentActionsLabel}>Popular Templates</div>
                            <div className="">N/A</div>
                            <div className={contentStyles.dashDetailRowAlignRight}><FaChevronDown size={12} color={'#4990e2'}/></div>
                        </div>
                        <div
                            className={[styles.repaymentPlanDetailRows, styles.repaymentActionDetailRowsNoBorder, contentStyles.dashDetailRowRemoveMargins].join(' ')}>
                            <div className={styles.repaymentActionsLabel}>Comms Method</div>
                            <div className="">EMAIL</div>
                            <div className={contentStyles.dashDetailRowAlignRight}><FaChevronDown size={12} color={'#4990e2'}/></div>
                        </div>
                    </div>
                </div>
                <div className={contentStyles.alignBtnRight}>
                    <button className={[appStyles.dashControlBtn, contentStyles.mainDashBtn, styles.repaymentPlanRecalcBtn].join(' ')}>
                        Recalculate Repayment Plan
                    </button>
                </div>
            </div>
        </div>
    );
}
