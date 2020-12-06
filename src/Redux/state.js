let store = {
	_state: {

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
	},
	getState() {
		return this._state;
	},
	_callSubscriber() {
		console.log('State changed');
	},
	addPost() {
		let newPost = {
			id: 5,
			message: this._state.profilePage.newPostText,
			likesCount: 0
		};
	
		this._state.profilePage.posts.push(newPost);
		this._state.profilePage.newPostText = '';
		this._callSubscriber(this._state);
	},
	updateNewPostText(newText) {
		this._state.profilePage.newPostText = newText;
		this._callSubscriber(this._state);
	},
	subscribe(observer) {
		this._callSubscriber = observer;   //observer
	}
}

export default store;

window.store = store;
// store - OOP

