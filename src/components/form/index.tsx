import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { FormNavigator } from '@/util';
import Link from 'next/link';
import InfoForm from './info';
import PlansForm from './plan';

const StepOne = 1;
const StepTwo = 2;
const StepThree = 3;
const StepFour = 4;

const Form = () => {
    const [currentTab, setCurrentTab] = useState<number>(StepOne);

    const router = useRouter();

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

    const renderTabContent = (value: number) => {
        switch (value) {
            case StepOne: return <InfoForm onSubmit={onSubmit}/>
            case StepTwo: return <PlansForm onSubmit={onSubmit}/>
            case StepThree: return <InfoForm onSubmit={onSubmit}/>
            case StepFour: return <InfoForm onSubmit={onSubmit}/>
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
                {renderTabContent(currentTab)}
            </div>
        </div>
    )
}

export default Form
