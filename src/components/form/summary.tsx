import React, { useState } from 'react';
import Header from '../header';

interface FormProps {
    onSubmit: () => void;
    onBack: () => void;
    onChange: () => void;
    selectionSummary: any;
}

const Summary: React.FC<FormProps> = ({ onSubmit, onBack, selectionSummary, onChange }) => {

    const handleBack = () => {
        onBack();
    }

    const handleChange = () => {
        onChange()
    }

    const handleSubmit = () => {
        onSubmit();
    };

    const title = selectionSummary.selectedPlan;
    const planAmount = selectionSummary.amount;
    const billingType = selectionSummary.billingType;

    const numericPlanAmount = parseFloat(planAmount.match(/\d+/)); // Extract numeric part

    const addons = selectionSummary.selectedAddons;

    let addonAmount = [];

    addonAmount = addons.map((addon: any) => (
        billingType === 'Monthly' ? addon.amountMonthly : addon.amountYearly
    ))

    const totalAddonCost = addonAmount.reduce((total: any, amount: any) => {
        const numericAmount = parseFloat(amount.match(/\d+/)); // Extract numeric part
        return total + numericAmount;
    }, 0);


    const totalAmount = numericPlanAmount + totalAddonCost;

    return (
        <div className='app__info-form'>
            <form className='form'>
                <Header headerText="Finishing up" subtitleText="Double check everything looks Ok before confirming." />

                <div className='summary-container'>
                    <div className='summary-title-container'>
                        <div>
                            <p>{title} ({billingType})</p>
                            <a className="subtitle-Text" style={{ textDecoration: 'underline' }} href="#" onClick={() => handleChange()}>Change</a>
                        </div>
                        <span>
                            {planAmount}
                        </span>
                    </div>
                    <div className='divider' />
                    <div>
                        {
                            addons.map((addon: any) => (
                                <div className='summary-title-container' key={addon.index}>
                                    <div>
                                        <p className="subtitle-Text">{addon.title}</p>
                                    </div>
                                    <span className='subtitle-Text'>
                                        {
                                            billingType === 'Monthly' ? addon.amountMonthly : addon.amountYearly
                                        }
                                    </span>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='summary-total-container'>
                    <p className='subtitle-Text'>Total {billingType === 'Monthly' ? '(per Month)' : '(per Year)'}</p>
                    <span className='summary-amountText'>+${totalAmount}/{billingType === 'Monthly' ? 'mo' : 'yr'}</span>
                </div>

            </form>

            <div className='app__form-buttons'>
                <span onClick={() => handleBack()}>Go Back</span>
                <button type='submit' onClick={() => handleSubmit()}>Confirm</button>
            </div>
        </div>
    )
}

export default Summary;