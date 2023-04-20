import { useEffect, useLayoutEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Exclamation } from '@/public/assets/svges/Exclamation';
import { IVehicleGroup, SetSteps, Steps } from '@/models/forms';
import { IconToBack } from '@/public/assets/svges/IconToBack';
import { AddIcon } from '@/public/assets/svges/AddIcon';
import { DropdownSelectUI } from '@/components/ui/DropdownSelectUI';
import { timeOptions } from '@/constants/options';
import { useAnimation } from '@/hooks/useAnimation';
import { AuthAnimationOptions, AuthAnimations } from '@/constants/animation';
import CheckBox from '@/components/ui/CheckBoxUI';

import classes from './index.module.css';

interface Iprops {
    setSteps: SetSteps;
    data: any;
};

interface ISelectedErrors {
    selectedItemError: boolean;
    shippingMethodError: boolean;
    operableMethodError: boolean;
};

const initialVehicleGroup = {
    make: '',
    model: '',
    year: '',
    id: 1
};

const OptionsForm: React.FC<Iprops> = ({ setSteps, data }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<any>();
    const [selectedItem, setSelectedItem] = useState<string>('');
    const [shippingMethod, setShippingMethod] = useState<1 | 2 | null>(null);
    const [operableMethod, setOperableMethod] = useState<1 | 2 | null>(null);
    const [vehicleGroup, setVehicleGroup] = useState<Array<IVehicleGroup>>(data.vehicle.length ? data.vehicle.map((vehicl: any, index: number) => ({
        ...vehicl,
        id: index + 1
    })) : [initialVehicleGroup]);
    const [animationDivRef, animate] = useAnimation<HTMLFormElement>(AuthAnimationOptions);
    const [selectedErrors, setSelectedErrors] = useState<ISelectedErrors>({
        selectedItemError: false,
        shippingMethodError: false,
        operableMethodError: false,
    });

    useLayoutEffect(() => {
        animate(AuthAnimations.fromRight);
    }, []);

    useEffect(() => {
        if( selectedErrors.operableMethodError ||
            selectedErrors.selectedItemError ||
            selectedErrors.shippingMethodError
        ) {
            setSelectedErrors({
                operableMethodError: !Boolean(operableMethod),
                selectedItemError: !Boolean(data.time),
                shippingMethodError: !Boolean(shippingMethod)
            });
        };
    }, [data, shippingMethod, operableMethod]);
    const onSubmit = (data: any ) => {
        const vehicle = Object.entries(data).reduce((acc: any, [key, val]) => {
            const num = parseInt(key.slice(-1));
            const prop = key.slice(0, -1);
            if (!isNaN(num) && val) {
                const group = acc[num - 1] || {};
                return [...acc.slice(0, num - 1), {...group, [prop]: val}, ...acc.slice(num)];
            };
            return acc;
        }, []);

        if(!(data.time) && operableMethod && shippingMethod) {
            animate(AuthAnimations.toLeft, () => {
                setSteps((prev: Steps): Steps => prev.map((step) => ({
                    ...step,
                    active: step.id === 3 ? true : false,
                    ...(step.id === 2 && { values: {
                        ...step.values,
                        vehicle,
                        time: selectedItem,
                        operable: operableMethod,
                        method: shippingMethod
                    }})
                })));
            });
        } else {
            setSelectedErrors({
                operableMethodError: !Boolean(operableMethod),
                selectedItemError: Boolean(data.time),
                shippingMethodError: !Boolean(shippingMethod)
            });
        }
    };

    const intoBack = () => {
        setSteps(prevSteps => prevSteps.map(step => ({
            ...step,
            active: step.id === 1
        })));
    };

    const addList = (): void => {
        vehicleGroup.push({...initialVehicleGroup, id: vehicleGroup.length + 1});
        setVehicleGroup([...vehicleGroup]);
    };

    const removeList = (): void => {
        const id = vehicleGroup[vehicleGroup.length - 1].id;
        reset({
            [`make${id}`]: '',
            [`model${id}`]: '',
            [`year${id}`]: ''
        });
        vehicleGroup.pop();
        setVehicleGroup([...vehicleGroup]);
    };

    const selectItem = (text: string): void => {
        setSteps(prevSteps => prevSteps.map((step: any) => ({
            ...step,
            ...(step.id === 2 && { 
                values: {
                    ...step.values,
                    time: text
                }
            })
        })));
        setSelectedItem(text);
    };

    return (
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)} ref={animationDivRef}>
            <div className={classes.wrapperHeading}>
                <div className={classes.back} onClick={intoBack}>
                    <IconToBack />
                    <span>Edit</span>
                </div>
                <h2 className={classes.formHeading}>Get A <span>FREE</span> Quote</h2>
            </div>
            <label className={classes.formLable}>Vehicle <Exclamation /> </label>
            { vehicleGroup.map((vehicle, index) => {
                return (
                <div className={classes.vehicleGroup} key={index}>
                    <div className={classes.wrapperFormInput}>
                        <input
                            className={classes.formInput}
                            {...register("year"+vehicle.id, { required: true })}
                            placeholder='Year'
                            defaultValue={data.vehicle.length && data.vehicle[index] ? data.vehicle[index].year : ''}
                        />
                        {errors["year"+vehicle.id] ? <span className={classes.error}>required</span> : null}
                    </div>
                    <div className={classes.wrapperFormInput}>
                        <input
                            className={classes.formInput}
                            {...register("make"+vehicle.id, { required: true })}
                            placeholder='Make'
                            defaultValue={data.vehicle.length && data.vehicle[index] ? data.vehicle[index].make : ''}
                        />
                        {errors["make"+vehicle.id] ? <span className={classes.error}>required</span> : null}
                    </div>
                    <div className={classes.wrapperFormInput}>
                        <input
                            className={classes.formInput}
                            {...register("model"+vehicle.id, { required: true })}
                            placeholder='Model'
                            defaultValue={data.vehicle.length && data.vehicle[index] ? data.vehicle[index].model : ''}
                        />
                        {errors["model"+vehicle.id] ? <span className={classes.error}>required</span> : null}
                    </div>
                </div>
            )})}
            <div className={classes.editLists}>
                <div className={classes.addList} onClick={addList}>
                    <AddIcon />
                    <span>Add Multiple Vehicle</span>
                </div>
                { vehicleGroup.length > 1 && (
                    <div className={classes.removeList} onClick={removeList}>
                        <AddIcon rotate={45}/>
                        <span>Remove Vehicle</span>
                    </div>
                )}
            </div>
            <div className={classes.selectConditions}>
                <div className={classes.timeBlock}>
                    <label className={classes.formLable}>Time <Exclamation /> </label>
                    <DropdownSelectUI
                        items={timeOptions}
                        selectedItem={data.time}
                        setSelectedItem={selectItem}
                    />
                    {selectedErrors.selectedItemError && <span className={classes.error}>required</span>}
                </div>
                <div className={classes.checkboxes}>
                    <div className={classes.shippingMethod}>
                        <label className={classes.formLable}>Shipping Method? <Exclamation /> </label>
                        <div className={classes.wrapperCheckbox}>
                            <div className={classes.checkboxList}>
                                <CheckBox checked={shippingMethod === 1} onChange={() => setShippingMethod(1)}/>
                                <label className={classes.formLable}>Open</label>
                            </div>
                            <div className={classes.checkboxList}>
                                <CheckBox checked={shippingMethod === 2} onChange={() => setShippingMethod(2)}/>
                                <label className={classes.formLable}>Enclosed</label>
                            </div>
                            {selectedErrors.shippingMethodError && <span className={classes.error}>required</span>}
                        </div>
                    </div>
                    <div className={classes.operableMethod}>
                        <label className={classes.formLable}>Is It Operable? <Exclamation /> </label>
                        <div className={classes.wrapperCheckbox}>
                            <div className={classes.checkboxList}>
                                <CheckBox checked={operableMethod === 1} onChange={() => setOperableMethod(1)}/>
                                <label className={classes.formLable}>Yes</label>
                            </div>
                            <div className={classes.checkboxList}>
                                <CheckBox checked={operableMethod === 2} onChange={() => setOperableMethod(2)}/>
                                <label className={classes.formLable}>No</label>
                            </div>
                            {selectedErrors.operableMethodError && <span className={classes.error}>required</span>}
                        </div>
                    </div>
                </div>
            </div>
            <button className={classes.sendBtn} type='submit'>Continue</button>
        </form>
    );
};

export { OptionsForm };