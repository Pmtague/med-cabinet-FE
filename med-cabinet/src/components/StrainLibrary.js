import React from 'react';
import axios from 'axios';

// import { Link } from 'react-router-dom';

import StrainCard from './StrainCard';

class StrainLibrary extends React.Component {
	state = {
		strain: [],
	};

	componentDidMount() {
		axios
			.get('http://strainapi.evanbusse.com/dqEbrK0/strains/search/name/Candy')
			.then(res => {
				console.log('Strain Data', res.data)
				this.setState({strain: res.data})
			})
			.catch(err => {
				console.log('Strain Error', err.response)
			})
	};

	render() {
		return (
			<div>
				<h2>Strains</h2>
				<div className='advice-list'>
					{this.state.strain.map(str => (
						<StrainCard key={ str.id } strain={ str } />
					))}
				</div>
			</div>
		);
	}
}

export default StrainLibrary;