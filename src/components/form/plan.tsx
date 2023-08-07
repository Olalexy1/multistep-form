import React, { useState } from 'react';
import Header from '../header';
import { Switch } from '@chakra-ui/react';
import Image from "next/image";
import { images } from '@/util';

interface selectOption {
    id: number;
    title: string;
    amount: string;
    type: string;
}

interface PlansProps {
    title: string;
    amount: string;
    onSelect: () => void;
    isSelected: boolean;
    type?: string;
    image: string;
    promo?: string;
}

interface FormProps {
    onSubmit: () => void;
    onBack: () => void;
}

const planOptions = [
    {
        id: 1,
        title: 'Arcade',
        amountMonthly: '$9/mo',
        amountYearly: '$90/yr',
        image: images.arcade,
        promo: '2 months free'
    },
    {
        id: 2,
        title: 'Advanced',
        amountMonthly: '$12/mo',
        amountYearly: '$120/yr',
        image: images.advanced,
        promo: '2 months free'
    },
    {
        id: 3,
        title: 'Pro',
        amountMonthly: '$15/mo',
        amountYearly: '$150/yr',
        image: images.pro,
        promo: '2 months free'
    }
];


const PlanCards: React.FC<PlansProps> = ({
    title,
    amount,
    onSelect,
    isSelected,
    image,
    promo
}) => {
    return (
        <div onClick={onSelect}>
            <Image className='plans-img' src={image} alt="plans" />
            <p className='plans-title'>{title}</p>
            <p className='plans-amount'>{amount}</p>
            <p className='plans-promo'>{promo}</p>
        </div>
    );
};


const PlansForm: React.FC<FormProps> = ({ onSubmit, onBack }) => {
    // const [selectedOption, setSelectedOption] = useState<selectOption>({ id: 0, title: '', amount: '', type:'' });
    const [isType, setIsType] = useState('');
    const [isSwitchOn, setIsSwitchOn] = useState(false);

    const handleBack = () => {
        onBack();
    }

    const handleSubmit = () => {
        onSubmit();
    };

    const [selectedPlanId, setSelectedPlanId] = useState<number | null>(null);

    const handleSwitch = () => {
        setIsSwitchOn((prevValue) => !prevValue);
        console.log(!isSwitchOn);
    };

    const handleCardSelect = (planId: number) => {
        if (isSwitchOn) {
            setIsType('Yearly');
            setSelectedPlanId(planId);
        }
        else {
            setIsType('Monthly');
            setSelectedPlanId(planId);
        }
        // setSelectedPlanId(planId);
        // console.log('I have been selected', planId)
    };


    return (
        <div className='app__info-form'>
            <form className='form'>
                <Header headerText="Select your Plan" subtitleText="You have the option of monthly or yearly billing." />
                <div className='plans-container'>
                    {
                        planOptions.map((plan) => (
                            <div className={selectedPlanId === plan.id ? 'plans-active' : 'plans'}>
                                <PlanCards
                                    title={plan.title}
                                    image={plan.image}
                                    amount={isSwitchOn ? plan.amountYearly : plan.amountMonthly}
                                    promo={isSwitchOn ? plan.promo : ''}
                                    onSelect={() => handleCardSelect(plan.id)}
                                    isSelected={selectedPlanId === plan.id}
                                />
                            </div>
                        ))
                    }
                </div>

                <div className='billing-type-container'>
                    <span className={isSwitchOn ? 'duration' : 'duration-active'}>Monthly</span>
                    <Switch className="switch" colorScheme="" onChange={handleSwitch} />
                    <span className={isSwitchOn ? 'duration-active' : 'duration'}>Yearly</span>
                </div>

            </form>

            <div className='app__form-buttons'>
                <span onClick={() => handleBack()}>Go Back</span>
                <button type='submit' onClick={() => handleSubmit()}>Next Step</button>
            </div>
        </div>
    )
}

export default PlansForm;