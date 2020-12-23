
import React, { useEffect,useState} from "react";
import {StyleSheet,SafeAreaView,View,Text,StatusBar} from "react-native";
import Auth from "./src/components/Auth"
import firebase from './src/utils/firebase';
import "firebase/auth";

export default function App(){
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((response) => {
      setUser(response);
    });
  }, []);
  if(user === undefined)return null;

  return(
    <>
      <StatusBar barStyle="light-content"/>
      <SafeAreaView style={styles.backGround}>
        {user ? <Text>Estas logueado</Text> : <Auth/>}
      </SafeAreaView>
    </>
  );
}
const styles= StyleSheet.create({
  backGround:{
    backgroundColor:'#15212b',
    height:"100%",
  },
});