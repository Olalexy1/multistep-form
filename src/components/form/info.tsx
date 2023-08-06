import React, { ChangeEvent, useState } from 'react';
import Header from '../header';

interface FormData {
    name: string;
    email: string;
    phoneNumber: string;
}

interface FormProps {
    onSubmit: () => void;
}

const InfoForm: React.FC<FormProps> = ({ onSubmit }) => {
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

    const handleSubmit = (values: FormData) => {
        const {
            name,
            email,
            phoneNumber
        } = values;

        console.log('I have been clicked')

        onSubmit();
    };

    return (
        <div className='app__info-form'>
            <form className='form'>
                <Header headerText="Personal info" subtitleText="Please provide your name, email address and phone number." />
                <div>
                    <div className='form-control'>
                        <label htmlFor='name'>Name</label>
                        <span></span>
                    </div>
                    <input
                        className=""
                        id="name"
                        type="text"
                        placeholder={isFocused.nameInput ? '' : 'e.g. Stephen King'}
                        name="name"
                        value={name}
                        onChange={handleChangeInput}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        required />
                </div>

                <div>
                    <div className='form-control'>
                        <label htmlFor='email'>Email Address</label>
                        <span></span>
                    </div>
                    <input
                        className=""
                        id="email"
                        type="email"
                        placeholder={isFocused.emailInput ? '' : 'e.g. stephenking@lorem.com'}
                        name="email"
                        value={email}
                        onChange={handleChangeInput}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        required />
                </div>

                <div>
                    <div className='form-control'>
                        <label htmlFor='phone'>Phone Number</label>
                        <span></span>
                    </div>
                    <input
                        className=""
                        id="phone"
                        type="tel"
                        placeholder={isFocused.phoneInput ? '' : 'e.g +234 818 839 4639'}
                        pattern="\+\d{3}\s\d{3}\s\d{3}\s\d{4}"
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={handleChangeInput}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        required />
                </div>

            </form>

            <div className='app__form-buttons'>
                <span style={{visibility: 'hidden'}}>Go Back</span>
                <button type='submit' onClick={() => handleSubmit(formData)}>Next Step</button>
            </div>
        </div>
    )
}

export default InfoForm;