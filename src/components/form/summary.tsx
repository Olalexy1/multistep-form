import React, { useState } from 'react';
import Header from '../header';

interface FormData {
    
}
interface FormProps {
    onSubmit: () => void;
    onBack: () => void;
}

const Summary: React.FC<FormProps> = ({ onSubmit, onBack }) => {
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
                <Header headerText="Finishing up" subtitleText="Double check everything looks Ok before confirming." />

                <div className='summary-container'>
                    <div>
                        <div>
                            <p>Arcade (Monthly)</p>
                            <p> Access to multiplayer games</p>
                        </div>
                        <span>
                            +$1/mo
                        </span>
                    </div>
                    <div/>
                    <div>
                        
                    </div>
                    <div>
                        
                    </div>
                </div>
                <div>
                    <p>Total (per Month)</p>
                    <p>+$12/mo</p>
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