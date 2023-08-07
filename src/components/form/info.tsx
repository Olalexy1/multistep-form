import React, { ChangeEvent, useEffect, useState } from 'react';
import Header from '../header';
import { validateEmail } from '@/util';

interface FormData {
    name: string;
    email: string;
    phoneNumber: string;
}

interface FormProps {
    onSubmit: () => void;
}

const InfoForm: React.FC<FormProps> = ({ onSubmit }) => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phoneNumber: ''
    });

    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const [isFocused, setIsFocused] = useState({
        nameInput: false,
        emailInput: false,
        phoneInput: false
    });

    const { name, email, phoneNumber } = formData;

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phoneNumber: ''
    });

    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
        setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
    };

    const handleFocus = (inputName: string) => {
        setIsFocused(prevState => ({
            ...prevState,
            [inputName]: true
        }));
    };

    const handleBlur = (inputName: string) => {
        setIsFocused(prevState => ({
            ...prevState,
            [inputName]: false
        }));
    };

    const validateInputs = () => {
        let validationPassed = true;
        const newErrors = { name: '', email: '', phoneNumber: '' };

        if (!name.trim()) {
            newErrors.name = 'Name is required';
            validationPassed = false;
        }

        if (!email.trim()) {
            newErrors.email = 'Email is required';
            validationPassed = false;
        } else if (!validateEmail(email)) {
            newErrors.email = 'Invalid email format';
            validationPassed = false;
        }

        if (!phoneNumber.trim()) {
            newErrors.phoneNumber = 'Phone number is required';
            validationPassed = false;
        }

        setErrors(newErrors);
        return validationPassed;
    };

    useEffect(() => {
        const storedFormData = sessionStorage.getItem('formData');
        if (storedFormData) {
            setFormData(JSON.parse(storedFormData));
        }
    }, []);

    useEffect(() => {
        sessionStorage.setItem('formData', JSON.stringify(formData));
    }, [formData]);

    const handleSubmit = () => {
        if (validateInputs()) {
            onSubmit();
        }
    };

    return (
        <div className='app__info-form'>
            <form className='form'>
                <Header headerText="Personal info" subtitleText="Please provide your name, email address and phone number." />
                <div>
                    <div className='form-control'>
                        <label htmlFor='name'>Name</label>
                        {errors.name && <p className="error-message">{errors.name}</p>}
                    </div>
                    <input
                        className=""
                        id="name"
                        type="text"
                        placeholder={isFocused.nameInput ? '' : 'e.g. Stephen King'}
                        name="name"
                        value={name}
                        onChange={handleChangeInput}
                        onFocus={() => handleFocus('nameInput')}
                        onBlur={() => handleBlur('nameInput')}
                        required />
                </div>

                <div>
                    <div className='form-control'>
                        <label htmlFor='email'>Email Address</label>
                        {errors.email && <p className="error-message">{errors.email}</p>}
                    </div>
                    <input
                        className=""
                        id="email"
                        type="email"
                        placeholder={isFocused.emailInput ? '' : 'e.g. stephenking@lorem.com'}
                        name="email"
                        value={email}
                        onChange={handleChangeInput}
                        onFocus={() => handleFocus('emailInput')}
                        onBlur={() => handleBlur('emailInput')}
                        required />
                </div>

                <div>
                    <div className='form-control'>
                        <label htmlFor='phone'>Phone Number</label>
                        {errors.phoneNumber && <p className="error-message">{errors.phoneNumber}</p>}
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
                        onFocus={() => handleFocus('phoneInput')}
                        onBlur={() => handleBlur('phoneInput')}
                        required />
                </div>
            </form>

            <div className='app__form-buttons'>
                <span style={{ visibility: 'hidden' }}>Go Back</span>
                <button type='button' onClick={handleSubmit}>Next Step</button>
            </div>
        </div>
    );
}

export default InfoForm;
