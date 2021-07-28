import React from 'react';
import preloader from '../../../assets/images/preloader.svg';

let Preloader = (props) => {
	return <div style={{ backgroundColor: 'white', width: 50 }}>
	<img src={preloader} alt='loading' />
</div>
}

export default Preloader;