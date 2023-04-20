import React from 'react';
import classes from './index.module.css';
import { CalendarIcon } from '@/public/assets/svges/CalendarIcon';
import Link from 'next/link';
import { ArrowIcon } from '@/public/assets/svges/ArrowIcon';

interface Iprops {
    articleName: string;
    articleDescription: string;
    date: string;
    linkReadMore: string;
}

const ArticleBlock: React.FC<Iprops> = ({
    articleName,
    articleDescription,
    date,
    linkReadMore
}) => {

    return (
        <div className={classes.articleBlock}>
            <p className={classes.blog}>
                <span className={classes.blogName}>{articleName}</span>
                <span className={classes.viewAll}>View All</span>
            </p>
            <p className={classes.description}>{articleDescription}</p>
            <p className={classes.calendar}>
                <CalendarIcon />
                <span>{date}</span>
            </p>
            <Link href={linkReadMore} className={classes.readMore}>Read More <ArrowIcon rotate={-90} color='#F58020'/></Link>
        </div>
    );
};

export { ArticleBlock };