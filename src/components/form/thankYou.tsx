import React from 'react';
import { images } from '@/util';
import Image from "next/image";

const ThankYou = () => {
    return (
        <div className='app__info-form'>
            <div className='thanks'>
                <Image src={images.thankYou} alt="Thank You"/>
                <h3>Thank you!</h3>
                <p>Thanks for confirming your subscription! We hope you have fun using our platform, if you ever need support, please feel free to email us at support@loremgaming.com</p>
            </div>
        </div>
    )
}
export default ThankYou;