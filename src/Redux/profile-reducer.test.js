import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";

let state = {
	posts: [
		{ id: 1, message: 'Hi!', likesCount: 12 },
		{ id: 2, message: 'Sup man?', likesCount: 11 },
		{ id: 3, message: 'Yo bro!', likesCount: 11 },
		{ id: 4, message: 'Hey!', likesCount: 11 },
	]
};

it('should be le', () => {
	// 1. test data
	let action = addPostActionCreator('some text');

	// 2. action
	let newState = profileReducer(state, action);

	// 3.expectation
	expect(newState.posts.length).toBe(5);
});

it('message of new post should be correct', () => {
	// 1. test data
	let action = addPostActionCreator('some text');
	// 2. action
	let newState = profileReducer(state, action);

	// 3.expectation
	expect(newState.posts[4].message).toBe('some text');
});

it('after deleting length of messages should be decrement', () => {
	// 1. test data
	let action = deletePost(1);
	// 2. action
	let newState = profileReducer(state, action);

	// 3.expectation
	expect(newState.posts.length).toBe(3);
});

it(`after deleting length of messages shouldn't be decrement if id is incorrect`, () => {
	// 1. test data
	let action = deletePost(1000);
	// 2. action
	let newState = profileReducer(state, action);

	// 3.expectation
	expect(newState.posts.length).toBe(4);
});