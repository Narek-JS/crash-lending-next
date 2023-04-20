import { Container } from '@/components/ui/container';
import { StarIcon } from '@/public/assets/svges/StarIcon';
import useWindowSize from '@/hooks/useWindowSize';
import Fade from 'react-reveal';

import classes from './index.module.css';

const presentation = [
    {
        id: 1,
        percent: 7
    },
    {
        id: 2,
        percent: 0
    },
    {
        id: 3,
        percent: 6
    },
    {
        id: 4,
        percent: 9
    },
    {
        id: 5,
        percent: 177
    }
];

const Review = () => {
    const { width } = useWindowSize();
    return (
        <section className={classes.reviewSection}>
            <Container>
                <h2 className={classes.subTitle}>You can trust Us</h2>
                <div className={classes.reviewContent}>
                    <Fade left>
                        <div className={classes.descriptionWrapper}>
                            <h3 className={classes.titleOfDescription}>Columbus Auto Transport Review</h3>
                            <p className={classes.description}>Lorem ipsum dolor sit amet consectetur. Cursus tortor amet porta condimentum auctor curabitur et. Ipsum hac vitae urna egestas vitae eget. Cursus tortor amet porta condimentum auctor curabitur et. Ipsum hac vitae urna egestas vitae eget.Cursus tortor amet porta</p>
                        </div>
                    </Fade>
                    <div className={classes.reviewContentSecondeBlock}>
                        <Fade bottom>
                            <div className={classes.estimate} >
                                <p className={classes.estimateDiscuss}>4.8 / 5</p>
                                <p className={classes.wrapperStars}>{ new Array(5).fill(1).map((_, i) => (
                                    <StarIcon key={i}/>
                                    ))}</p>
                                <p className={classes.reviewQuantity}>199 Review</p>
                            </div>
                        </Fade>
                        { Boolean(Number(width) > 1024) && (
                            <Fade bottom>
                                <div className={classes.presentation}>
                                    { presentation.sort((a, b) => b.id - a.id).map(({ id, percent }) => (
                                        <div className={classes.percentList} key={id}>
                                            <span className={classes.percentId}>{id}</span>
                                            <StarIcon />
                                            <div className={classes.percentWrapper}>
                                                <span
                                                    className={classes.percentActive}
                                                    style={{width: `${percent * 100 / 200}%`}}
                                                />
                                            </div>
                                            <span className={classes.row}>|</span>
                                            <span className={classes.percent}>{percent}</span>
                                        </div>
                                    ))}
                                </div>
                            </Fade>
                        )}
                        <Fade right>
                            <div className={classes.buttons}>
                                <button className={classes.feedbackBtn}>Give us your feedback</button>
                                <button className={classes.readmoreBtn}>Read More</button>
                            </div>
                        </Fade>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export { Review };

// star