import './App.css';
import SimpleCard from '../src/components/card-layout';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


function App() {
  return (
    <div className="App">

      <div style={{flexGrow: 1}}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit" style={{align: "center", flexGrow: 1}}>
              IPL Prediction Contest Dashboard (Alpha)
            </Typography>
          </Toolbar>
        </AppBar>
      </div> 


      <div style={{
        'display':'flex',
        'flexDirection':'row'
      }}>
      <div style={{'display':'flex', 'flexDirection':'column'}}>
        <SimpleCard 
          title='Game of the day'
          heading='12 April 2021'
          homeTeam='Rajasthan Royals'
          vs='vs'
          awayTeam='Punjab Kings'
          style={{
            minWidth: 275,
            maxWidth: 400,
            marginTop: 60,
            marginLeft: 100
          }}
          avatarNeeded = {true}
        />
        <SimpleCard
          title='Game Winners'
          style={{
            minWidth: 275,
            maxWidth: 400,
            marginTop: 30,
            marginLeft: 100
          }}
          heading='09,10,11 April 2021'
        />
      </div>
      <SimpleCard
          title='Points Table'
          style={{
            minWidth: 275,
            maxWidth: 800,
            marginTop: 60,
            marginLeft: 80
          }}
          tableComp = {true}
        />
      </div>
      <footer
        style={{position: 'fixed',
          bottom: 50,
          left: 100,
          fontSize: '12px'
        }}
      >Designed by Akhil J. Please reach out to me for suggestions or feedback.
      </footer>
    </div>
  );
}

export default App;
