import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';

const DialogItem = (props) => {
	let path = '/dialogs/' + props.id;
	return (
		<div className={classes.dialog + ' ' + classes.active}>
			<NavLink to={path}>{props.name}</NavLink>
		</div>
	)
}

const Message = (props) => {
	return (
		<div className={classes.message}>{props.message}</div>
	)
}

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


	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogsItems}>
				<DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
				<DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
				<DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
				<DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
				<DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
				<DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />
			</div>
			<div className={classes.messages}>
				<Message message={messagesData[0].message} />
				<Message message={messagesData[2].message} />
				{/* <Message message={messagesData[3].message} />
				<Message message={messagesData[4].message} />
				<Message message={messagesData[5].message} />
				<Message message={messagesData[6].message} /> */}
			</div>
		</div>

	)
}

export default Dialogs;