import { Exclamation } from '@/public/assets/svges/Exclamation';
import { useForm } from 'react-hook-form';
import { IRoutFormData, SetSteps } from '@/models/forms';
import { useAnimation } from '@/hooks/useAnimation';
import { AuthAnimationOptions, AuthAnimations } from '@/constants/animation';
import { useLayoutEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import classNames from 'classnames';

import classes from './index.module.css';

interface Iprops {
    setSteps: SetSteps;
    data: any
};

const schema = yup.object().shape({
    form: yup.string().min(2).max(32).required(),
    to: yup.string().min(2).max(32).required(),
});

const RoutForm: React.FC<Iprops> = ({ setSteps, data }) => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<IRoutFormData>({
        resolver: yupResolver(schema),
    });

    const [animationDivRef, animate] = useAnimation<HTMLFormElement>(AuthAnimationOptions);

    useLayoutEffect(() => {
        animate(AuthAnimations.fromRight);
    }, []);

    const onSubmit = (data: IRoutFormData) => {
        animate(AuthAnimations.toLeft, () => {
            setSteps(steps => steps.map(step => ({
                ...step,
                values: step.id === 1 ? data : step.values,
                active: step.id === 2 ? true : false
            })));
        });
    };

    return (
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)} ref={animationDivRef}>
            <h2 className={classes.formHeading}>Get A <span>FREE</span> Quote</h2>
            
            <div className={classNames(classes.formInputGroup, classes.inputGroup)}>
                <label className={classes.formLable}>From <Exclamation /> </label>
                <input
                    {...register("form", { required: true })}
                    className={classes.formInput}
                    placeholder='City,State or ZIP'
                    defaultValue={data.form}
                />
                {errors.form && <p className={classes.error}>{errors.form.message}</p>}
            </div>

            <div className={classNames(classes.toInputGroup, classes.inputGroup)}>
                <label className={classes.toLable}>To <Exclamation /> </label>
                <input
                    {...register("to", { required: true })}
                    className={classes.toInput}
                    placeholder='City,State or ZIP'
                    defaultValue={data.to}
                />
                {errors.to && <p className={classes.error}>{errors.to.message}</p>}
            </div>

            
            <button className={classes.button} type="submit">Continue</button>
        </form>
    );
};

export { RoutForm };