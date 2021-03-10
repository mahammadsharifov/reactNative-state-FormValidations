// (c) Mahammad Sharifov
// Using `STATE MANAGEMENT`
// Form validation: check whether fields are empty or not

import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  // function to listen, when clicking a button and 'flashing up' message
  buttonClickListener = () => {
    // instantiate state object
    const {username, password} = this.state
    // check all fields are empty or not
    if(username.length == 0 || password.length == 0){
      alert("Please, complete all fields!")
      console.log("Please, complete all fields!")
    }else{
      alert("Form is ready to send!")
    }
  }

  render(){
    return(
      <View style = {styles.container}>
        <TextInput 
          style = {styles.TextInputStyle}
          placeholder = "Enter Your Username..."
          onChangeText = { (username) => this.setState({username}) }    
        />
        <TextInput 
          style = {styles.TextInputStyle}
          placeholder = "Enter Your Password..."
          onChangeText = { (password) => this.setState({password}) }    
        />
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