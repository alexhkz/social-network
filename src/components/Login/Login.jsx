import React from 'react';
import { Field, reduxForm } from 'redux-form';
import requiredField from '../../utils/Validators/Validators';
import { Input } from '../Common/FormsControls/FormsControls';

const LoginForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field placeholder={'Login'} name={'login'}
					validate={[requiredField]}
					component={Input} />
			</div>
			<div>
				<Field placeholder={'Password'} name={'password'}
					validate={[requiredField]}
					component={Input} />
			</div>
			<div>
				<Field component={Input} name={'remember me'} type={'checkbox'} /> remember me
			</div>
			<div>
				<button>Login</button>
			</div>
		</form>
	)
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {
	const onSubmit = (formData) => {
		console.log(formData)
	}

	return <div>
		<LoginReduxForm onSubmit={onSubmit} />
	</div>
}

export default Login;