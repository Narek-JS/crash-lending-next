import { ConfirmationData, SetSteps } from "@/models/forms";
import { IconToBack } from "@/public/assets/svges/IconToBack";
import { useAnimation } from "@/hooks/useAnimation";
import { AuthAnimationOptions, AuthAnimations } from "@/constants/animation";
import { useLayoutEffect } from "react";

import classes from './inedx.module.css';

interface Iprops {
    setSteps: SetSteps;
    data: ConfirmationData;
};

const ConfirmationForm: React.FC<Iprops> = ({ setSteps, data }) => {
    const [animationDivRef, animate] = useAnimation<HTMLFormElement>(AuthAnimationOptions);

    useLayoutEffect(() => {
        animate(AuthAnimations.fromRight);
    }, []);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        animate(AuthAnimations.toLeft, () => {
            setSteps(prevSteps => prevSteps.map(step => ({
                ...step,
                active: step.id === 4
            })));
        });
    };

    const intoBack = () => {
        setSteps(prevSteps => prevSteps.map(step => ({
            ...step,
            active: step.id === 2
        })));
    };

    return (
        <form className={classes.form} onSubmit={onSubmit} ref={animationDivRef}>
            <div className={classes.wrapperHeading}>
                <div className={classes.back} onClick={intoBack}>
                    <IconToBack />
                    <span>Edit</span>
                </div>
                <h2 className={classes.formHeading}>Get A <span>FREE</span> Quote</h2>
            </div>
            <div className={classes.wrapperContent}>
                <div className={classes.dataGroup}>
                    <div>
                        <label>From</label>
                        <p>{data.form}</p>
                    </div>
                    <div>
                        <label>To</label>
                        <p>{data.to}</p>
                    </div>
                    <div>
                        <label>Vehicle</label>
                        <p>
                            { data.vehicle.map((vehicl, index) => (
                                <span key={index}>{vehicl.make} {vehicl.model} {vehicl.year}</span>
                            ))}
                        </p>
                    </div>
                </div>
                <div className={classes.dataGroup}>
                    <div>
                        <label>Time</label>
                        <p>{data.time}</p>
                    </div>
                    <div>
                        <label>Shipping Method?</label>
                        <p>{data.method === 1 ? "Open" : "Enclosed"}</p>
                    </div>
                    <div>
                        <label>Is It Operable?</label>
                        <p>{data.operable === 1 ? "Yes" : "No"}</p>
                    </div>
                </div>
            </div>
            <button className={classes.sendBtn} type='submit'>Continue</button>
        </form>
    );
};

export { ConfirmationForm };