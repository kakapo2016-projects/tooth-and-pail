import React from 'react'
import ReactDOM from 'react-dom'
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';

// separate from the signup page 

export default class Login extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      open: false,
    };
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };
 
  render() {

    const actions = [
      <FlatButton
        label="Cancel"
        secondary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Dialog" onTouchTap={this.handleOpen} />
        <Dialog
          title="Please Login" 
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
      </div>
    );
  }
}


