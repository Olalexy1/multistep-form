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



const PlansForm: React.FC<FormProps> = ({ onSubmit }) => {
    // const [formData, setFormData] = useState<FormData>({ name: '', email: '', phoneNumber: '' });
    // const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    // const [isFocused, setIsFocused] = useState({
    //     nameInput: false,
    //     emailInput: false,
    //     phoneInput: false
    // });

    // const { name, email, phoneNumber } = formData;

    // const handleChangeInput = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    //     const { name, value } = e.target;
    //     setFormData({ ...formData, [name]: value });
    // };

    // const handleFocus = (inputName: any) => {
    //     setIsFocused(prevState => ({
    //         ...prevState,
    //         [inputName]: true
    //     }));
    // };

    // const handleBlur = (inputName: any) => {
    //     setIsFocused(prevState => ({
    //         ...prevState,
    //         [inputName]: false
    //     }));
    // };

    return (
        <div className='app__info-form'>
            <form className='form'>
                <Header headerText="Select your Plan" subtitleText="You have the option of monthly or yearly billing." />

                <div className='billing-type-container'>
                    <span>Monthly</span>
                    <Switch id="billing-type" colorScheme='teal'/>
                    <span>Yearly</span>
                </div>


            </form>

            <div className='app__form-buttons'>
                <span>Go Back</span>
                <button>Next Step</button>
            </div>
        </div>
    )
}

export default PlansForm;