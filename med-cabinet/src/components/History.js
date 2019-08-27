import React from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

import HistoryCard from './HistoryCard';

class History extends React.Component {
	state = {
		history: [],
	};

	componentDidMount() {
		axios
			.get('http://strainapi.evanbusse.com/dqEbrK0/strains/search/name/Candy')
			.then(res => {
				console.log('History Data', res.data)
				this.setState({history: res.data})
			})
			.catch(err => {
				console.log('History Error', err.response)
			})
	};

	render() {
		return (
			<div className='History-list'>
				{this.state.history.map(hist => (
					<HistoryCard key={ hist.id } history={ hist } />
				))}
			</div>
		);
	}
}

export default History;

// function HistoryDetails({ hist }) {
// 	return (
// 		<Link to={`/history/${ hist.id }`}>
// 			<HistoryCard History={ hist } />
// 		</Link>
// 	)
// }