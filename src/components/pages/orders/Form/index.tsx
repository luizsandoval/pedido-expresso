'use client';

import { notFound, useParams } from 'next/navigation';
import { useCallback, useState } from 'react';

import { FirstStep, SecondStep, FinalStep, Steps } from './Steps';
import { StepState } from './Steps/models';

const Form = () => {
    const params = useParams();
    const step = Number(params.step) || 1;

    const [steps, setSteps] = useState<StepState[]>([
        {
            component: FirstStep,
            isValid: false,
        },
        {
            component: SecondStep,
            isValid: false,
        },
        {
            component: FinalStep,
            isValid: false,
        },
    ]);

    const handleStepValidStateChange = useCallback(
        (isValid: boolean) =>
            setSteps((currentSteps) => {
                currentSteps[step].isValid = isValid;

                return currentSteps;
            }),
        [step],
    );

    if (step < 1 || step > steps.length) return notFound();

    return (
        <Steps steps={steps} onValidStateChange={handleStepValidStateChange} />
    );
};

export { Form };
