import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
	return (
		<header className={s.header}>
			<div className={s.inner}>
				<img src="https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg" />
				<div className={s.loginBlock}>
				{props.isAuth === true ? <div>{props.login} - <button onClick={props.logOut}>Log out</button></div> : 
					<div className={s.nav}>
					<NavLink to={'/login'} className={s.button}>
						Login
					</NavLink>
					</div>
				}
				</div>
			</div>
		</header>
	);
};

export default Header;
