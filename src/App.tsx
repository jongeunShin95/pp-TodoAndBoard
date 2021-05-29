import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BoardApp from './containers/BoardApp';
import HeaderApp from './containers/HeaderApp';
import TodoApp from './containers/TodoApp';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginTop: '200px',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    body: {
      height: '500px'
    }
  }),
);


function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container fixed>
        <Grid container spacing={3}>
          <Grid  item xs={12}>
            <Paper className={classes.paper}><HeaderApp /></Paper>
          </Grid>

          <Grid item xs={12}>
          <Paper className={`${classes.paper} ${classes.body}`}>
            <Switch>
              <Route path="/Todo" component={TodoApp} />
              <Route path="/Board" component={BoardApp} exact />
              <Route path="/Board/:id" component={BoardApp} exact />
            </Switch>
          </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
