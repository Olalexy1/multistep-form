import React, { ChangeEvent, useState } from 'react';
import Header from '../header';

interface FormData {
    name: string;
    email: string;
    phoneNumber: string;
}

const InfoForm = () => {
    const [formData, setFormData] = useState<FormData>({ name: '', email: '', phoneNumber: '' });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [isFocused, setIsFocused] = useState({
        nameInput: false,
        emailInput: false,
        phoneInput: false
    });

    const { name, email, phoneNumber } = formData;

    const handleChangeInput = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFocus = (inputName: any) => {
        setIsFocused(prevState => ({
            ...prevState,
            [inputName]: true
        }));
    };

    const handleBlur = (inputName: any) => {
        setIsFocused(prevState => ({
            ...prevState,
            [inputName]: false
        }));
    };

    return (
        <div className='app__info-form'>
            <Header headerText="Personal Info" subtitleText="Please provide your name, email address and phone number" />
            <form className='form'>
                <div className='form-control'>
                    <label htmlFor='name'>Name</label>
                    <span></span>
                </div>
                <input
                    className=""
                    id="name"
                    type="text"
                    placeholder={isFocused.nameInput ? '' : 'e.g Stephen King'}
                    name="name"
                    value={name}
                    onChange={handleChangeInput}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    required />
            </form>
        </div>
    )
}

export default InfoForm;