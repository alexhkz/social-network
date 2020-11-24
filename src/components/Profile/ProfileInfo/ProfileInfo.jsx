import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
	return (
		<div>
			<div>
				<img src="https://theinpaint.com/images/example-1-2.jpg" alt="main" />
			</div>
			<div className={classes.descriptionBlock}>
				ava + description
			</div>
		</div>
	)
}

export default ProfileInfo;