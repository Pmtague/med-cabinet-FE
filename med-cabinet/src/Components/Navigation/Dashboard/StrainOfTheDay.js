import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'


export default function StrainOfTheDay() {
  
  
    return (

    
    <React.Fragment >
      <CssBaseline />
      <Container maxWidth="sm">
        <Card className='sod'>
      <CardActionArea>
        <CardMedia>
      <CardMedia
          component="img"
          alt="Strain of The Day"
          strain="Blue Dream type {"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Strain of The Day"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Blue Dream
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            'Blue Dream, a sativa-dominant hybrid originating 
          in California, has achieved legendary status among West Coast strains. 
          Crossing a Blueberry indica with the sativa Haze, Blue Dream balances 
          full-body relaxation with gentle cerebral invigoration. Novice and veteran 
          consumers alike enjoy the level effects of Blue Dream, which ease you gently 
          into a calm euphoria. Some Blue Dream phenotypes express a more indica-like look and 
          feel, but the sativa-leaning variety remains most prevalent. With a sweet berry 
          aroma redolent of its Blueberry parent, Blue Dream delivers swift symptom relief 
          without heavy sedative effects. This makes Blue Dream a popular daytime medicine for patients 
          treating pain, depression, nausea, and other ailments requiring a high THC strain.'
          </Typography>
        </CardContent>
        </CardMedia>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '50vh' }} />
      </Container>
    </React.Fragment>
  );
}