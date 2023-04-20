import { Container } from '@/components/ui/container';
import Link from 'next/link';
import Image from 'next/image';
import Fade from 'react-reveal';

import classes from './index.module.css';

const servicesTypes = [
    {
        title: 'Open Car Transport',
        description: 'The most popular method of auto transport is Open Car Moving.',
        link: 'https://dev.ifta.online/',
        imagePath: '/assets/images/crashCarIcon.png'
    },
    {
        title: 'Enclosed Car Transport',
        description: 'Enclosed car shipping is reserved for exotic or luxury automobiles.',
        link: 'https://dev.ifta.online/',
        imagePath: '/assets/images/takeCarIcon.png'
    },
    {
        title: 'Exotic Vehicle Shipping',
        description: 'Exotic vehicle shipping ensures your beloved car avoids any possible damage.',
        link: 'https://dev.ifta.online/',
        imagePath: '/assets/images/exoticCarIcon.png'
    },
    {
        title: 'Door to Door Car Transport',
        description: 'Washington DC Auto Transport’s standard shipping option is the door to door option.',
        link: 'https://dev.ifta.online/',
        imagePath: '/assets/images/doortoDoorIcon.png'
    },
];

const Services: React.FC<any> = () => {

    return (
        <section className={classes.servicesSection}>
            <Container>
                <div className={classes.wrapperServices}>
                    <div className={classes.descriptionWrapper}>
                        <h2 className={classes.subTitle}>Safe, Fast and Affordable</h2>
                        <div className={classes.description}>
                            <p>Auto shipping with Columbus Auto Transport is easy and fast. We have simplified the process to enhance your shipping experience.</p>
                            <p>Our prices are affordable and competitive in the market. The total cost of the shipment is generated based on several factors, such as the</p>
                            <p>the size, make, model and the year of your vehicle, type of the trailer, the route, location and seasonal fluctuations, and the condition of the car (running/non-running).</p>
                            <p>Once you book the shipping, you can be safe the car will be delivered to its destination safe and sound.</p>
                        </div>
                    </div>
                    <div className={classes.wrapperBlocks}>
                        <div className={classes.twoServiceBlock}>
                            { servicesTypes.slice(0, 2).map((service, index) => (
                                <Fade bottom key={index}>
                                    <div className={classes.serviceBlock}>
                                        <h4 className={classes.serviceTitle}>{service.title}</h4>
                                        <p className={classes.serviceDescription}>{service.description}</p>
                                        <div className={classes.wrapperLink}>
                                            <Link href={service.link} className={classes.serviceLink}>Read More</Link>
                                            <div className={classes.wrapperCarImg}>
                                                <Image
                                                    src={service.imagePath}
                                                    alt="hero background image"
                                                    className="dark:invert"
                                                    priority
                                                    width={100}
                                                    height={60}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </Fade>
                            ))}
                        </div>
                        <div className={classes.twoServiceBlock}>
                            { servicesTypes.slice(2, servicesTypes.length).map((service, index) => (
                                <Fade bottom key={index}>
                                    <div className={classes.serviceBlock}>
                                        <h4 className={classes.serviceTitle}>{service.title}</h4>
                                        <p className={classes.serviceDescription}>{service.description}</p>
                                        <div className={classes.wrapperLink}>
                                            <Link href={service.link} className={classes.serviceLink}>Read More</Link>
                                            <div className={classes.wrapperCarImg}>
                                                <Image
                                                    src={service.imagePath}
                                                    alt="hero background image"
                                                    className="dark:invert"
                                                    priority
                                                    width={100}
                                                    height={60}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </Fade>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export { Services };