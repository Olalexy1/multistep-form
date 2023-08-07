import React, { useEffect, useState } from 'react';
import Header from '../header';
import { Switch } from '@chakra-ui/react';
import Image from "next/image";
import { images } from '@/util';

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
    onSubmit: (selectionValues: any) => void;
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
    promo,
    type
}) => {
    return (
        <div onClick={onSelect}>
            <Image className='plans-img' src={image} alt="plans" />
            <div className='plans-text-container'>
                <p className='plans-title'>{title}</p>
                <p className='plans-amount'>{amount}</p>
                <p className='plans-promo'>{promo}</p>
                <p style={{ display: 'none' }}>{type}</p>
            </div>

        </div>
    );
};


const PlansForm: React.FC<FormProps> = ({ onSubmit, onBack }) => {
    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const [selectedPlanIndex, setSelectedPlanIndex] = useState<number | null>(null);

    const [errors, setErrors] = useState({
        plan: '',
    });


    const handleBack = () => {
        onBack();
    }

    const handleSwitch = () => {
        setIsSwitchOn((prevValue) => {
            const newValue = !prevValue;
            sessionStorage.setItem('isSwitchOn', JSON.stringify(newValue));
            return newValue;
        });
    };


    const handleCardSelect = (planIndex: number) => {
        setSelectedPlanIndex(planIndex);
        setErrors({ plan: '' })
    };

    const selectedPlan = selectedPlanIndex !== null ? planOptions[selectedPlanIndex] : null;

    const selectionValues = {
        title: selectedPlan?.title,
        amount: isSwitchOn ? selectedPlan?.amountYearly : selectedPlan?.amountMonthly,
        billingType: isSwitchOn ? 'Yearly' : 'Monthly',
    }

    const validateInputs = () => {
        let validationPassed = true;
        const newErrors = { plan: '' };

        if (selectedPlan === null) {
            newErrors['plan'] = 'Plan is required';
            validationPassed = false;
        }

        setErrors(newErrors);
        return validationPassed;
    }

    useEffect(() => {
        const storedSwitchState = sessionStorage.getItem('isSwitchOn');
        const storedPlanIndex = sessionStorage.getItem('selectedPlanIndex');

        if (storedSwitchState !== null) {
            setIsSwitchOn(JSON.parse(storedSwitchState));
        }
        if (storedPlanIndex !== null) {
            setSelectedPlanIndex(JSON.parse(storedPlanIndex));
        }
    }, []);

    // Save state changes to session storage
    useEffect(() => {
        sessionStorage.setItem('isSwitchOn', JSON.stringify(isSwitchOn));
        sessionStorage.setItem('selectedPlanIndex', JSON.stringify(selectedPlanIndex));
    }, [isSwitchOn, selectedPlanIndex]);

    const handleSubmit = (selectionValues: any) => {
        // onSubmit(selectionValues);

        if (validateInputs()) {
            onSubmit(selectionValues);
        }
    };


    return (
        <div className='app__info-form'>
            <form className='form'>
                <Header headerText="Select your Plan" subtitleText="You have the option of monthly or yearly billing." />
                <div className='plans-container'>
                    {
                        planOptions.map((plan, index) => (
                            <div key={plan.id} className={selectedPlanIndex === index ? 'plans-active' : 'plans'}>
                                <PlanCards
                                    key={plan.id}
                                    title={plan.title}
                                    image={plan.image}
                                    amount={isSwitchOn ? plan.amountYearly : plan.amountMonthly}
                                    promo={isSwitchOn ? plan.promo : ''}
                                    type={isSwitchOn ? 'Yearly' : 'Monthly'}
                                    onSelect={() => handleCardSelect(index)}
                                    isSelected={selectedPlanIndex === index}
                                />
                            </div>
                        ))
                    }
                </div>

                <div className='billing-type-container'>
                    <span className={isSwitchOn ? 'duration' : 'duration-active'}>Monthly</span>
                    <Switch className="switch" onChange={handleSwitch} isChecked={isSwitchOn} />
                    <span className={isSwitchOn ? 'duration-active' : 'duration'}>Yearly</span>
                </div>

                {errors.plan && <p className="error-message">{errors.plan}</p>}

            </form>

            <div className='app__form-buttons'>
                <span onClick={() => handleBack()}>Go Back</span>
                <button type='submit' onClick={() => handleSubmit(selectionValues)}>Next Step</button>
            </div>
        </div>
    )
}

export default PlansForm;