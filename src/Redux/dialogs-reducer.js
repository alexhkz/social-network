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
		{ id: 5, message: 'Privet!' }
	]
};

const dialogsReducer = (state = initialState, action) => {
	switch(action.type) {
		case SEND_MESSAGE:
			let body = action.newMessageBody;
			return { 
				...state,
				messages: [...state.messages, {id: 6, message: body}]
			};
		default:
			return state;
	}
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;