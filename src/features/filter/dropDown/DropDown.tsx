import { ChevronDown, XCircle } from 'lucide-react'
import { memo, useEffect, useRef, useState } from 'react'
import cls from './DropDown.module.scss'

type Option = {
	id?: number
	name?: string
}

interface DropDownProps {
	className?: string
	options?: Option[]
	onClick: () => void
	placeholder?: string
	isActive: boolean
	onClose: () => void
}
export const DropDown = memo((props: DropDownProps) => {
	const { options, className, onClick, placeholder, isActive, onClose } = props

	const handleDropdownClick = () => {
		if (isActive) {
			onClose()
		} else {
			onClick()
		}
	}

	const [clickedItem, setClickedItem] = useState<Option>({})

	const handleClickeItem = (option: Option) => {
		setClickedItem(option)
	}

	const dropdownRef = useRef<HTMLDivElement | null>(null)

	const handleDocumentClick = (event: MouseEvent) => {
		if (
			dropdownRef.current &&
			!dropdownRef.current.contains(event.target as Node)
		) {
			onClose()
		}
	}

	const handleClickRemoveItem = () => {
		setClickedItem({})
	}

	useEffect(() => {
		if (isActive) {
			document.addEventListener('click', handleDocumentClick)
		} else {
			document.removeEventListener('click', handleDocumentClick)
		}
		return () => {
			document.removeEventListener('click', handleDocumentClick)
		}
	}, [isActive])

	return (
		<div
			ref={dropdownRef}
			className={isActive ? cls.dropdownActive : cls.dropdown}
		>
			<button
				id='dropdownInformationButton'
				onClick={handleDropdownClick}
				className={`${cls['dropdown-button']} ${
					isActive ? cls.iconOpen : cls.iconClosed
				}`}
				style={clickedItem.name ? { color: 'black' } : {}}
			>
				{clickedItem.name ? clickedItem.name : placeholder}
				<ChevronDown className={`${cls.icon} ${cls.iconClosed}`} />
			</button>

			{isActive && (
				<div id='dropdownInformation' className={cls['dropdown-menu']}>
					<ul className={cls['dropdown-list']}>
						{options &&
							options.map(item => (
								<li key={item.id} className={cls['dropdown-block']}>
									<div
										onClick={handleClickeItem.bind(null, item)}
										className={cls['dropdown-item']}
										style={
											item.id === clickedItem.id
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
									{item.id === clickedItem.id && (
										<XCircle
											width={22}
											cursor='pointer'
											className={cls.closeIcon}
											onClick={handleClickRemoveItem}
										/>
									)}
								</li>
							))}
					</ul>
				</div>
			)}
		</div>
	)
})
