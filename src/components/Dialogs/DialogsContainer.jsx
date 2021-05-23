import { connect } from 'react-redux';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../Redux/dialogs-reducer'
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage,
		isAuth: state.auth.isAuth
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		updateNewMessageBody: (body) => {
			dispatch(updateNewMessageBodyCreator(body));
		},
		sendMessage: () => {
			dispatch(sendMessageCreator());
		}
	}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;