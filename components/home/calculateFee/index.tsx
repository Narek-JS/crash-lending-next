import { Container } from '@/components/ui/container';
import { DistanceBetweenIcon } from '@/public/assets/svges/DistanceBetweenIcon';
import { CarIcon } from '@/public/assets/svges/CarIcon';
import { TransitCarIcon } from '@/public/assets/svges/TransitCarIcon';
import { SportCarIcon } from '@/public/assets/svges/SportCarIcon';
import Fade from 'react-reveal';

import classes from './index.module.css';

const categories = [
    {
        text: 'The size and weight of your vehicle',
        icon: <CarIcon />
    },
    {
        text: 'Distance between vehicle pickup and delivery',
        icon: <DistanceBetweenIcon />
    },
    {
        text: 'Choosing open or enclosed car transport',
        icon: <TransitCarIcon />
    },
    {
        text: 'The condition of your vehicle',
        icon: <SportCarIcon />
    }
];

const CalculateFee = () => {

    return (
        <section className={classes.calculateFeeSection}>
            <Container>
                <h2 className={classes.subTitle}>How we calculated your transport fee</h2>
                <div className={classes.wrapperCategories}>
                    { categories.map((card, index) => (
                        <Fade
                            bottom={index > 0 && index < categories.length - 1}
                            right={index === categories.length - 1}
                            left={index === 0}
                            key={index}
                        >
                            <div className={classes.categoryCard}>
                                {card.icon}
                                <p className={classes.cardText}>{card.text}</p>
                            </div>
                        </Fade>
                    ))}
                </div>
                <Fade bottom>
                    <button className={classes.intoFAQs}>FAQs</button>
                </Fade>
            </Container>
        </section>
    );
};

export { CalculateFee };