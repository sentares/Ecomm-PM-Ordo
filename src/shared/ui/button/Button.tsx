import classNames from 'classnames'
import { ButtonHTMLAttributes, memo, ReactNode } from 'react'
import cls from './Button.module.scss'

export enum ButtonTheme {
	DEFAULT = 'default',
	NAV = 'nav',
	BIG = 'big',
	SMALL = 'small',
	COUNTERLEFT = 'counter-left',
	COUNTERRIGHT = 'counter-right',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	children?: ReactNode
	theme?: ButtonTheme
	disabled?: boolean
}

const Button = memo((props: ButtonProps) => {
	const {
		className,
		children,
		disabled,
		theme = ButtonTheme.DEFAULT,
		...otherProps
	} = props
	return (
		<button
			className={classNames(cls.button, { [cls.disabled]: disabled }, [
				className,
				cls[theme],
			])}
			disabled={disabled}
			{...otherProps}
		>
			{children}
		</button>
	)
})

export default Button
