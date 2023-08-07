import React, { useState } from 'react';
import Header from '../header';

interface FormData {

}
interface FormProps {
    onSubmit: () => void;
    onBack: () => void;
}

const Summary: React.FC<FormProps> = ({ onSubmit, onBack }) => {
    const [formData, setFormData] = useState<FormData>({});

    const handleBack = () => {
        onBack();
    }

    const handleSubmit = (values: FormData) => {
        const {

        } = values;

        onSubmit();
    };


    return (
        <div className='app__info-form'>
            <form className='form'>
                <Header headerText="Finishing up" subtitleText="Double check everything looks Ok before confirming." />

                <div className='summary-container'>
                    <div className='summary-title-container'>
                        <div>
                            <p>Arcade (Monthly)</p>
                            <a className="subtitle-Text" style={{ textDecoration: 'underline' }} href="#">Change</a>
                        </div>
                        <span>
                            $9/mo
                        </span>
                    </div>
                    <div className='divider' />
                    <div>

                    </div>
                </div>
                <div className='summary-total-container'>
                    <p className='subtitle-Text'>Total (per Month)</p>
                    <span className='summary-amountText'>+$12/mo</span>
                </div>

            </form>

            <div className='app__form-buttons'>
                <span onClick={() => handleBack()}>Go Back</span>
                <button type='submit' onClick={() => handleSubmit(formData)}>Confirm</button>
            </div>
        </div>
    )
}

export default Summary;