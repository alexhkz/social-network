import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

	let postsData = [
		{ id: 1, message: 'Hi, how are you?', likesCount: 12 },
		{ id: 2, message: "It's my first post", likesCount: 11 }
	];

	let postsElements = postsData
		.map(post => <Post message={post.message} likesCount={post.likesCount} />);

	return (
		<div className={classes.postBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea>Enter here</textarea>
				</div>
				<div>
					<button>Add post</button>
				</div>
			</div>
			<div className={classes.posts}>
				{postsElements}
			</div>
		</div>
	)
}

export default MyPosts;