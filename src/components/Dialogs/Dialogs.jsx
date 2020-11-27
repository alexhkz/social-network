import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

	let dialogsElements = props.state.dialogs
		.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

	let messagesElements = props.state.messages
		.map(message => <Message message={message.message} />);

	let newPostElement = React.createRef();

	let addPost = () => {
		let text = newPostElement.current.value;
		alert(text);
	}

	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogsItems}>
				{dialogsElements}
			</div>
			<div className={classes.messages}>
				{messagesElements}
			</div>
			<div>
				<textarea ref={newPostElement}>Enter here</textarea>
			</div>
			<div>
				<button onClick={addPost}>Add post</button>
			</div>
		</div>

	)
}

export default Dialogs;