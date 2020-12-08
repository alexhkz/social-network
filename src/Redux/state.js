import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

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

		this._state.profilePage = profileReducer(this._state.profilePage, action)
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
		this._state.sidebar = sidebarReducer(this._state.sidebar, action)

		this._callSubscriber(this._state);
	}
}

export default store;

window.store = store;
// store - OOP

