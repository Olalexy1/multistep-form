import React, { useState } from 'react';
import Header from '../header';

interface FormData {
    
}

interface FormProps {
    onSubmit: () => void;
    onBack: () => void;
}

const AddOnsForm: React.FC<FormProps> = ({ onSubmit, onBack }) => {
    const [formData, setFormData] = useState<FormData>({  });

    const handleBack = () => {
        console.log('I have been clicked');
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
                <Header headerText="Pick add-ons" subtitleText="Add-ons help enhance your gaming experience." />

                <div className='check-container'>
                    <div>
                        <span>
                            <input type='checkbox'/>
                        </span>
                        <div>
                            <p>Online Service</p>
                            <p> Access to multiplayer games</p>
                        </div>
                        <span>
                            +$1/mo
                        </span>
                    </div>
                    <div>
                        
                    </div>
                    <div>
                        
                    </div>
                </div>


            </form>

            <div className='app__form-buttons'>
                <span onClick={() => handleBack()}>Go Back</span>
                <button type='submit' onClick={() => handleSubmit(formData)}>Next Step</button>
            </div>
        </div>
    )
}

export default AddOnsForm;