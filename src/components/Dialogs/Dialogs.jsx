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
	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogsItems}>
				<DialogItem name="Alex" id="1" />
				<DialogItem name="Andrew" id="2" />
				<DialogItem name="Mike" id="3" />
				<DialogItem name="Anna" id="4" />
				<DialogItem name="Victor" id="5" />
				<DialogItem name="Irene" id="6" />
			</div>
			<div className={classes.messages}>
				<Message message="Hi!" />
				<Message message="Sup man?" />
				<Message message="Yo bro!" />
			</div>
		</div>

	)
}

export default Dialogs;