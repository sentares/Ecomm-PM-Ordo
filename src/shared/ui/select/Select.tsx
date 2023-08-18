import classNames from 'classnames'
import { ChevronDown, XCircle } from 'lucide-react'
import React, { memo, ReactNode, useState } from 'react'
import cls from './Select.module.scss'

interface Option {
	id: number | null
	name: string
}

interface SelectProps {
	className?: string
	options?: Option[]
	onClick?: (e: React.ChangeEvent<HTMLSelectElement>) => void
	placeholder?: string
	clickedItem?: Option
	handleClickeItem?: (item: Option) => void
	handleClickRemoveItem?: () => void
}

export const Select = memo((props: SelectProps) => {
	const {
		options,
		className,
		placeholder,
		clickedItem,
		handleClickeItem,
		handleClickRemoveItem,
	} = props
	const [open, setOpen] = useState(false)
	const handleDropdownClick = () => {
		setOpen(!open)
	}

	return (
		<div className={classNames(cls.Select, className)}>
			<button
				id='dropdownInformationButton'
				onClick={handleDropdownClick}
				className={`${cls['dropdown-button']} ${
					open ? cls.iconOpen : cls.iconClosed
				}`}
				style={clickedItem?.name ? { color: 'black' } : {}}
			>
				{clickedItem?.name ? clickedItem.name : placeholder}
				<ChevronDown className={`${cls.icon} ${cls.iconClosed}`} />
			</button>
			{open && (
				<ul className={cls['dropdown-list']}>
					{options &&
						options.map(item => (
							<li key={item.id} className={cls['dropdown-block']}>
								<div
									onClick={
										handleClickeItem && handleClickeItem.bind(null, item)
									}
									className={cls['dropdown-item']}
									style={
										item.id === clickedItem?.id
											? {
													background: '#0E9F6E',
													color: 'white',
													fontWeight: 700,
													boxShadow:
														'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px',
											  }
											: {}
									}
								>
									{item.name}
								</div>
								{item.id === clickedItem?.id && (
									<XCircle
										width={18}
										cursor='pointer'
										className={cls.closeIcon}
										onClick={handleClickRemoveItem}
									/>
								)}
							</li>
						))}
				</ul>
			)}
		</div>
	)
})
