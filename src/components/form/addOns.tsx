import React, { useState } from 'react';
import Header from '../header';

interface AddonOption {
    id: number;
    title: string;
    subtitle: string;
    amount: string;
    value: number;
}

interface FormProps {
    // onSubmit: () => void;
    onSubmit: (selectedAddons: AddonOption[]) => void;
    onBack: () => void;
}

const addOnsOptions: AddonOption[] = [
    {
        id: 1,
        title: 'Online Service',
        subtitle: 'Access to multiplayer games',
        amount: '+$1/mo',
        value: 1,
    },
    {
        id: 2,
        title: 'Large Storage',
        subtitle: 'Extra 1Tb of cloud storage',
        amount: '+$2/mo',
        value: 2,
    },
    {
        id: 3,
        title: 'Customizable profile',
        subtitle: 'custom theme on your profile',
        amount: '+$2/mo',
        value: 2,
    }
];

const AddOnsForm: React.FC<FormProps> = ({ onSubmit, onBack }) => {
    const [selectedAddons, setSelectedAddons] = useState<AddonOption[]>([]);
    // const [isChecked, setIsChecked] = useState(false);

    const handleBack = () => {
        onBack();
    }

    const handleSubmit = (values: AddonOption[]) => {
        onSubmit(selectedAddons);
        console.log('I have been submitted')
    };

    const handleToggleAddon = (addon: AddonOption) => {
        setSelectedAddons(prevSelectedAddons => {
            if (prevSelectedAddons.some(a => a.id === addon.id)) {
                console.log('I am removed')
                return prevSelectedAddons.filter(a => a.id !== addon.id);
            } else {
                console.log('I am added')
                return [...prevSelectedAddons, addon];
            }
        });
    };


    return (
        <div className='app__info-form'>
            <form className='form'>
                <Header headerText="Pick add-ons" subtitleText="Add-ons help enhance your gaming experience." />

                <div className='addons-container'>
                    {
                        addOnsOptions.map((addon) => (
                            <div
                                className={`addons ${selectedAddons.some(a => a.id === addon.id) ? 'addons-active' : ''}`}
                                key={addon.id}>
                                <div className='addons-inner-left'>
                                    <div>
                                        <input type='checkbox' onChange={() => handleToggleAddon(addon)}
                                            checked={selectedAddons.some(a => a.id === addon.id)}
                                        />
                                    </div>
                                    <div className='addon-text-container'>
                                        <p className='addon-text'>{addon.title}</p>
                                        <p className='addon-subtext'>{addon.subtitle}</p>
                                    </div>
                                </div>
                                <div>
                                    <p className='addon-amountText'>{addon.amount}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>


            </form>

            <div className='app__form-buttons'>
                <span onClick={() => handleBack()}>Go Back</span>
                <button type='submit' onClick={() => handleSubmit(selectedAddons)}>Next Step</button>
            </div>
        </div>
    )
}

export default AddOnsForm;