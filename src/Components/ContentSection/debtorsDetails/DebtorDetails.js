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
    // States for the component

    // state for displaying a real time clock on in the component
    const [time, setTime] = useState(new Date());

    // states for handling the select dropdown for the phone number dropdown
    const [showPhoneDropDown, setShowPhoneDropDown] = useState(false);
    const [selectedPhone, setSelectedPhone] = useState(`+111 555 008 926`);

    // states for handling the select dropdown options for the phone outcomes dropdown
    const [showPhoneOutcomeDropDown, setShowPhoneOutcomeDropDown] = useState(false);
    const [selectedPhoneOutcome, setSelectedPhoneOutcome] = useState('Select Phone Outcome');

    // states for handling the select dropdown options for the Miranda options dropdown
    const [showMirandaOptions, setShowMirandaOptions] = useState(false);
    const [selectedMiranda, setSelectedMiranda] = useState('AAA A0D 2019');

    // states for handling the navigation between the different miranda scripts for a miranda type
    const [mirandaIndex, setMirandaIndex] = useState(0);
    const [mirandaScripts, setMirandaScripts] = useState([]);

    // variable to temporarily store the value of selected miranda while it's also being passed to state selectedMiranda
    let miranda;

    // function to set the time to the time state of the component
    const tickTime = () => {
        setTime(new Date());
    }

    // use effect used to update the time state every minute
    useEffect(()=>{
        setInterval(() => tickTime(), 60000);
    });


    // Functions for the component
    // function to construct the full address line for the interface
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

    // function to get all the available phone numbers and format them for the interface
    const getPhoneNumbers = () => {
        return [
            '+111 555 008 926',
            '+111 '+[DebtOverview.phoneNumber.substring(0,3), DebtOverview.phoneNumber.substring(3,6), DebtOverview.phoneNumber.substring(6,9)].join(' ')
        ];
    }

    // function to toggle dropdown menu
    const handleDropdown = (state, setFunction) => {
        setFunction(!state);
    }
    // function to select a value from dropdown
    const handleOptionSelection = (event, functionForValue, functionForDropdownToggle) => {
        functionForValue(event.target.id);
        functionForDropdownToggle(false);
    }

    // simple function to retrieve data objects
    const getData = (dataObject) => {
        return dataObject.content;
    }

    // function to get available miranda scripts for selected miranda type
    const handleSelectMirandaType = (event) => {
        miranda = event.target.id;
        setSelectedMiranda(event.target.id);
        setShowMirandaOptions(false);
        setMirandaIndex(0);
        setMirandaScripts(getMirandaScripts());
    }

    // function to filter miranda scripts
    const getMirandaScripts = () => {
        return MirandaScripts.content.filter((mirandaScript) => mirandaScript.miranda_Name === miranda);
    }

    return(
        // styling using multiple classes from css modules
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
                            onClick={()=> handleDropdown(showPhoneDropDown, setShowPhoneDropDown)}
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
                                        onClick={(e)=>handleOptionSelection(e, setSelectedPhone, setShowPhoneDropDown)}
                                    >{phoneNumber}</div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className={[contentStyles.detailRowFirst, styles.contactSelectAddSideMargin10].join(' ')}>
                        <div className={[styles.contactDetailsRow,contentStyles.detailRow, styles.contactSelectBox].join(' ')}>
                            <div
                                className={[styles.contactSelectBoxLabels, styles.contactDetailsView].join(' ')}
                                onClick={()=>handleDropdown(showPhoneOutcomeDropDown, setShowPhoneOutcomeDropDown)}
                            >
                                <div className={styles.contactLabel}>{selectedPhoneOutcome}</div>
                                <div className={styles.contactDropDown}>
                                    <div className={styles.contactValue}></div>
                                    <div className={styles.contactDropDownArrow}><FaChevronDown/></div>
                                </div>
                            </div>
                            <div className={styles.dashDropDownList} style={showPhoneOutcomeDropDown?{display:'block'}:{display:'none'}}>
                                {getData(PhoneOutcomeOptions).map((phoneOutcome, index) =>
                                    <div
                                        className={styles.dashDropDownSelectItem}
                                        id={phoneOutcome.phoneOutcome}
                                        key={index}
                                        onClick={(e)=>handleOptionSelection(e, setSelectedPhoneOutcome, setShowPhoneOutcomeDropDown)}
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
                </div>
            </div>
            <div className={styles.script}>
                <div className={contentStyles.dashSubsectionHeading}>
                    Script
                </div>
                <div className={styles.contactSelectAddSideMargin5}>
                    <div className={[styles.contactDetailsRow, contentStyles.detailRow, styles.contactSelectBox].join(' ')}>
                        <div className={[styles.alignScriptSelectDropdown]} onClick={() => handleDropdown(showMirandaOptions, setShowMirandaOptions)}>
                            <div className={styles.contactLabel}>{selectedMiranda}</div>
                            <div className={styles.contactDropDown}>
                                <div className={styles.contactValue}></div>
                                <div className={styles.contactDropDownArrow}><FaChevronDown/></div>
                            </div>
                        </div>
                        <div className={styles.dashDropDownList} style={showMirandaOptions?{display:'block'}:{display:'none'}}>
                            {getData(MirandaTypes).map((mirandaOption, index) =>
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
    );
}