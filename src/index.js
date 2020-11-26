import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
	{ id: 1, message: 'Hi, how are you?', likesCount: 12 },
	{ id: 2, message: "It's my first post", likesCount: 11 }
];

let dialogs = [
	{ id: 1, name: 'Alex' },
	{ id: 2, name: 'Andrew' },
	{ id: 3, name: 'Mike' },
	{ id: 4, name: 'Anna' },
	{ id: 5, name: 'Victor' },
	{ id: 6, name: 'Irene' }
];

let messages = [
	{ id: 1, message: 'Hi!' },
	{ id: 2, message: 'Sup man?' },
	{ id: 3, message: 'Yo bro!' },
	{ id: 4, message: 'Hey!' },
	{ id: 5, message: 'Privet!' },
	{ id: 6, message: 'How are you?' }
];

ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages} />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
