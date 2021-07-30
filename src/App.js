import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { HashRouter, Route, withRouter } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './Redux/app-reducer';
import Preloader from './components/Common/Preloader/Preloader';
import store from './Redux/redux-store';
import { withSuspense } from './Hoc/withSuspense';
// import ProfileContainer from './components/Profile/ProfileInfo/ProfileContainer';
// import DialogsContainer from './components/Dialogs/DialogsContainer';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileInfo/ProfileContainer'));

class App extends Component {
	componentDidMount() {
		this.props.initializeApp();
	}

	render() {
		if (!this.props.initialized) {
			return <Preloader />
		}

		return (
			<div className='app-wrapper'>
				<HeaderContainer />
				<Navbar />
				<div className='app-wrapper-content'>
					<Route exact path='/profile/:userId?' 
						render={ withSuspense(ProfileContainer)} />

					<Route path='/dialogs' 
						render={ withSuspense(DialogsContainer)} />

					<Route path='/login' 
						render={ () => <LoginPage /> } />

					<Route path='/news' 
						render={ () => <News /> } />

					<Route path='/music' 
						render={ () => <Music /> } />

					<Route path='/settings' 
						render={ () => <Settings /> } />
						
					<Route path='/users' 
						render={ () => <UsersContainer /> } />
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized
});

const AppContainer = compose(
	withRouter,
	connect(mapStateToProps, {initializeApp}))(App);

let SamuraiJSApp = (props) => {
	return <HashRouter >
	<Provider store={store}>
		<AppContainer />
	</Provider>
</HashRouter>
}

export default SamuraiJSApp;