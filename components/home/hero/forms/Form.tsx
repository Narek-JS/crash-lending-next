import { SetSteps, Steps, StepsId } from "@/models/forms";
import { ConfirmationForm } from "./confirmationForm";
import { OptionsForm } from "./optionsForm";
import { QuoteForm } from "./quoteForm";
import { RoutForm } from "./routForm";
import { useMemo } from "react";


interface Iprops {
    id: StepsId;
    setSteps: SetSteps,
    steps: Steps
};

const Form: React.FC<Iprops> = ({ id, setSteps, steps }) => {

    const response: any = useMemo(() => {
        if(id === 3) {
            return {
                ...steps[0].values,
                ...steps[1].values
            };
        };
        return null
    }, [id]);


    switch(id){
        case 1: return <RoutForm setSteps={setSteps} data={steps[0].values}/>
        case 2: return <OptionsForm setSteps={setSteps} data={steps[1].values}/>
        case 3: return <ConfirmationForm setSteps={setSteps} data={response}/>
        case 4: return <QuoteForm setSteps={setSteps} steps={steps}/>
    };
};

export { Form };