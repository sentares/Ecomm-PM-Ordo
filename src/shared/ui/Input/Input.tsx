//@ts-ignore
import { InputHTMLAttributes, memo } from 'react'
import cls from './Input.module.scss'

type HTMLInputProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	'value' | 'onChange'
>

interface InputProps extends HTMLInputProps {
	value?: string | number
	classOfBlock?: string
	classOfStyle?: string | any
	placeholder?: string
	labelStart?: any
	labelEnd?: any
	type?: string
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = memo((props: InputProps) => {
	const {
		classOfBlock,
		classOfStyle,
		value,
		placeholder,
		labelStart,
		labelEnd,
		type,
		onChange,
		...otherProps
	} = props

	return (
		<div className={classOfBlock ? cls[classOfBlock] : cls.inputBlock}>
			{labelStart && <label>{labelStart}</label>}
			<input
				className={cls[classOfStyle]}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				type={type}
				{...otherProps}
			/>
			{labelEnd && <label>{labelEnd}</label>}
		</div>
	)
})

export default Input
