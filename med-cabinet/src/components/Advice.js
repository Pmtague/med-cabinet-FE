import React from 'react';
import axios from 'axios';

// import { Link } from 'react-router-dom';

import AdviceCard from './AdviceCard';

class Advice extends React.Component {
	state = {
		advice: [],
	};

	componentDidMount() {
		axios
			.get('http://strainapi.evanbusse.com/dqEbrK0/strains/search/name/Candy')
			.then(res => {
				console.log('Advice Data', res.data)
				this.setState({advice: res.data})
			})
			.catch(err => {
				console.log('Advice Error', err.response)
			})
	};

	render() {
		return (
			<div>
				<h2>Suggested Strains</h2>
				<div className='advice-list'>
					{this.state.advice.map(adv => (
						<AdviceCard key={ adv.id } advice={ adv } />
					))}
				</div>
			</div>
		);
	}
}

export default Advice;

// function AdviceDetails({ adv }) {
// 	return (
// 		<Link to={`/advice/${ adv.id }`}>
// 			<AdviceCard advice={ adv } />
// 		</Link>
// 	)
// }