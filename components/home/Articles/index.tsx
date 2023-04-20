import { Container } from '@/components/ui/container';
import Image from 'next/image';
import Fade from 'react-reveal';
import { ArticleBlock } from './ArticleBlock';

import classes from './index.module.css';

const Articles = () => {
    return (
        <section className={classes.articles}>
            <Container>
                <h2 className={classes.subTitle}>Our Articles</h2>
                <div className={classes.wrapperArticle}>
                    <div className={classes.blogsSection}>
                        <Image
                            src='/assets/images/cars.png'
                            alt="cars image"
                            className="dark:invert"
                            priority
                            width={440}
                            height={340}
                            style={{ borderRadius: '15px' }}
                        />
                        <div className={classes.wrapperArticleBlock}>
                            <Fade bottom>
                                <ArticleBlock
                                    articleName='Blogs'
                                    articleDescription='How Car Transport Can Help Your Business Thrive'
                                    date='JAN 18, 2023'
                                    linkReadMore='https://dev.ifta.online/'
                                />
                            </Fade>
                        </div>
                    </div>
                    <div className={classes.newsSection}>
                        <Image
                            src='/assets/images/messagesBigIcon.png'
                            alt="cars image"
                            className="dark:invert"
                            priority
                            width={440}
                            height={340}
                            style={{ borderRadius: '15px' }}
                        />
                        <div className={classes.wrapperArticleBlock}>
                            <Fade bottom>
                                <ArticleBlock
                                    articleName='News'
                                    articleDescription='MORPC Asks for Public Input on How to Use BIL Funds'
                                    date='JAN 18, 2023'
                                    linkReadMore='https://dev.ifta.online/'
                                />
                            </Fade>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export { Articles };