import React from 'react';
import Link from 'next/link';

import { EarringIcon } from '@/public/assets/svges/EarringIcon';
import { MailIcon } from '@/public/assets/svges/MailIcon';

import classes from './index.module.css';

const NavBar = () => {

    const links = [
        {
            text: 'Quote',
            link: "/quote"
        },
        {
            text: 'FAQs',
            link: "/faqs"
        },
        {
            text: 'Contact Us',
            link: "/contactUs"
        }
    ];

    return (
        <header className={classes.header}>
            <div className={classes.phoneNumber}>
                <EarringIcon />
                <a href="tel:+1234567890"> ( 380 ) 867 - 0547</a>
            </div>
            <nav className={classes.navBar}>
                { links.map(({ link, text }, index) => (
                    <Link
                        className={classes.link}
                        href={link}
                        key={index}
                    >{text}</Link>
                ))}
            </nav>
            <div className={classes.mail}>
                <MailIcon />
                <p>info@columbusautotransport.com</p>
            </div>
        </header>
    );
};

export { NavBar }