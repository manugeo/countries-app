import React from 'react';
// import TextField from '@material-ui/core/TextField';
import { Button, FormGroup, FormControlLabel, Checkbox } from '@material-ui/core';

const colors = {
  primary: '#3d3d3d'
};

const SignIn = ({ onSignIn = () => {}}) => {
  const styles = {
    container: {
      height: '100%',
      paddingLeft: 24,
      paddingRight: 24,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    signInText: {
      fontSize: 24,
      color: colors.primary,
      textAlign: 'center',
      margin: 0
    },
    newUserText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: colors.primary,
      textAlign: 'center',
      marginTop: 16,
      marginBottom: 0
    },
    customInput: {
      borderStyle: 'solid',
      borderWidth: 2,
      borderColor: colors.primary,
      padding: 8,
      fontSize: 16,
      color: colors.primary
    },
    usernameInput: {
      marginTop: 16
    },
    passwordInput: {
      marginTop: 8
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.signInText}>Sign In</h2>
      <p style={styles.newUserText}>New User? <span style={{ color: '#587fff' }}>Create an account</span></p>

      <input placeholder='Username or email' style={{ ...styles.customInput, ...styles.usernameInput }} />
      <input placeholder='Password' type='password' style={{ ...styles.customInput, ...styles.passwordInput }} />
      <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Keep me signed in" style={{ marginTop: 8 }} />
        <Button variant="contained" color="primary" style={{ marginTop: 8 }} onClick={() => onSignIn()} >Sign In</Button>
      </FormGroup>
    </div>
  );
};

export default SignIn;