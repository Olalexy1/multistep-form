import images from './images';

const FormNavigator = [
    {
        id: 1,
        title: 'Step 1',
        subtitle: 'Your Info',
        button: 'Next Step',
    },

    {
        id: 2,
        title: 'Step 2',
        subtitle: 'Select Plan',
        button: 'Next Step',
    },

    {
        id: 3,
        title: 'Step 3',
        subtitle: 'Add-Ons',
        button: 'Confirm',
    },
    {
        id: 4,
        title: 'Step 4',
        subtitle: 'Summary',
        button: 'Confirm',
    }
];

const validateEmail = (email: string) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export { images, FormNavigator, validateEmail };