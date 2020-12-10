const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
	switch(action.type) {
		case UPDATE_NEW_MESSAGE_BODY:
			state.newMessageBody = action.body;
			return state;
		case SEND_MESSAGE:
			let body = state.newMessageBody;
			state.newMessageBody = '';
			state.messages.push({id: 6, message: body});
			return state;
		default:
			return state;
	}
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => 
	({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;