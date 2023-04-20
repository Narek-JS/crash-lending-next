import { Container } from '@/components/ui/container';
import { contactInfo, linksGroup } from '@/constants/options';
import classes from './index.module.css';
import Image from 'next/image';
import Link from 'next/link';
import useWindowSize from '@/hooks/useWindowSize';
import classNames from 'classnames';

const Footer: React.FC<any> = () => {
    const { width } = useWindowSize();
    return (
        <footer className={classes.footer}>
            <Container>
                <div className={classNames(classes.footerContent, {
                    [classes.footerContentMobile]: Boolean(Number(width) < 1024)
                })}>
                    { Boolean(Number(width) < 1024) && (
                        <div className={classes.linkGroup}>
                            <h3 className={classes.groupName}>{contactInfo.groupName}</h3>
                            { contactInfo.links.map((link, index) => (
                                <li key={index} className={classes.link}>
                                    <p>{link.text}</p>
                                </li>
                            ))}
                        </div>
                    )}
                    <Image
                        src="/assets/images/logo.png"
                        alt="logo"
                        className={classes.logo}
                        priority
                        width={130}
                        height={95}
                    />
                    {Boolean(Number(width) > 1024) && linksGroup.map((linkGroup, index) => (
                        <div className={classes.linkGroup} key={index}>
                            <h3 className={classes.groupName}>{linkGroup.groupName}</h3>
                            { linkGroup.links.map((link, index) => (
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
                </div>
            </Container>
        </footer>
    );
};

export { Footer };