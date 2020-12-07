const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

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
			dialogs: [
				{ id: 1, name: 'Alex' },
				{ id: 2, name: 'Andrew' },
				{ id: 3, name: 'Mike' },
				{ id: 4, name: 'Anna' },
				{ id: 5, name: 'Victor' },
				{ id: 6, name: 'Irene' }
			],
			messages: [
				{ id: 1, message: 'Hi!' },
				{ id: 2, message: 'Sup man?' },
				{ id: 3, message: 'Yo bro!' },
				{ id: 4, message: 'Hey!' },
				{ id: 5, message: 'Privet!' },
				{ id: 6, message: 'How are you?' }
			],
			newMessageBody: ""
			
			
		},
		sidebar: {}
	},
	_callSubscriber() {
		console.log('State changed');
	},

	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;   //observer
	},
	
	dispatch(action) {
		if (action.type === ADD_POST) {
			let newPost = {
				id: 5,
				message: this._state.profilePage.newPostText,
				likesCount: 0
			};
		
			this._state.profilePage.posts.push(newPost);
			this._state.profilePage.newPostText = '';
			this._callSubscriber(this._state);
		} else if (action.type === UPDATE_NEW_POST_TEXT) {
			this._state.profilePage.newPostText = action.newText;
			this._callSubscriber(this._state);
		} else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
			this._state.dialogsPage.newMessageBody = action.body;
			this._callSubscriber(this._state);
		} else if (action.type === SEND_MESSAGE) {
			let body = this._state.dialogsPage.newMessageBody;
			this._state.dialogsPage.newMessageBody = '';
			this._state.dialogsPage.messages.push({id: 6, message: body});
			this._callSubscriber(this._state);
		}
	}
}

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) => 
	({type: UPDATE_NEW_POST_TEXT, newText: text});

export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageBodyCreator = (body) => 
	({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default store;

window.store = store;
// store - OOP

