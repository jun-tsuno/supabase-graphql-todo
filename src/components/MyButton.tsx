import { ButtonHTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	primary?: boolean;
	danger?: boolean;
}

const MyButton = (props: ButtonProps) => {
	const { children, primary, danger, ...rest } = props;

	const ButtonClass = classNames('rounded-md py-1 px-2', {
		'bg-emerald-600 text-zinc-200': primary,
		'bg-red-400 text-zinc-200': danger,
	});

	return (
		<>
			<button className={ButtonClass} {...rest}>
				{children}
			</button>
		</>
	);
};

export default MyButton;
