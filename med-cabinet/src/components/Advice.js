import React from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

import { AdviceCard } from './AdviceCard';

export default class Advice extends React.Component {
	state = {
		advice: [],
	};

	componentDidMount() {
		axios
			.get('')
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
			<div className='advice-list'>
				{this.state.advice.map(adv => (
					<AdviceDetails key={ adv.id } advice={ adv } />
				))}
			</div>
		);
	}
}

function AdviceDetails({ adv }) {
	return (
		<Link to={`/advice/${ adv.id }`}>
			<AdviceCard advice={ adv } />
		</Link>
	)
}