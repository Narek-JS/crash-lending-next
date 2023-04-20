import { linksGroup } from '@/constants/options';
import { CloseIcon } from '@/public/assets/svges/CloseIcon';
import Link from 'next/link';
import Image from 'next/image';
import classes from './index.module.css';
import { useContext, useLayoutEffect, useState } from 'react';
import { SidebarContext } from '@/context/sideBar';
import { useAnimation } from '@/hooks/useAnimation';
import { AuthAnimationOptions, AuthAnimations, SideBarAnimations } from '@/constants/animation';

const Burger: React.FC<any> = () => {

    const { openSidebar } = useContext(SidebarContext);

    return (
        <div className={classes.bugreg} onClick={openSidebar}>
            <span className={classes.row} />
            <span className={classes.row} />
            <span className={classes.row} />
        </div>
    );
};

const SideBar: React.FC<any> = () => {
    const { closeSidebar, isOpen } = useContext(SidebarContext);
    const [ animationDivRef, animate ] = useAnimation<HTMLDivElement>(AuthAnimationOptions);
     
    useLayoutEffect(() => {
        animate(SideBarAnimations.fromLeft);
    }, []);

    const closeBarAnimation = () => {
        animate(SideBarAnimations.toLeft, () => {
            closeSidebar();  
        });
    };

    if(!isOpen) return null;

    return (
        <div className={classes.sideBar} ref={animationDivRef}>
            <div className={classes.closeBtn} onClick={closeBarAnimation}>
                <CloseIcon />
            </div>
            { linksGroup.map((linkGroup, index) => (
                <div className={classes.linkGroup} key={index}>
                    <h3 className={classes.groupName}>{linkGroup.groupName}</h3>
                    { linkGroup.links.slice(1, linkGroup.links.length).map((link, index) => (
                        <li key={index} className={classes.link}>
                            {link.link ? (
                                <Link
                                    href={link.link}
                                >{link.text}</Link>
                            ) : (
                                <p>{link.text}</p>
                            )}
                        </li>
                    ))}
                </div>
            ))}
             <div className={classes.logo}>
                <Image
                    src="/assets/images/logo.png"
                    alt="hero background image"
                    className="dark:invert"
                    priority
                    width={130}
                    height={95}
                />
            </div>
        </div>
    );
};

export { SideBar, Burger }