import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import LocalHotelIcon from '@material-ui/icons/LocalHotel';
import WcIcon from '@material-ui/icons/Wc';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));



export default function Place({place}){
  const classes = useStyles();

  const history = useHistory();
  console.log(place);

    // const handleBook = (placeName) => {
    //     history.push(`/book/${placeName}`);
    // }
    const handlePlaceDetails= (placeName) => {
      history.push(`/place/${placeName}`);
  }
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {place.avatar}
          </Avatar>
        }
        title={place.title}
      />

      <CardMedia
        className={classes.media}
        image={place.imgUrl}
        title="Paella dish"
      />
      {/* <img src={`/images/${place.placeName}.png`} alt=""/> */}
      {/* <CardContent>
        {/* <Typography variant="body2" color="textSecondary" component="p">
          {place.description}
        </Typography> */}
      {/* </CardContent> */} 
      <CardActions disableSpacing>
        {/* <IconButton aria-label="add to favorites">
          <LocalHotelIcon />: {place.bed} 
        </IconButton>
        <IconButton aria-label="share">
          <WcIcon />: {place.capacity} 
        </IconButton>
        <IconButton aria-label="price">
          <AttachMoneyIcon />: {place.price} 
        </IconButton> */}
        {/* <Button onClick={() => handleBook(place.placeName)} variant="contained" color="primary">
            Book
        </Button> */}
        <Button onClick={() => handlePlaceDetails(place.placeName)} variant="contained" color="primary">
            Booking ->
        </Button>
      </CardActions>
    </Card>
  );
}
