import React, { ChangeEvent, useState } from 'react';
import Header from '../header';
import { Switch } from '@chakra-ui/react'

interface FormData {
    arcade: string;
    advanced: string;
    pro: string;
}

interface PlansProps {
    title: string;
    amount: string;
    onSelect: () => void;
    isSelected: boolean;
    type: string;
}

interface FormProps {
    onSubmit: () => void;
    onBack: () => void;
}


const PlanCards: React.FC<PlansProps> = ({
    title,
    amount,
    onSelect,
    isSelected,
}) => {
    return (
        <div>
            <p>Arcade</p>
        </div>
    );
};

//   export default PlanCards;



const PlansForm: React.FC<FormProps> = ({ onSubmit, onBack }) => {
    const [formData, setFormData] = useState<FormData>({ arcade: '', advanced: '', pro: '' });

    const handleBack = () => {
        console.log('I have been clicked');
        onBack();
    }

    const handleSubmit = (values: FormData) => {
        const {
            arcade,
            advanced,
            pro
        } = values;

        onSubmit();
    };


    return (
        <div className='app__info-form'>
            <form className='form'>
                <Header headerText="Select your Plan" subtitleText="You have the option of monthly or yearly billing." />

                <div className='billing-type-container'>
                    <span>Monthly</span>
                    <Switch id="billing-type" colorScheme='teal' />
                    <span>Yearly</span>
                </div>


            </form>

            <div className='app__form-buttons'>
                <span onClick={() => handleBack()}>Go Back</span>
                <button type='submit' onClick={() => handleSubmit(formData)}>Next Step</button>
            </div>
        </div>
    )
}

export default PlansForm;