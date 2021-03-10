// (c) Mahammad Sharifov
// Using `STATE MANAGEMENT`
// Single TextInput `validation` in REACT-NATIVE

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      TextInputValue: '',
      ErrorStatus : false,
     }
  }
  
  onEnterText = (TextInputValue) => {
    if(TextInputValue.length <= 3){
      this.setState({TextInputValue : TextInputValue, ErrorStatus : true}) ;
    }else{
        this.setState({TextInputValue : TextInputValue, ErrorStatus : false}) ;
    }
  }
  
  buttonClickListener = () => {
    const { TextInputValue }  = this.state ;
    if (TextInputValue.length <= 3){
      Alert.alert("User name is not valid!");
    }else{
      Alert.alert("User name is ready to send :)");
    }
  }
  
  render() {
    return (
      <View style = {styles.container}>
        <TextInput
          style = {styles.TextInputStyle}
          // Adding hint in TextInput using Placeholder option.
          placeholder = "Enter Your User Name"
          //set the value in state.
          onChangeText = {TextInputValue => this.onEnterText(TextInputValue)}
        />

        { this.state.ErrorStatus == true ? (
            <Text style = {styles.errorMessage}>
              * User name can not be less than 3 symbols!
            </Text>
          ) : null  
        }

        <Button
          onPress = {this.buttonClickListener}
          title = "Submit"
          color = "#009999"
        />
      </View>
    );
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