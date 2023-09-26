'use client';

import { notFound, useParams } from 'next/navigation';
import { useCallback, useMemo, useState } from 'react';

import { FirstStep, SecondStep, FinalStep } from './Steps';

const Form = () => {
    const params = useParams();
    const step = Number(params.step) || 1;

    const [steps, setSteps] = useState([
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

    const Step = useMemo(() => {
        if (step !== 1 && !steps[step - 1]?.isValid)
            return steps[step - 1]?.component;

        return steps[step - 1]?.component;
    }, [steps, step]);

    const handleStepValidStateChange = useCallback(
        (isValid: boolean) => {
            setSteps((currentSteps) => {
                currentSteps[step].isValid = isValid;

                return currentSteps;
            });
        },
        [step],
    );

    if (step < 1 || step > steps.length) return notFound();

    return <Step onValidStateChange={handleStepValidStateChange} />;
};

export { Form };
