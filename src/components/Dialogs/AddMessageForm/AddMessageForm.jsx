import React from 'react';
import { Field, reduxForm } from 'redux-form';
import requiredField, { maxLengthCreator } from '../../../utils/Validators/Validators';
import { Textarea } from '../../Common/FormsControls/FormsControls';

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field component={Textarea}
					validate={[requiredField, maxLength50]}
					placeholder='Enter your message' name='newMessageBody' />
			</div>
			<div>
				<button>Send</button>
			</div>
		</form>
	);
};

export default reduxForm({ form: 'dialog-add-message-form' })(AddMessageForm);