import React, {useState} from 'react';
import appStyles from '../../../app.module.css';
import contentStyles from "../contentSection.module.css";
import debtorStyles from '../debtorsDetails/debtorsDetails.module.css';
import styles from './accountOverview.module.css';
import {FaChevronDown, FaRegBell, FaStar} from 'react-icons/fa';
import DebtOverview from '../../../Data/debtoverview.json';
import {BiNotepad} from "react-icons/bi";

export const AccountOverview = () => {

    const [randomNotes] = useState([
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Risus in hendrerit gravida rutrum quisque. A lacus vestibulum sed arcu non. Id consectetur purus ut faucibus. Vel eros donec ac odio tempor orci dapibus. Ornare suspendisse sed nisi lacus. Vel orci porta non pulvinar neque. Ut porttitor leo a diam sollicitudin tempor id eu nisl. Vitae congue mauris rhoncus aenean vel. A iaculis at erat pellentesque adipiscing. Ultrices eros in cursus turpis. Lacinia at quis risus sed vulputate. Eget velit aliquet sagittis id consectetur purus. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Commodo ullamcorper a lacus vestibulum sed. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet. Pulvinar sapien et ligula ullamcorper. Dis parturient montes nascetur ridiculus mus. Quis risus sed vulputate odio ut enim blandit.\n' +
        '\n' +
        'Non consectetur a erat nam. Est ultricies integer quis auctor. Tempus iaculis urna id volutpat lacus laoreet. Sem fringilla ut morbi tincidunt augue. Nullam vehicula ipsum a arcu cursus vitae. Etiam tempor orci eu lobortis elementum nibh tellus. Integer malesuada nunc vel risus commodo viverra maecenas accumsan. Magna eget est lorem ipsum. Id cursus metus aliquam eleifend mi in nulla. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Ornare lectus sit amet est placerat. Laoreet non curabitur gravida arcu ac tortor dignissim convallis. In ante metus dictum at tempor. Elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Egestas integer eget aliquet nibh. Tempor orci eu lobortis elementum. Quam vulputate dignissim suspendisse in est ante. Elit at imperdiet dui accumsan sit amet nulla. Amet venenatis urna cursus eget nunc scelerisque viverra. Nibh nisl condimentum id venenatis.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Luctus venenatis lectus magna fringilla urna. Netus et malesuada fames ac. Eget mauris pharetra et ultrices neque. Enim nulla aliquet porttitor lacus. Auctor eu augue ut lectus arcu bibendum at varius. Tempor nec feugiat nisl pretium fusce id. Diam vulputate ut pharetra sit amet aliquam. Scelerisque eleifend donec pretium vulputate sapien nec. Diam in arcu cursus euismod quis viverra. Consectetur libero id faucibus nisl tincidunt eget nullam. Bibendum enim facilisis gravida neque convallis a cras semper. Sit amet massa vitae tortor condimentum lacinia quis. Odio facilisis mauris sit amet massa vitae. Et tortor at risus viverra adipiscing at. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Pretium aenean pharetra magna ac placerat vestibulum lectus. Sed libero enim sed faucibus turpis in. Quis viverra nibh cras pulvinar mattis.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc consequat interdum varius sit amet mattis vulputate. Nulla facilisi morbi tempus iaculis. Lectus proin nibh nisl condimentum id venenatis a. Gravida neque convallis a cras. Nibh mauris cursus mattis molestie a iaculis at. Aliquam malesuada bibendum arcu vitae elementum curabitur. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Nam libero justo laoreet sit amet. Ipsum dolor sit amet consectetur adipiscing elit.\n' +
        '\n' +
        'Nunc scelerisque viverra mauris in aliquam sem fringilla ut. Aenean et tortor at risus viverra adipiscing. Tincidunt vitae semper quis lectus nulla at volutpat diam ut. Eget magna fermentum iaculis eu non diam phasellus. Mauris commodo quis imperdiet massa. Egestas diam in arcu cursus euismod quis viverra nibh cras. Pellentesque id nibh tortor id aliquet lectus proin. Interdum velit laoreet id donec ultrices. Morbi tristique senectus et netus et. Elementum integer enim neque volutpat. Volutpat odio facilisis mauris sit amet. Lacus vel facilisis volutpat est. Sit amet tellus cras adipiscing enim eu turpis egestas. In dictum non consectetur a erat nam at. Tristique senectus et netus et malesuada fames ac. Felis eget nunc lobortis mattis aliquam faucibus purus in. Cras ornare arcu dui vivamus arcu felis bibendum ut tristique. Mi in nulla posuere sollicitudin aliquam ultrices sagittis. Mattis molestie a iaculis at erat pellentesque adipiscing. Fermentum dui faucibus in ornare quam viverra orci sagittis eu.\n' +
        '\n' +
        'Sed turpis tincidunt id aliquet. Vivamus at augue eget arcu dictum varius duis. Nec nam aliquam sem et tortor consequat id porta. Feugiat pretium nibh ipsum consequat nisl vel pretium. Purus ut faucibus pulvinar elementum integer enim. Ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Orci dapibus ultrices in iaculis nunc sed augue lacus viverra. Elementum nibh tellus molestie nunc non blandit massa enim. Ultrices neque ornare aenean euismod elementum nisi quis eleifend quam. Sed arcu non odio euismod.'
    ]);

    return(
        <div className={[contentStyles.accountOverview, contentStyles.contentMainSections, contentStyles.contentSubSections].join(' ')}>
            <div className={contentStyles.contentSectionHeading}>
                <h1>Debt Account Overview</h1>
            </div>
            <div className={contentStyles.mainSectionTabView}>
                <div className={contentStyles.mainSectionTabHeader}>
                    <div className={styles.accountOverviewTabs}>
                        <div className={[styles.accountOverviewTab, contentStyles.dashTab].join(' ')}>
                            Account Details
                        </div>
                        <div className={[styles.accountOverviewTab, contentStyles.dashTab, contentStyles.inactiveTab].join(' ')}>
                            Comms History
                        </div>
                        <div className={[styles.accountOverviewTab, contentStyles.dashTab, contentStyles.inactiveTab].join(' ')}>
                            <FaRegBell className={styles.accountOverviewTabIcon} size={15} />Notes
                        </div>
                    </div>
                </div>
                <div className={contentStyles.dashTabBody}>
                    <div className={styles.accountOverviewBody}>
                        <div className={[contentStyles.detailRow, contentStyles.detailRowFirst].join(' ')}>
                            <div className={styles.accountOverviewDetailsRow}>
                                <div>
                                    Client Name
                                </div>
                                <div>{DebtOverview.clientName} from {DebtOverview.clientGroup}</div>
                                <div className={styles.accountOverviewDetailLink}>View Details</div>
                            </div>
                        </div>
                        <div className={[contentStyles.detailRow, contentStyles.detailRowFirst].join(' ')}>
                            <div className={styles.accountOverviewDetailsRow}>
                                <div>
                                    Industry
                                </div>
                                <div>{DebtOverview.industryCategory}</div>
                                <div className={styles.accountOverviewDetailLink}>View Details</div>
                            </div>
                        </div>
                        <div className={[contentStyles.detailRow, contentStyles.detailRowFirst].join(' ')}>
                            <div className={styles.accountOverviewDetailsRow}>
                                <div>
                                    Product
                                </div>
                                <div>{'Fruits and vegetables'}</div>
                                <div className={styles.accountOverviewDetailLink}>View Details</div>
                            </div>
                        </div>
                        <div className={[contentStyles.detailRow, contentStyles.detailRowFirst].join(' ')}>
                            <div className={styles.accountOverviewDetailsRow}>
                                <div>
                                    Last Contacted
                                </div>
                                <div>{new Date(2021, 6,7,10,26).toLocaleString()}</div>
                                <div className={styles.accountOverviewDetailLink}>View Details</div>
                            </div>
                        </div>
                        <div className={[contentStyles.detailRow, contentStyles.detailRowFirst].join(' ')}>
                            <div className={styles.accountOverviewDetailsRow}>
                                <div>
                                    Last Payment
                                </div>
                                <div>{new Date(2021,5,1).toLocaleDateString()}</div>
                                <div className={styles.accountOverviewDetailLink}>View Details</div>
                            </div>
                        </div>
                        <div className={[contentStyles.detailRow].join(' ')}>
                            <div className={styles.accountOverviewDetailsRow}>
                                <div>
                                    No. of Settlements
                                </div>
                                <div>{2}</div>
                                <div className={styles.accountOverviewDetailLink}>View Details</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.accountOverviewNotes}>
                    <div className={styles.accountOverviewPinnedNotesHead}>
                        <div className={contentStyles.dashSubsectionHeading}>
                            Top Pinned Notes
                        </div>
                        <div className={styles.accountOverviewPinnedNotesHeadLink}>
                            View All
                        </div>
                    </div>
                    <div classs={styles.accountNotesGrid}>
                        <div className={styles.accountNotesRow}>
                            <div className={styles.accountNoteRowIcon}><FaStar size={15}/></div>
                            <div className={styles.accountPinnedNotesText}>{randomNotes[2].slice(0, 100) + '...'}</div>
                            <div className={[styles.accountDropDownArrow, debtorStyles.contactDropDownArrow].join(' ')}><FaChevronDown/></div>
                        </div>
                        <div className={[styles.accountNotesRow, styles.accountNotesRowEven].join(' ')}>
                            <div className={styles.accountNoteRowIcon}><FaStar size={15}/></div>
                            <div className={styles.accountPinnedNotesText}>{randomNotes[0].slice(0, 100)+ '...'}</div>
                            <div className={[styles.accountDropDownArrow, debtorStyles.contactDropDownArrow].join(' ')}><FaChevronDown/></div>
                        </div>
                        <div className={styles.accountNotesRow}>
                            <div className={styles.accountNoteRowIcon}><FaStar size={15}/></div>
                            <div className={styles.accountPinnedNotesText}>{randomNotes[1].slice(0,100)+ '...'}</div>
                            <div className={[styles.accountDropDownArrow, debtorStyles.contactDropDownArrow].join(' ')}><FaChevronDown/></div>
                        </div>
                    </div>
                </div>
                <div className={contentStyles.alignBtnRight}>
                    <button className={[appStyles.dashControlBtn, contentStyles.mainDashBtn, styles.addNoteBtn].join(' ')}>
                        <BiNotepad className={styles.addNoteBtnIcon} size={20}/>Add Note
                    </button>
                </div>
            </div>
        </div>
    );
}