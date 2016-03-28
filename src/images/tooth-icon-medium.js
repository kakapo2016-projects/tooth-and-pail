import React from 'react'
import IconButton from 'material-ui/lib/icon-button'

const styles = {
  button: {
    width: 30, height: 30,
    padding: 3,
  },
  icon: {
    width: 30, height: 30,
    padding: 3,
  },
};

const ToothIcon = () => (
    <IconButton style={styles.button} iconStyle={styles.icon} iconClassName="tooth-icon" />
);

export default ToothIcon
