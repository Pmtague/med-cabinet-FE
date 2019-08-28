import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardData from './CardData';

import {Link} from 'react-router-dom';
import axios from 'axios';

const useStyles = makeStyles({
  card: {
    width: 345,
  },
  media: {
    height: 270,
  },
});

export default function StrainCards2() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://darkheartnursery.com/wp-content/uploads/2014/07/lf_blue_dream-708x900.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {CardData.strain}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           <div>{CardData.abr}</div>
           <div>{CardData.type} </div>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Save
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}