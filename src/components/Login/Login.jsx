import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import requiredField from '../../utils/Validators/Validators';
import { createField, Input } from '../Common/FormsControls/FormsControls';
import login from '../../Redux/auth-reducer';
import { Redirect } from 'react-router';
import style from './../Common/FormsControls/FormsControls.module.css';

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
	return (
		<form onSubmit={handleSubmit}>
			{createField('Email', 'email', [requiredField], Input)}
			{createField('Password', 'password', [requiredField], Input, { type: 'password' })}
			{createField(null, 'rememberMe', [], Input, { type: 'checkbox' }, 'remember me')}

			{captchaUrl && <img src={captchaUrl} alt='captcha' />}
			{captchaUrl && createField('Symbols from image', 'captcha', [requiredField], Input, {})}

			{error && <div className={style.formSummaryError}>
				{error}
			</div>}
			<div>
				<button>Login</button>
			</div>
		</form>
	)
};

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {
	const onSubmit = (formData) => {
		props.login(formData.email, formData.password, formData.rememberMe)
	};

	if (props.isAuth) {
		return <Redirect to={'/profile'} />
	}

	return <div>
		<h1>Login</h1>
		<LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
	</div>
};

const mapStateToProps = (state) => ({
	captchaUrl: state.auth.captchaUrl,
	isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, { login })(Login);