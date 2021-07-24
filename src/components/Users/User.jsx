import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';

let User = ({ user, followingInProgress, unfollow, follow }) => {
	let userName = user;
	return (
		<div>
			<span>
				<div>
					<NavLink to={'/profile/' + userName.id}>
						<img src={userName.photos.small != null ? userName.photos.small : userPhoto} 
							className={styles.userPhoto} alt='ava' />
					</NavLink>
				</div>
				<div>
					{userName.followed
						? <button disabled={followingInProgress.some(id => id === userName.id)} onClick={() => {
							unfollow(userName.id);
						}}>Unfollow</button>

						: <button disabled={followingInProgress.some(id => id === userName.id)} onClick={() => {
							follow(userName.id);
						}}>Follow</button>}
				</div>
			</span>
			<span>
				<span>
					<div>{userName.name}</div>
					<div>{userName.status}</div>
				</span>
				<span>
					<div>{'userName.location.country'}</div>
					<div>{'userName.location.city'}</div>
				</span>
			</span>
		</div>
	)
}

export default User;