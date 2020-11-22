import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
	return (
		<div className={classes.item}>
			<img src="https://image.freepik.com/free-vector/man-avatar-profile-on-round-icon_24640-14044.jpg" alt="man-avatar"></img>
			{props.message}
			<div>
				<span>like</span>
			</div>
		</div>
	)
}

export default Post;