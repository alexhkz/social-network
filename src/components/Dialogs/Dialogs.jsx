import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

	let dialogsData = [
		{ id: 1, name: 'Alex' },
		{ id: 2, name: 'Andrew' },
		{ id: 3, name: 'Mike' },
		{ id: 4, name: 'Anna' },
		{ id: 5, name: 'Victor' },
		{ id: 6, name: 'Irene' }
	];

	let messagesData = [
		{ id: 1, message: 'Hi!' },
		{ id: 2, message: 'Sup man?' },
		{ id: 3, message: 'Yo bro!' },
		{ id: 4, message: 'Hey!' },
		{ id: 5, message: 'Privet!' },
		{ id: 6, message: 'How are you?' }
	];

	let dialogsElements = dialogsData
		.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

	let messagesElements = messagesData
		.map(message => <Message message={message.message} />);


	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogsItems}>
				{dialogsElements}
			</div>
			<div className={classes.messages}>
				{messagesElements}
			</div>
		</div>

	)
}

export default Dialogs;