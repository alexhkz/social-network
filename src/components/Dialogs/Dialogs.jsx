import React from 'react';
import classes from './Dialogs.module.css';

const Dialogs = (props) => {
	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogsItems}>
				<div className={classes.dialog + ' ' + classes.active}>
					Alex
				</div>
				<div className={classes.dialog}>
					Andrew
				</div>
				<div className={classes.dialog}>
					Mike
				</div>
				<div className={classes.dialog}>
					Sasha
				</div>
				<div className={classes.dialog}>
					Victor
				</div>
				<div className={classes.dialog}>
					Maxim
				</div>
			</div>
			<div className={classes.messages}>
				<div className={classes.message}>Hi!</div>
				<div className={classes.message}>Sup man!</div>
				<div className={classes.message}>Yo!</div>
			</div>
		</div>

	)
}

export default Dialogs;