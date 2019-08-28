import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../../utils/axiosWithAuth.js';

// import { Link } from 'react-router-dom';

import HistoricalDataCard from './HistoricalDataCard.js';
import "./HistoricalData.css";

const History = () => {
	const [ historyData, setHistoryData ] = useState([]);

	useEffect(() => {
		axiosWithAuth()
			.get('http://strainapi.evanbusse.com/dqEbrK0/strains/search/name/Candy')
			.then(res => {
				console.log(res.data);
				setHistoryData(res.data);
			})
			.catch(err => {
				console.log('Error retrieving data: ', err.response);
			});
	}, [])

	return (
		<div className='history-list'>
			<h3>Historical Data</h3>
			<div className="history-card">
				{historyData.map(hist => (
					<HistoricalDataCard key={hist.id} history={hist} />
				))}
			</div>
		</div>
	);
}

export default History;

// function HistoryDetails({ hist }) {
// 	return (
// 		<Link to={`/history/${ hist.id }`}>
// 			<HistoryCard History={ hist } />
// 		</Link>
// 	)
// }