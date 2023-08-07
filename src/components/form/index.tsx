import React, { useState } from 'react';
import { FormNavigator } from '@/util';
import Link from 'next/link';
import InfoForm from './info';
import PlansForm from './plan';
import AddOnsForm from './addOns';
import Summary from './summary';
import ThankYou from './thankYou';

const StepOne = 1;
const StepTwo = 2;
const StepThree = 3;
const StepFour = 4;

const Form = () => {
    const [currentTab, setCurrentTab] = useState<number>(StepOne);
    const [selectionValues, setSelectionValues] = useState({});
    const [selectionSummary, setSelectionSummary] = useState({});

    //Handle navigating back
    const handleBackNavigation = () => {
        if (currentTab === StepOne) {
            console.log('Cannot go back')
        } else {
            setCurrentTab(currentTab - StepOne);
        }
    };

    //Handle form transitioning
    const handleFormNavigator = (tab: number) => {
        setCurrentTab(tab)
    }

    const onSubmit = () => {
        handleFormNavigator(currentTab + StepOne);
    }

    const handlePlansSubmit = (selectionValues: any) => {
        setSelectionValues(selectionValues);
        handleFormNavigator(currentTab + StepOne);
    };

    const handleAddOnSubmit = (selectedSummary: any) => {
        setSelectionSummary(selectedSummary);
        handleFormNavigator(currentTab + StepOne);
    }

    const renderTabContent = (value: number, selectionValues: {}, selectionSummary: {} ) => {
        switch (value) {
            case StepOne: return <InfoForm onSubmit={onSubmit} />
            case StepTwo: return <PlansForm onSubmit={handlePlansSubmit} onBack={handleBackNavigation} />
            case StepThree: return <AddOnsForm onSubmit={handleAddOnSubmit} onBack={handleBackNavigation} selectionValues={selectionValues} />
            case StepFour: return <Summary onSubmit={onSubmit} onBack={handleBackNavigation} selectionSummary={selectionSummary}/>
            // case StepFive: return <ThankYou />
        }
    }
    return (
        <div className='app__form-container'>
            <div className='app__form-inner-container'>
                <div className='app__form-tab'>
                    {FormNavigator.map((item) => (
                        <Link
                            href="#"
                            key={item.id}
                            className={currentTab === item.id ? 'active' : 'inactive'}
                            onClick={() => handleFormNavigator(item.id)}
                        >
                            <div className={currentTab === item.id ? 'tab-number-container-active' : 'tab-number-container'}>
                                {item.id}
                            </div>
                            <div className='tab-header-container'>
                                <p className='title'>{item.title.toUpperCase()}</p>
                                <p className='subtitle'>{item.subtitle.toUpperCase()}</p>
                            </div>
                        </Link>
                    ))}
                </div>
                {renderTabContent(currentTab, selectionValues, selectionSummary)}
            </div>
        </div>
    )
}

export default Form
