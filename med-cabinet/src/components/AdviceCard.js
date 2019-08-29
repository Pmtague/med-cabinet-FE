// import React from 'react';

// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Typography from '@material-ui/core/Typography';
// import { flexbox } from '@material-ui/system';

// const useStyles = makeStyles({
// 	card: {
// 		display: 'flex',
// 		justifyContent: 'flexStart',
// 	  	minWidth: 70,
// 	  	maxWidth: '30%',
// 		margin: '2%',
// 	},

// 	media: {
// 	  height: 140,
// 	},
//       });
      
// function AdviceCard(props) {
// 	const classes = useStyles();
      
// 	return (
// 	  <Card className={classes.card}>
// 	    <CardActionArea>
// 	      <CardMedia
// 		className={classes.media}
// 		image="https://darkheartnursery.com/wp-content/uploads/2014/07/lf_blue_dream-708x900.jpg"
// 		title="Blue Dream Strain"
// 	      />
// 	      <CardContent>
// 		<Typography gutterBottom variant="h5" component="h2">
// 		  { props.advice.name }
// 		</Typography>
// 		<Typography variant="body2" color="textSecondary" component="p">
// 		  { props.advice.race }
// 		</Typography>
// 	      </CardContent>
// 	    </CardActionArea>
// 	  </Card>
// 	);
// }

// export default AdviceCard;