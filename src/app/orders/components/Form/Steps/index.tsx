'use client';

import { notFound, useParams } from 'next/navigation';
import { useMemo } from 'react';

import { StepProps, StepState } from './models';

type StepsProps = StepProps & {
    steps: StepState[];
};

const Steps = ({ steps, onValidStateChange }: StepsProps) => {
    const params = useParams();
    const step = Number(params.step) || 1;

    const Step = useMemo(() => {
        if (step !== 1 && !steps[step - 1]?.isValid)
            return steps[step - 1]?.component;

        return steps[step - 1]?.component;
    }, [steps, step]);

    if (step < 1 || step > steps.length) return notFound();

    return <Step onValidStateChange={onValidStateChange} />;
};

export { Steps };

export * from './FirstStep';
export * from './SecondStep';
export * from './FinalStep';
