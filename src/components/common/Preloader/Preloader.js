import React from 'react';
import styles from './preloader.module.css';

const Preloader = (props) => {
	return (
		<div>
			<div className={styles.lds_roller}>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};

export default Preloader;