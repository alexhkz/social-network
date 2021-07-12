import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {

	if (!props.profile) {
		return <Preloader />
	}

	return (
		<div>
			{/* <div>
				<img src="https://theinpaint.com/images/example-1-2.jpg" alt="main" />
			</div> */}
			<div className={classes.descriptionBlock}>
				<img src={props.profile.photos.large} alt='ava-large' />
				<ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
			</div>
		</div>
	)
}

export default ProfileInfo;