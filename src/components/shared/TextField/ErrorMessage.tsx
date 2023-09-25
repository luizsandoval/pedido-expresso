import { Hint } from './Hint';

type ErrorMessageProps = {
    message?: string;
};

const ErrorMessage = ({ message }: ErrorMessageProps) =>
    message && <Hint className="text-red-400" message={message} />;

export { ErrorMessage };
