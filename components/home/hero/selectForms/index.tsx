import { useState } from 'react';
import { RouteHistory } from '../routeHistory';
import { Form } from '../forms/Form';
import { Steps } from '@/models/forms';
import useWindowSize from '@/hooks/useWindowSize';
import Fade from 'react-reveal';

import classes from './index.module.css';


const SelectForms: React.FC<any> = () => {
    const { width } = useWindowSize();
    const [ steps, setSteps ] = useState<Steps>([
        {
            id: 1,
            text: 'Select a Rout',
            active: true,
            values: {
                form: '',
                to: ''
            }
        },
        {
            id: 2,
            text: 'Select an Options',
            active: false,
            values: {
                vehicle: [],
                operable: null,
                method: null,
                time: ''
            },
        },
        {
            id: 3,
            text: 'Confirmation',
            active: false
        },
        {
            id: 4,
            text: 'Get a Quote',
            active: false,
            values: {
                name: '',
                phone: '',
                email: ''
            }
        }
    ]);

    return (
        <div className={classes.root}>
            {Number(width) > 768 && <RouteHistory steps={steps} />}
            <div className={classes.form}>
                <Form setSteps={setSteps} id={(steps.find(step => step.active)!).id} steps={steps}/>
                { Boolean(Number(width) > 1024) && (
                    <Fade right>
                        <div className={classes.wrapperDescription}>
                            <h1 className={classes.title}>Discover <span>Columbus Auto</span> Transport</h1>
                            <p className={classes.description}>
                                Lorem ipsum dolor sit amet consectetur. Cursus tortor amet porta condimentum auctor curabitur et. Ipsum hac vitae urna egestas vitae eget.
                            </p>
                        </div>
                    </Fade>
                )}
            </div>
        </div>
    );
};
export { SelectForms };