import { Container } from '@/components/ui/container';
import { Polygon } from '@/public/assets/svges/Polygon';
import { YouTubeIcon } from '@/public/assets/svges/YouTubeIcon';
import { Video } from './Video';
import { Fade } from 'react-reveal';

import classes from './index.module.css';

const AboutCompany = () => {

    return (
        <section className={classes.aboutCompanySection}>
            <Container>
                <h2 className={classes.subTitle}>
                    You can trust your auto shipping to Us
                </h2>
                <div className={classes.wrapperSections}>
                    <Fade left>
                        <div className={classes.video}>
                            <Video url='https://www.w3schools.com/html/mov_bbb.mp4'/>
                        </div>
                    </Fade>
                    <Fade right>
                        <div className={classes.seccondSection}>
                            <div className={classes.contentAboutCompany}>
                                <p>The company has shipped over 100000 vehicles nationwide since its establishment.Within a decade, we have striven to keep pace of the market trends and requirements.</p>
                                <p>The customer’s needs were number one priority for us. Our customer base consists of loyal and new customers who trust us based on our success and referrals.</p>
                            </div>
                            <div className={classes.contentAboutSubscibe}>
                                <i className={classes.firstPolygon}>
                                    <Polygon />
                                </i>
                                <p>
                                    <Polygon rotate={-90}/>
                                    <span><span className={classes.red}>Don’t</span> Forget to <span className={classes.red}>Like and</span> Subscribe.</span>
                                    <Polygon rotate={-70} />
                                </p>
                                <div className={classes.wrapperLink}>
                                    <a className={classes.linkToYouTube}>
                                        <YouTubeIcon />
                                        <span>SUBSCRIBE</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
            </Container>
        </section>
    );
};

export { AboutCompany };