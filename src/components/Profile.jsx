import React from 'react';
import classes from './Profile.module.css';

const Profile = () => {
	return (
		<div className={classes.content}>
			<div>
				<img src="https://theinpaint.com/images/example-1-2.jpg" alt="main" />
			</div>
			<div>
				ava + description
			</div>
			<div>
				My posts
				<div>
					New posts
				</div>
				<div className={classes.posts}>
					<div className={classes.item}>
						post1
						</div>
					<div className={classes.item}>
						post2
						</div>
				</div>
			</div>
		</div>
	)
}

export default Profile;