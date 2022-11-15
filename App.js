import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import LoginScreen, {SocialButton} from "react-native-login-screen";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  return (
    <View style={styles.container}>
      <LoginScreen
// logoImageSource={require("./assets/logo.png")}
  onLoginPress={() => {}}
  onSignupPress={() => {}}
  onEmailChange={(email) => {setEmail}}
  onPasswordChange={(password) => {setPassword}}
  textInputContainerStyle={{color:'red'}}
  disableSocialButtons
/>
{/* <SocialButton text="Continue with Google"  /> */}
      <StatusBar style="auto" />
      
    </View>
  );

    
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 
  loginscreen:{
    backgroundColor:'red',
  }
  
});
