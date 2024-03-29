import React from 'react';
import { createField, Input, Textarea } from './../../Common/FormsControls/FormsControls';
import { reduxForm } from 'redux-form';
import classes from './ProfileInfo.module.css';
import style from '../../Common/FormsControls/FormsControls.module.css';

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<button>Save</button>
			</div>
			{error && <div className={style.formSummaryError}>
				{error}
			</div>}
			<div>
				<b>Full name</b>:
				{createField('Full name', 'fullName', [], Input)}
			</div>
			<div>
				<b>Looking for a job</b>:
				{createField('', 'LookingForAJob', [], Input, { type: 'checkbox' })}
			</div>
			<div>
				<b>My professional skills</b>:
				{createField('My professional skills', 'lookingForAJobDescription', [], Textarea)}
			</div>
			<div>
				<b>About me</b>:
				{createField('AboutMe', 'aboutMe', [], Textarea)}
			</div>
			<div>
				<b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
					return <div key={key} className={classes.contact}>
						<b>{key}: {createField(key, 'contacts.' + key, [], Textarea)}</b>
					</div>
				})}
			</div>
		</form>
	);
};

const ProfileDataReduxForm = reduxForm({ form: 'editProfile' })(ProfileDataForm);

export default ProfileDataReduxForm;