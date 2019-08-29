import React, { useState, useEffect } from 'react';
import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AdviceCard from './AdviceCard';
import DashBoardCards from '../components/Navigation/Dashboard/DashBoardCards';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

  	return (
		<Typography
			component="div"
			role="tabpanel"
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}
		>
      			<Box p={3}>{children}</Box>
   		 </Typography>
  	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function a11yProps(index) {
	return {
		id: `vertical-tab-${index}`,
		'aria-controls': `vertical-tabpanel-${index}`,
	};
}

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		backgroundColor: '#be9f92',
		display: 'flex',
		height: 'auto',
	},
		tabs: {
		borderRight: `1px solid ${theme.palette.divider}`,
		width: '30%',
	},
}));

export default function AilmentTabs(props) {
	const classes = useStyles();
	const [value, setValue] = useState(0);
	const[advice, setAdvice] = useState([])

	useEffect(() => {
		// axiosWithAuth()
		axios
			.get('http://strainapi.evanbusse.com/dqEbrK0/strains/search/name/Candy')
			.then(res => {
				console.log('Advice Data', res.data)
				// localStorage.setItem('token', res.data.payload)
                		// props.history.push('/')
				setAdvice(res.data)
			})
			.catch(err => {
				console.log('Advice Error', err.response)
			})
	}, [])

	function handleChange(event, newValue) {
		setValue(newValue);
	}

	return (
		<div className={classes.root}>
			<Tabs
				orientation="vertical"
				variant="scrollable"
				value={value}
				onChange={handleChange}
				aria-label="Vertical tabs example"
				className={classes.tabs}
			>
				<Tab label="Stress" {...a11yProps(0)} />
				<Tab label="Pain" {...a11yProps(1)} />
				<Tab label="Nausea" {...a11yProps(2)} />
				<Tab label="Insomnia" {...a11yProps(3)} />
				<Tab label="Depression" {...a11yProps(4)} />
				<Tab label="Lack of Appetite" {...a11yProps(5)} />
				<Tab label="Muscle Spasms" {...a11yProps(6)} />
				<Tab label="Seizures" {...a11yProps(7)} />
				<Tab label="Fatigue" {...a11yProps(8)} />
				<Tab label="Inflammation" {...a11yProps(9)} />
				<Tab label="Spasticity" {...a11yProps(10)} />
				<Tab label="Eye Pressure" {...a11yProps(11)} />
				<Tab label="Cramps" {...a11yProps(12)} />
				<Tab label="Headaches" {...a11yProps(13)} />
			</Tabs>
			<TabPanel value={value} index={0}>
				{advice.map(adv => (
					<AdviceCard key={ adv.id } advice={ adv } />
				))}
			</TabPanel>
			<TabPanel value={value} index={1}>
				{advice.map(adv => (
					<AdviceCard key={ adv.id } advice={ adv } />
				))}
			</TabPanel>
			<TabPanel value={value} index={2}>
				{advice.map(adv => (
					<AdviceCard key={ adv.id } advice={ adv } />
				))}
			</TabPanel>
			<TabPanel value={value} index={3}>
				{advice.map(adv => (
					<AdviceCard key={ adv.id } advice={ adv } />
				))}
			</TabPanel>
			<TabPanel value={value} index={4}>
				{advice.map(adv => (
					<AdviceCard key={ adv.id } advice={ adv } />
				))}
			</TabPanel>
			<TabPanel value={value} index={5}>
				{advice.map(adv => (
					<AdviceCard key={ adv.id } advice={ adv } />
				))}
			</TabPanel>
			<TabPanel value={value} index={6}>
				{advice.map(adv => (
					<AdviceCard key={ adv.id } advice={ adv } />
				))}
			</TabPanel>
			<TabPanel value={value} index={7}>
				{advice.map(adv => (
					<AdviceCard key={ adv.id } advice={ adv } />
				))}
			</TabPanel>
			<TabPanel value={value} index={8}>
				{advice.map(adv => (
					<AdviceCard key={ adv.id } advice={ adv } />
				))}
			</TabPanel>
			<TabPanel value={value} index={9}>
				{advice.map(adv => (
					<AdviceCard key={ adv.id } advice={ adv } />
				))}
			</TabPanel>
			<TabPanel value={value} index={10}>
				{advice.map(adv => (
					<AdviceCard key={ adv.id } advice={ adv } />
				))}
			</TabPanel>
			<TabPanel value={value} index={11}>
				{advice.map(adv => (
					<AdviceCard key={ adv.id } advice={ adv } />
				))}
			</TabPanel>
			<TabPanel value={value} index={12}>
				{advice.map(adv => (
					<AdviceCard key={ adv.id } advice={ adv } />
				))}
			</TabPanel>
			<TabPanel value={value} index={13}>
				{advice.map(adv => (
					<AdviceCard key={ adv.id } advice={ adv } />
				))}
			</TabPanel>
			<DashBoardCards />
		</div>
  	);
}