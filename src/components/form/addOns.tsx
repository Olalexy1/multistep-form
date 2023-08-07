import React, { useEffect, useState } from 'react';
import Header from '../header';

interface AddonOption {
    id: number;
    title: string;
    subtitle: string;
    amountMonthly: string;
    amountYearly: string;
}

interface FormProps {
    onSubmit: (summary: any) => void;
    onBack: () => void;
    selectionValues: any;
}

const addOnsOptions: AddonOption[] = [
    {
        id: 1,
        title: 'Online Service',
        subtitle: 'Access to multiplayer games',
        amountMonthly: '+$1/mo',
        amountYearly: '+$10/yr',
    },
    {
        id: 2,
        title: 'Large Storage',
        subtitle: 'Extra 1Tb of cloud storage',
        amountMonthly: '+$1/mo',
        amountYearly: '+$10/yr',
    },
    {
        id: 3,
        title: 'Customizable profile',
        subtitle: 'custom theme on your profile',
        amountMonthly: '+$2/mo',
        amountYearly: '+$20/yr',
    }
];

const AddOnsForm: React.FC<FormProps> = ({ onSubmit, onBack, selectionValues }) => {
    const [selectedAddons, setSelectedAddons] = useState<AddonOption[]>([]);

    const handleBack = () => {
        onBack();
    }

    const handleSubmit = (summary: any) => {
        onSubmit(summary);
    };

    useEffect(() => {
        const storedSelectedAddons = sessionStorage.getItem('selectedAddons');
        if (storedSelectedAddons) {
            setSelectedAddons(JSON.parse(storedSelectedAddons));
        }
    }, []);

    const handleToggleAddon = (addon: AddonOption) => {
        setSelectedAddons(prevSelectedAddons => {
            const updatedAddons = prevSelectedAddons.some(a => a.id === addon.id)
                ? prevSelectedAddons.filter(a => a.id !== addon.id)
                : [...prevSelectedAddons, addon];
    
            sessionStorage.setItem('selectedAddons', JSON.stringify(updatedAddons));
            return updatedAddons;
        });
    };
    

    const billingType = selectionValues.billingType;
    const title = selectionValues.title;
    const planAmount = selectionValues.amount;

    const summary = {
        billingType : billingType,
        selectedPlan: title,
        amount: planAmount,
        selectedAddons,
    }

    return (
        <div className='app__info-form'>
            <form className='form'>
                <Header headerText="Pick add-ons" subtitleText="Add-ons help enhance your gaming experience." />

                <div className='addons-container'>
                    {
                        addOnsOptions.map((addon) => (
                            <div
                                className={`addons ${selectedAddons.some(a => a.id === addon.id) ? 'addons-active' : ''}`}
                                key={addon.id}
                                // onClick={() => handleToggleAddon(addon)}
                                >
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
                                    <p className='addon-amountText'>{billingType === 'Yearly' ? addon.amountYearly : addon.amountMonthly}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </form>

            <div className='app__form-buttons'>
                <span onClick={() => handleBack()}>Go Back</span>
                <button type='submit' onClick={() => handleSubmit(summary)}>Next Step</button>
            </div>
        </div>
    )
}

export default AddOnsForm;