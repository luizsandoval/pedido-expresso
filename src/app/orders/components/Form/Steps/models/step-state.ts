import { JSX } from 'react';

import { StepProps } from './step-props';

export interface StepState {
    component: ({ onValidStateChange }: StepProps) => JSX.Element;
    isValid: boolean;
}
