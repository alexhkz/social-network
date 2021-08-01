import React from 'react';
import { createField, Input, Textarea } from './../../Common/FormsControls/FormsControls';
import { reduxForm } from 'redux-form';

const ProfileDataForm = ({ profile }) => {
	return (
		<form>
			<div>
				<button onClick={() => { }}>Save</button>
			</div>
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
				{createField('My professional skills', 'LookingForAJobDescription', [], Textarea)}
			</div>
			<div>
				<b>About me</b>: {profile.aboutMe}
				{createField('AboutMe', 'aboutMe', [], Textarea)}
			</div>
			{/* <div>
				<b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
					return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
				})}
			</div> */}
		</form>
	);
};

const ProfileDataReduxForm = reduxForm({ form: 'editProfile' })(ProfileDataForm);

export default ProfileDataReduxForm;