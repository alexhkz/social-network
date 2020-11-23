import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';

const Profile = () => {
	return (
		<div>
			<div>
				<img src="https://theinpaint.com/images/example-1-2.jpg" alt="main" />
			</div>
			<div>
				ava + description
			</div>
			<MyPosts />
		</div>
	)
}

export default Profile;