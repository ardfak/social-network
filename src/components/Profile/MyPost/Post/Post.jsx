import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
	return (
		<div className={s.item}>
			<img src="https://www.meme-arsenal.com/memes/bf0296e8bfa92558d0ca180289194068.jpg" alt="" />
			{props.message}
			<div>
				<span>Like </span>{props.likesCount}
			</div>
		</div>
	);
};

export default Post;
