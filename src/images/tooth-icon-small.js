import React from 'react';
import IconButton from 'material-ui/lib/icon-button';

const styles = {
  button: {
    width: 20, height: 20,
    padding: 0,
  },
  icon: {
    width: 20, height: 20,
  },
};

const ToothIcon = () => (
    <IconButton style={styles.button} iconStyle={styles.icon} iconClassName="tooth-icon" />
);

export default ToothIcon
