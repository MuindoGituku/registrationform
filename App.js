import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import TextField from './components/textfield';
import FormHeader from './components/header';
import Buttons from './components/buttons';

export default function App() {
  const onPressedMain =()=>{
   alert('Successfully Registered to class!!\n Full Names: '+firstNameValue+' '+lastNameValue+'\nPhone Number: '+phoneNumberValue+'\nEmail Address: '+emailValue);

    onChangeFirstName('');
    onChangeLastName('');
    onChangePhoneNumber('');
    onChangeEmail('');
  }
  const onPressedSec =()=>{
    onChangeFirstName('');
    onChangeLastName('');
    onChangePhoneNumber('');
    onChangeEmail('');
  }

  const [firstNameValue, onChangeFirstName] = React.useState('');
  const [lastNameValue, onChangeLastName] = React.useState('');
  const [phoneNumberValue, onChangePhoneNumber] = React.useState('');
  const [emailValue, onChangeEmail] = React.useState('');
  
  return (
    <View style={styles.container}>
      <FormHeader></FormHeader>

      <TextField 
      value={firstNameValue}
      onChangedValue={firstNameValue=>onChangeFirstName(firstNameValue)}
      fieldLabel={"First Name"} contentType={"givenName"} keyboardType={"name-phone-pad"} 
      returnLabel={"Next"} returnType={"next"}/>

      <TextField
      value={lastNameValue}
      onChangedValue={lastNameValue=>onChangeLastName(lastNameValue)} 
      fieldLabel={"Last Name"} contentType={"givenName"} keyboardType={"name-phone-pad"} 
      returnLabel={"Next"} returnType={"next"}/>

      <TextField 
      value={phoneNumberValue}
      onChangedValue={phoneNumberValue=>onChangePhoneNumber(phoneNumberValue)}
      fieldLabel={"Phone Number"} contentType={"telephoneNumber"} keyboardType={"phone-pad"} 
      returnLabel={"Next"} returnType={"next"}/>

      <TextField 
      value={emailValue}
      onChangedValue={emailValue=>onChangeEmail(emailValue)}
      fieldLabel={"Email Address"} contentType={"emailAddress"} keyboardType={"email-address"} 
      returnLabel={"Done"} returnType={"done"}/>

      <Buttons onPressedMain={onPressedMain} onPressedSec={onPressedSec}></Buttons>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    backgroundColor: '#fff',
    alignItems: 'left',
    justifyContent: 'top',
  },
});
