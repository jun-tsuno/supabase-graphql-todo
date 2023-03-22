import { ButtonHTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	primary?: boolean;
	secondary?: boolean;
	danger?: boolean;
}

const MyButton = (props: ButtonProps) => {
	const { children, primary, secondary, danger, ...rest } = props;

	const ButtonClass = classNames('rounded-md py-1 px-2', {
		'bg-emerald-600 text-zinc-200': primary,
		'bg-violet-600 text-zinc-200': secondary,
		'bg-red-400 text-zinc-200': danger,
	});

	return (
		<div>
			<button className={ButtonClass} {...rest}>
				{children}
			</button>
		</div>
	);
};

export default MyButton;
