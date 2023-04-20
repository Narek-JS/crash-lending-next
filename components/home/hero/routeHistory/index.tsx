import React from 'react';
import classNames from 'classnames';

import classes from './index.module.css';

type StepsId = 1 | 2 | 3 | 4;

interface Iprops {
    steps: Array<{
        id: StepsId,
        text: string,
        active: boolean
    }>
}

const RouteHistory: React.FC<Iprops> = ({ steps }) => {

    return (
        <div className={classes.routeHistory}>
            { steps.map((step, index) => (
                <div key={step.id} className={classes.step}>
                    <p className={classNames(classes.stepId, {
                        [classes.active]: step.active,
                    })}>
                        {step.id}
                    </p>
                    <p className={classNames(classes.stepText, {
                        [classes.active]: step.active,
                    })}>
                        {step.text}
                    </p>
                    { index < steps.length - 1 && (
                        <span className={classes.row} />
                    )}
                </div>
            ))}
        </div>
    );
};

export { RouteHistory };