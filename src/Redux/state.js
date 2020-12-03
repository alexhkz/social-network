import {reRenderEntireTree} from './../render';

let state = {

	profilePage: {
		posts: [
			{ id: 1, message: 'Hi!' },
			{ id: 2, message: 'Sup man?' },
			{ id: 3, message: 'Yo bro!' },
			{ id: 4, message: 'Hey!' },
			{ id: 5, message: 'Privet!' },
			{ id: 6, message: 'How are you?' }
		],
		newPostText: 'someWords'
	},
	dialogsPage: {
		messages: [
			{ id: 1, message: 'Hi!' },
			{ id: 2, message: 'Sup man?' },
			{ id: 3, message: 'Yo bro!' },
			{ id: 4, message: 'Hey!' },
			{ id: 5, message: 'Privet!' },
			{ id: 6, message: 'How are you?' }
		],
		
		dialogs: [
			
			{ id: 1, name: 'Alex' },
			{ id: 2, name: 'Andrew' },
			{ id: 3, name: 'Mike' },
			{ id: 4, name: 'Anna' },
			{ id: 5, name: 'Victor' },
			{ id: 6, name: 'Irene' }
		]
	},
	sidebar: {}
}

export let addPost = () => {
	let newPost = {
		id: 5,
		message: state.profilePage.newPostText,
		likesCount: 0
	};

	state.profilePage.posts.push(newPost);
	state.profilePage.newPostText = '';
	reRenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
	state.profilePage.newPostText = newText;
	reRenderEntireTree(state);
}

export default state;