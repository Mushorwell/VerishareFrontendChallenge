import React, {useState, useEffect} from 'react';
import appStyles from '../../../app.module.css';
import contentStyles from '../contentSection.module.css';
import styles from "./debtorsDetails.module.css";
import {FaChevronDown} from 'react-icons/fa';
import DebtOverview from '../../../Data/debtoverview.json';
import PhoneOutcomeOptions from '../../../Data/phoneoutcome.json';
import MirandaTypes from '../../../Data/miranda_type.json';
import MirandaScripts from '../../../Data/miranda_script.json';

export const DebtorDetails = () => {
    const [time, setTime] = useState(new Date());
    const [showPhoneDropDown, setShowPhoneDropDown] = useState(false);
    const [selectedPhone, setSelectedPhone] = useState(`+111 555 008 926`);
    const [showPhoneOutcomeDropDown, setShowPhoneOutcomeDropDown] = useState(false);
    const [selectedPhoneOutcome, setSelectedPhoneOutcome] = useState('Select Phone Outcome');
    const [showMirandaOptions, setShowMirandaOptions] = useState(false);
    const [selectedMiranda, setSelectedMiranda] = useState('AAA A0D 2019');
    const [mirandaIndex, setMirandaIndex] = useState(0);
    const [mirandaScripts, setMirandaScripts] = useState([]);

    let miranda;

    const tickTime = () => {
        setTime(new Date());
    }

    useEffect(()=>{
        setInterval(() => tickTime(), 60000);
    });

    const getAddressLine = () => {
        let fullAddress = [
            DebtOverview.addressHistory.line1,
            DebtOverview.addressHistory.line2,
            DebtOverview.addressHistory.line3,
            DebtOverview.addressHistory.line4,
            DebtOverview.addressHistory.code,
            DebtOverview.addressHistory.stateCode,
            'USA'
        ];
        fullAddress = fullAddress.filter((addressLine)=>addressLine!==null);
        return fullAddress.join(', ');
    }

    const getPhoneNumbers = () => {
        return [
            '+111 555 008 926',
            '+111 '+[DebtOverview.phoneNumber.substring(0,3), DebtOverview.phoneNumber.substring(3,6), DebtOverview.phoneNumber.substring(6,9)].join(' ')
        ];
    }

    const handlePhoneDropdown = () => {
        setShowPhoneDropDown(!showPhoneDropDown);
    }

    const handleSelectedPhoneNumber = (event) => {
        setSelectedPhone(event.target.id);
        setShowPhoneDropDown(false);
    }

    const getPhoneOutcomes = () => {
        return PhoneOutcomeOptions.content;
    }

    const handlePhoneOutcomeDropdown = () =>{
        setShowPhoneOutcomeDropDown(!showPhoneOutcomeDropDown);
    }

    const handleSelectPhoneOutcome = (event) => {
        setSelectedPhoneOutcome(event.target.id);
        setShowPhoneOutcomeDropDown(false);
    }

    const handleMirandaDropdownMenu = () => {
        setShowMirandaOptions(!showMirandaOptions);
    }

    const getMirandaOptions = () => {
        return MirandaTypes.content;
    }

    const handleSelectMirandaType = (event) => {
        console.log(event.target.id);
        miranda = event.target.id;
        setSelectedMiranda(event.target.id);
        setShowMirandaOptions(false);
        setMirandaIndex(0);
        setMirandaScripts(getMirandaScripts());
    }

    const getMirandaScripts = () => {
        return MirandaScripts.content.filter((mirandaScript) => mirandaScript.miranda_Name === miranda);
    }

    return(
        <div className={[contentStyles.contentSidePane, contentStyles.contentSubSections, styles.debtorDetails].join(' ')}>
            <div className={styles.debtorDetailsHeader}>
                <h1>Debtor Details</h1>
                <p>Debtor local time: {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
            </div>
            <div className={styles.debtorDetailTabs}>
                <div className={[contentStyles.dashTab, styles.debtorDetailTab].join(' ')}>
                    Contact Details
                </div>
                <div className={contentStyles.dashActionLink}>
                    Confirm Details
                </div>
            </div>
            <div className={contentStyles.dashTabBody}>
                <div className={styles.contactDetails}>
                    <div className={[contentStyles.detailRow, contentStyles.detailRowFirst, styles.contactDetailsRow, styles.contactDetailsView].join(' ')}>
                        <div className={styles.contactLabel}>Name</div>
                        <div className={styles.contactValue}>{`${DebtOverview.title} ${DebtOverview.names} ${DebtOverview.surname}`}</div>
                    </div>
                    <div className={[contentStyles.detailRow, contentStyles.detailRowFirst, styles.contactDetailsRow, styles.contactDetailsView].join(' ')}>
                        <div className={styles.contactLabel}>Address</div>
                        <div className={styles.contactValue}>{getAddressLine()}</div>
                    </div>
                    <div className={[contentStyles.detailRow, contentStyles.detailRowFirst, styles.contactDetailsRow, styles.contactDetailsView].join(' ')}>
                        <div className={styles.contactLabel}>SSN</div>
                        <div className={styles.contactValue}>{`########${DebtOverview.idNumber.slice(DebtOverview.idNumber.length - 4)}`}</div>
                    </div>
                </div>
                <div className={styles.contactDetails}>
                    <div className={[contentStyles.detailRowFirst, styles.contactSelectAddSideMargin10].join(' ')}>
                        <div
                            className={[styles.contactDetailsRow, contentStyles.detailRow, styles.phoneNumber, styles.contactSelectBox].join(' ')}
                            onClick={()=> handlePhoneDropdown()}
                        >
                            <div className={[styles.contactDetailsView, styles.contactSelectAddSideMargin5].join(' ')}>
                                <div className={styles.contactLabel}>Phone</div>
                                <div className={styles.contactDropDown}>
                                    <div className={[styles.contactValue, styles.phoneNumber].join(' ')}>{selectedPhone}</div>
                                    <div className={styles.contactDropDownArrow}><FaChevronDown/></div>
                                </div>
                            </div>
                            <div className={styles.dashDropDownList} style={showPhoneDropDown?{display:'block'}:{display:'none'}}>
                                {getPhoneNumbers().map((phoneNumber, index) =>
                                    <div
                                        className={styles.dashDropDownSelectItem}
                                        id={phoneNumber}
                                        key={index}
                                        onClick={(e)=>handleSelectedPhoneNumber(e)}
                                    >{phoneNumber}</div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className={[contentStyles.detailRowFirst, styles.contactSelectAddSideMargin10].join(' ')}>
                        <div className={[styles.contactDetailsRow,contentStyles.detailRow, styles.contactSelectBox].join(' ')}>
                            <div
                                className={[styles.contactSelectBoxLabels, styles.contactDetailsView].join(' ')}
                                onClick={()=>handlePhoneOutcomeDropdown()}
                            >
                                <div className={styles.contactLabel}>{selectedPhoneOutcome}</div>
                                <div className={styles.contactDropDown}>
                                    <div className={styles.contactValue}></div>
                                    <div className={styles.contactDropDownArrow}><FaChevronDown/></div>
                                </div>
                            </div>
                            <div className={styles.dashDropDownList} style={showPhoneOutcomeDropDown?{display:'block'}:{display:'none'}}>
                                {getPhoneOutcomes().map((phoneOutcome, index) =>
                                    <div
                                        className={styles.dashDropDownSelectItem}
                                        id={phoneOutcome.phoneOutcome}
                                        key={index}
                                        onClick={(e)=>handleSelectPhoneOutcome(e)}
                                    >{phoneOutcome.phoneOutcome}</div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className={[styles.contactSelectAddSideMargin10].join(' ')}>
                        <div className={[styles.contactDetailsRow,contentStyles.detailRow, styles.contactSelectBox].join(' ')}>
                            <div className={[styles.contactSelectBoxLabels, styles.contactDetailsView].join(' ')}>
                                <div className={styles.contactLabel}>Select Action Code</div>
                                <div className={styles.contactDropDown}>
                                    <div className={styles.contactValue}></div>
                                    <div className={styles.contactDropDownArrow}><FaChevronDown/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.script}>
                        <div className={contentStyles.dashSubsectionHeading}>
                            Script
                        </div>
                        <div className={styles.contactSelectAddSideMargin5}>
                            <div className={[styles.contactDetailsRow, contentStyles.detailRow, styles.contactSelectBox].join(' ')}>
                                <div className={[styles.alignScriptSelectDropdown]} onClick={() => handleMirandaDropdownMenu()}>
                                    <div className={styles.contactLabel}>{selectedMiranda}</div>
                                    <div className={styles.contactDropDown}>
                                        <div className={styles.contactValue}></div>
                                        <div className={styles.contactDropDownArrow}><FaChevronDown/></div>
                                    </div>
                                </div>
                                <div className={styles.dashDropDownList} style={showMirandaOptions?{display:'block'}:{display:'none'}}>
                                    {getMirandaOptions().map((mirandaOption, index) =>
                                        <div
                                            className={styles.dashDropDownSelectItem}
                                            id={mirandaOption.miranda_Name}
                                            key={index}
                                            onClick={(e)=>handleSelectMirandaType(e)}
                                        >{mirandaOption.miranda_Name}</div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className={styles.scriptDetail}>
                            {mirandaScripts.length>0?mirandaScripts[mirandaIndex].script:'No Scripts...'}
                        </div>
                        <div className={styles.scriptControls}>
                            <button
                                className={[appStyles.dashControlBtn, styles.scriptDecisionBtn, styles.wrongParty].join(' ')}
                                onClick={() => setMirandaIndex(mirandaIndex>0?mirandaIndex-1:mirandaIndex)}
                            >Wrong Party</button>
                            <button
                                className={[appStyles.dashControlBtn, styles.scriptDecisionBtn, styles.rightParty].join(' ')}
                                onClick={() => setMirandaIndex((mirandaIndex<mirandaScripts.length-1)?mirandaIndex+1:mirandaIndex)}
                            >Right Party</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}