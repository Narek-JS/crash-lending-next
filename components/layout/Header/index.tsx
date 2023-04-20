import { useEffect, useRef } from 'react';
import { Container } from '@/components/ui/container';
import { SearchIcon } from '@/public/assets/svges/SearchIcon';
import { informationBarLinks } from '@/constants/options';
import { useAnimation } from '@/hooks/useAnimation';
import { AuthAnimationOptions, HeaderAnimations } from '@/constants/animation';
import useWindowSize from '@/hooks/useWindowSize';
import Dropdown from '@/components/ui/Dropdown';
import Image from 'next/image';
import classes from './index.module.css';
import { Burger } from '../SideBar';

const Header: React.FC<any> = () => {
    const [ animationDivRef, animate ] = useAnimation<HTMLHeadElement>(AuthAnimationOptions);
    const { width } = useWindowSize();
    const isOpen = useRef<Boolean>(false);

    useEffect(() => {
        const listenScroll = () => {
            if(Number(width) > 768) {
                if (window.pageYOffset >= 300 && isOpen.current === false) {
                    animate(HeaderAnimations.fromTop);
                    isOpen.current = true;
                } else if (window.pageYOffset < 300 && isOpen.current === true) {
                    isOpen.current = false;
                    animate(HeaderAnimations.toTop);
                };
            }
        }
        window.addEventListener('scroll', listenScroll);

        return () => removeEventListener('scroll', listenScroll);
    }, []);

    return (
        <header className={classes.header} ref={animationDivRef}>
            <Container>
                <div className={classes.informationBar}>
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
                    {Number(width) > 768 && <div className={classes.menuSelects}>
                        { informationBarLinks.map(({ label, items }, index) => (
                            <Dropdown label={label} items={items} key={index}/>
                        ))}
                    </div>}
                    <div className={classes.seaech}>
                        <SearchIcon />
                    </div>
                    {Number(width) < 768 && <Burger />}
                </div>
            </Container>


        </header>
    );
};

export { Header };