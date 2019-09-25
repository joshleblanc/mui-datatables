import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { fade } from '@material-ui/core/styles/colorManipulator';

const styles = theme => ({
  baseContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    zIndex: 110
  },
  overlay: {
    display: 'table',
    width: '100%',
    height: '100%',
    backgroundColor: fade(theme.palette.background.paper, 0.7)
  },
  progressContainer: {
    display: 'table-cell',
    width: '100%',
    height: '100%',
    verticalAlign: 'middle',
    textAlign: 'center'
  }
})

class LoaderOverlay extends React.Component {
  render() {
    const { classes } = this.props;
    return(
      <div className={classes.baseContainer}>
        <div className={classes.overlay}>
          <div className={classes.progressContainer}>>
            <CircularProgress />
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(LoaderOverlay);