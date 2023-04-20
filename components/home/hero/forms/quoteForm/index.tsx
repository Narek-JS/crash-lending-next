import { SetSteps, Steps } from '@/models/forms';
import { IconToBack } from '@/public/assets/svges/IconToBack';
import { useAnimation } from '@/hooks/useAnimation';
import { AuthAnimationOptions, AuthAnimations } from '@/constants/animation';
import { useLayoutEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { getCuurentFormatData } from '@/helper/form';
import * as yup from "yup";

import classes from './index.module.css';

interface Iprops {
    setSteps: SetSteps;
    steps: Steps
};

interface IformData {
    name: string;
    email: string;
    phone: string;
}

const schema = yup.object().shape({
    name: yup.string().min(2).max(32).required(),
    phone: yup.string().min(2).max(32).matches(new RegExp('[0-9]')).required(),
    email: yup.string().matches(
        /[A-z0-9]+@{1}[A-z0-9]+\.[A-z]{2,}$/,
      'Invalid email'
    )
    .required('Email is required'),
});

const QuoteForm: React.FC<Iprops> = ({ setSteps, steps }) => {
    const [animationDivRef, animate] = useAnimation<HTMLFormElement>(AuthAnimationOptions);
    const { register, handleSubmit, formState: { errors }, reset } = useForm<IformData>({
        resolver: yupResolver(schema),
    });

    useLayoutEffect(() => {
        animate(AuthAnimations.fromRight);
    }, []);

    const intoBack = () => {
        setSteps(prevSteps => prevSteps.map(step => ({
            ...step,
            active: step.id === 3
        })));
    };

    const onSubmit = (data: IformData) => {
        setSteps(prevSteps => prevSteps.map((step: any) => ({
            ...step,
            ...(step.id === 4 && { 
                values: data
            })
        })));
        const formData = getCuurentFormatData(steps);
        alert(JSON.stringify(formData));
    };

    return (
        <form className={classes.form} ref={animationDivRef} onSubmit={handleSubmit(onSubmit)}>
            <div className={classes.wrapperHeading}>
                <div className={classes.back} onClick={intoBack}>
                    <IconToBack />
                    <span>Edit</span>
                </div>
                <h2 className={classes.formHeading}>Get A <span>FREE</span> Quote</h2>
            </div>
            <div className={classes.wrapperInput}>
                <div className={classes.name}>
                    <label className={classes.formLable}>Name</label>
                    <input {...register("name")} placeholder='Enter full name' className={classes.formInput}/>
                    {errors.name && <p className={classes.error}>{errors.name.message}</p>}
                </div>
                <div className={classes.phone}>
                    <label className={classes.formLable}>Phone number</label>
                    <input {...register("phone")} placeholder='( 999 ) 999 - 999' className={classes.formInput}/>
                    {errors.phone && <p className={classes.error}>{errors.phone.message}</p>}
                </div>
            </div>
            <div className={classes.email}>
                <div>
                    <label className={classes.formLable}>Email</label>
                    <input {...register("email")} placeholder='example@domain.com' className={classes.formInput}/>
                    {errors.email && <p className={classes.error}>{errors.email.message}</p>}
                </div>
            </div>
            <button className={classes.sendBtn} type='submit'>Continue</button>
        </form>
    );
};

export { QuoteForm };