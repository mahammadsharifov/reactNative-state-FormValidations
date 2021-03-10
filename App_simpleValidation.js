// (c) Mahammad Sharifov
// Using `STATE MANAGEMENT`
// Simple `validation` form in REACT-NATIVE

import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: '',
      error_username: false,
      error_password: false
    }
  }
  // function to set states and to validate text fields
  onEnterText = (input, inputtype) => {
    if (inputtype == 'username'){
      if (input.length <= 3){
        this.setState({username: input, error_username: true});
      } else {
        this.setState({username: input, error_username: false});
      }
    }
    if (inputtype == 'password'){
      if (input.length <= 8){
        this.setState({password: input, error_password: true});
      } else {
        this.setState({password: input, error_password: false});
      }
    }    
  }
  // function to listen, when clicking a button and 'flashing up' message
  buttonClickListener = () => {
    const {username} = this.state
    const {password} = this.state
    if(username.length <= 3 || password.length <= 8){
      alert("Form is not valid!")
    }else{
      alert("Form is valid and ready to send!")
    }
  }

  render(){
    return(
      <View style = {styles.container}>
        <TextInput 
          style = {styles.TextInputStyle}
          placeholder = "Enter Your Username..."
          onChangeText = { (input) => this.onEnterText(input, "username") }    
        />
        {
          this.state.error_username == true ? (
            <Text style = {styles.errorMessage}>
              * User name can not be smaller than 3 symbols!
            </Text>
          ) : null
        }
        <TextInput 
          style = {styles.TextInputStyle}
          placeholder = "Enter Your Password..."
          onChangeText = { (input) => this.onEnterText(input, "password") }    
        />
        {
          this.state.error_password == true ? (
            <Text style = {styles.errorMessage}>
              * Password can not be smaller than 8 symbols!
            </Text>
          ) : null
        }
        <Button 
          onPress = {this.buttonClickListener}
          title = "Submit"
          color = "#009999"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    margin: 15
  },
  errorMessage: {
    fontSize: 14,
    color:"red",
    textAlign: 'left',
    paddingBottom: 10
  },
  TextInputStyle: {
    textAlign: 'left',
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    height: 40,
    borderWidth: 1,
    borderColor: 'silver',
  }
});