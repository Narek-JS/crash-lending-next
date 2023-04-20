import Image from "next/image";
import { Container } from '@/components/ui/container';
import Fade from 'react-reveal';

import classes from './index.module.css';

const AboutTransport: React.FC<any> = () => {
    
    return (
        <section className={classes.aboutTransportSection}>
            <Container>
                <div className={classes.wrapperSections}>
                    <Fade left>
                        <div className={classes.transportContent}>
                            <h3 className={classes.subLink}>About Us</h3>
                            <h2 className={classes.subTitle}>Columbus Auto Transport</h2>
                            <p className={classes.firstDescription}>Columbus Auto Transport has been operating in the auto transport industry for over a decade. The company has been shipping vehicles nationwide, including Hawaii and Alaska.</p>
                            <p className={classes.seccondDescription}>The wide range of the services, as well as the professional team and facilities, position our company as a trustworthy and reliable partner.</p>
                        </div>
                    </Fade>
                    <Fade right>
                        <div className={classes.images}>
                            <Image
                                src="/assets/images/big-truck.png"
                                alt="big truck image"
                                className={classes.imageBigTruck}
                                priority
                                width={999}
                                height={999}
                            />
                            <Image
                                src="/assets/images/worksTeam.png"
                                alt="works Team image"
                                className={classes.worksTeam}
                                priority
                                width={9999}
                                height={9999}
                            />
                        </div>
                    </Fade>

                </div>
            </Container>
        </section>
    );
};

export { AboutTransport };