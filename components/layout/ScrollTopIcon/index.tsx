import classes from './index.module.css';

const ScrollTopIcon: React.FC<any> = () => {
    const scrollIntoTop = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className={classes.scrollTopIcon} onClick={scrollIntoTop}>
            <span>🡩</span>
        </div>
    );
};

export { ScrollTopIcon };