import React from 'react';
import styles from './Users.module.css';

let Users = (props) => {

	if (props.users.length === 0) {
		props.setUsers([
			{
				id: 1, photoUrl: 'https://i.pinimg.com/736x/9f/08/95/9f08957fdb87a044dd6b8b5ddea8b024.jpg',
				followed: false, fullName: 'Dmitri', status: 'I am a boss', location: { city: 'Minsk', country: 'Belarus' }
			},
			{
				id: 2, photoUrl: 'https://i.pinimg.com/736x/9f/08/95/9f08957fdb87a044dd6b8b5ddea8b024.jpg',
				followed: true, fullName: 'Alexander', status: 'I am a boss too', location: { city: 'Moscow', country: 'Russia' }
			},
			{
				id: 3, photoUrl: 'https://i.pinimg.com/736x/9f/08/95/9f08957fdb87a044dd6b8b5ddea8b024.jpg',
				followed: false, fullName: 'Andrew', status: 'I am a another boss', location: { city: 'Kiev', country: 'Ukraine' }
			}
		]);
	}
	return <div>
		{
			props.users.map((u) => <div key={u.id}>
				<span>
					<div>
						<img src={u.photoUrl} className={styles.userPhoto} alt='ava' />
					</div>
					<div>
						{u.followed
							? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
							: <button onClick={() => { props.follow(u.id) }}>Follow</button>}
					</div>
				</span>
				<span>
					<span>
						<div>{u.fullName}</div>
						<div>{u.status}</div>
					</span>
					<span>
						<div>{u.location.country}</div>
						<div>{u.location.city}</div>
					</span>
				</span>
			</div>)
		}
	</div>
}

export default Users;