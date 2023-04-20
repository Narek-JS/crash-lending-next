import { Container } from '@/components/ui/container';
import { GoogleIcon } from '@/public/assets/svges/GoogleIcon';
import { YouTubeIcon } from '@/public/assets/svges/YouTubeIcon';
import { YelpIcon } from '@/public/assets/svges/YelpIcon';
import { StarIcon } from '@/public/assets/svges/StarIcon';
import { ArrowIcon } from '@/public/assets/svges/ArrowIcon';
import Link from 'next/link';

import classes from './index.module.css';
import useWindowSize from '@/hooks/useWindowSize';

const sosialeGroups = [
    {
        icon: <GoogleIcon />,
        name: 'Google',
        link: 'https://www.google.com/search?safe=active&hl=en&sxsrf=ACYBGNRLLhoCmKi9QI-aTbuoKmckfoRbTQ%3A1569260684261&source=hp&ei=jASJXdyxDZPr9APgt5PwCg&q=columbus+auto+transport&oq=Columbus+Auto+Transport&gs_l=psy-ab.1.0.35i39j0i22i30l2.802.802..1704...0.0..0.106.106.0j1......0....2j1..gws-wiz.FGC6DqN_4DE'
    },
    {
        icon: <YouTubeIcon />,
        name: 'YouTube',
        link: 'https://www.google.com/search?safe=active&hl=en&sxsrf=ACYBGNRLLhoCmKi9QI-aTbuoKmckfoRbTQ%3A1569260684261&source=hp&ei=jASJXdyxDZPr9APgt5PwCg&q=columbus+auto+transport&oq=Columbus+Auto+Transport&gs_l=psy-ab.1.0.35i39j0i22i30l2.802.802..1704...0.0..0.106.106.0j1......0....2j1..gws-wiz.FGC6DqN_4DE'
    },
    {
        icon: <YelpIcon />,
        name: 'Yelp',
        link: 'https://www.google.com/search?safe=active&hl=en&sxsrf=ACYBGNRLLhoCmKi9QI-aTbuoKmckfoRbTQ%3A1569260684261&source=hp&ei=jASJXdyxDZPr9APgt5PwCg&q=columbus+auto+transport&oq=Columbus+Auto+Transport&gs_l=psy-ab.1.0.35i39j0i22i30l2.802.802..1704...0.0..0.106.106.0j1......0....2j1..gws-wiz.FGC6DqN_4DE'
    }
];

const Sosiale: React.FC<any> = () => {
    const { width } = useWindowSize();
    
    if(Number(width) <= 991) return null;
    
    return (
        <section className={classes.sosialeSection}>
            <Container>
                <h2 className={classes.subTitle}>Check out more reviews and likes on:</h2>
                <div className={classes.sosialGroup}>
                    { sosialeGroups.map((sosial, index) => (
                        <div className={classes.sosial} key={index}>
                            <div className={classes.icons}>
                                {sosial.icon}
                                {new Array(5).fill(1).map((_, i) => (
                                    <StarIcon key={i}/>
                                ))}
                            </div>
                            <p className={classes.sosialName}>{sosial.name}</p>
                            <Link href={sosial.link} className={classes.seeMore}>See More <ArrowIcon rotate={-90} color='#F58020'/> </Link>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export { Sosiale };