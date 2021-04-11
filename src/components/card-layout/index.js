import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import BasicTable from '../tableComponent'

const useStyles = makeStyles ({
  root: {
    minWidth: 275,
    maxWidth: 400,
    marginTop: 150,
    marginLeft: 100
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
    marginTop: 50
  }
});

export default function SimpleCard(props) {
  const classes = useStyles();

  return (
    <Card //className={classes.root}
      style={props.style}
    >
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.title}
        </Typography>
        <Typography variant="button" component="h2">
          {props.heading}
        </Typography>
        <div style={{marginTop:'5px'}}>
          <Typography style={{marginTop:'13px'}} variant="button" component="h5" color="primary">
              {props.homeTeam}
          </Typography>
          <Typography variant="body1" component="h2">
            {props.vs}
          </Typography>
          <Typography variant="button" component="h2" color="error">
            {props.awayTeam}
          </Typography>
          {props.tableComp && <BasicTable/>}
        </div>
        
      </CardContent>
    </Card>
  );
}
