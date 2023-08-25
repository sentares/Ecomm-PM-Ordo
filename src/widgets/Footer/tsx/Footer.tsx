// @ts-nocheck
import cls from './Footer.module.scss'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Youtube from 'shared/assets/svg/youtube.svg'
import Facebook from 'shared/assets/svg/facebook.svg'
import Twitter from 'shared/assets/svg/twitter.svg'
import Insta from 'shared/assets/svg/instagram.svg'
import Linkindin from 'shared/assets/svg/linkedin.svg'

const iconAnimation = {
	hidden: { y: 100, opacity: 0 },
	visible: { y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.2 } },
}

const textAnimation = {
	hidden: { y: -100, opacity: 0 },
	visible: { y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.2 } },
}

const Footer = () => {
	return (
		<motion.section
			initial='hidden'
			whileInView='visible'
			viewport={{ amount: 0.3 }}
			className={cls.footer}
			id='footer'
		>
			<div className={cls.container}>
				<div className={cls.footerItems}>
					<div className={cls.footerUp}>
						<Link to='#'>
							<motion.p variants={textAnimation} className={cls.footerLogo}>
								HOME
							</motion.p>
						</Link>

						<ul className={cls.footerLinks}>
							<motion.li variants={textAnimation} className={cls.footerLink}>
								<Link to='#'>Главная</Link>
							</motion.li>
							<motion.li variants={textAnimation} className={cls.footerLink}>
								<Link to='#'>O Hac</Link>
							</motion.li>
							<motion.li variants={textAnimation} className={cls.footerLink}>
								<Link to='#'>Отзывы</Link>
							</motion.li>
							<motion.li variants={textAnimation} className={cls.footerLink}>
								<Link to='#'>Доставка</Link>
							</motion.li>
							<motion.li variants={textAnimation} className={cls.footerLink}>
								<Link to='#'>Контакты</Link>
							</motion.li>
						</ul>
					</div>

					<div className={cls.footerLine}></div>

					<div className={cls.footerDown}>
						<motion.p variants={iconAnimation} className={cls.footerText}>
							CompanyName @ 2023. All rights reserved
						</motion.p>
						<ul className={cls.footerIcons}>
							<li className={cls.footerIcon}>
								<Link to='#'>
									<motion.img
										variants={iconAnimation}
										src={Youtube}
										alt='Icon'
									/>
								</Link>
							</li>
							<li className={cls.footerIcon}>
								<Link to='#'>
									<motion.img
										variants={iconAnimation}
										src={Facebook}
										alt='Icon'
									/>
								</Link>
							</li>
							<li className={cls.footerIcon}>
								<Link to='#'>
									<motion.img
										variants={iconAnimation}
										src={Twitter}
										alt='Icon'
									/>
								</Link>
							</li>
							<li className={cls.footerIcon}>
								<Link to='#'>
									<motion.img variants={iconAnimation} src={Insta} alt='Icon' />
								</Link>
							</li>
							<li className={cls.footerIcon}>
								<Link to='#'>
									<motion.img
										variants={iconAnimation}
										src={Linkindin}
										alt='Icon'
									/>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</motion.section>
	)
}

export default Footer
