import cls from './InfoContainer.module.scss'
const InfoContainer = () => {
	return (
		<div className={cls.container}>
			<div className={cls.text}>
				<div className={cls.desc}>Lorem ipsum dolor</div>
				<div className={cls.title}>
					Lorem ipsum dolor sit amet consectetur. Convallis vel odio vel mauris
					cursus sed augue. Et hendrerit scelerisque ultricies vehicula tortor
					dignissim vitae nunc risus.
				</div>
				<div className={cls.more}>Подробнее ...</div>
			</div>
			<div className={cls.image}></div>
		</div>
	)
}

export default InfoContainer
