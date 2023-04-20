export interface IRoutFormData {
    form: string;
    to: string;
};

export type selectedTimeType = [
    'As soon as possible',
    'Within 1 week',
    'Within 2 weeks',
    'Within 30 days',
    'More than 30 days'
];

export interface IVehicleGroup {
    year: string;
    make: string;
    model: string;
    id?: number
}

export interface IOptionsFormData {
    method: 1 | 2 | null;
    operable: 1 | 2 | null;
    time: string;
    vehicle: Array<IVehicleGroup> | [];
};

export interface IQuoteForm {
    name: string;
    phone: string;
    email: string;
};

export type StepsId = 1 | 2 | 3 | 4;

export type Steps = Array<{
    id: StepsId;
    text: string;
    active: boolean;
    values?: IRoutFormData | IOptionsFormData | IQuoteForm;
}>;

export type SetSteps = React.Dispatch<React.SetStateAction<Steps>>

export interface ConfirmationData extends IRoutFormData, IOptionsFormData {};