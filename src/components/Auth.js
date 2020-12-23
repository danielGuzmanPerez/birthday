import React, {useState} from 'react';
import {View,Text,StyleSheet,Image} from "react-native";
import LoginForm from"./LoginForm";
import RegisterForm from './RegisterForm';

export default function Auth(){
    const [isLogin, setIsLogin] = useState(true)
    const chanceForm = () =>{
        setIsLogin(!isLogin);
    }
    return(
        <View style={Styles.View}>
            <Image style={Styles.logo}source={require("../assets/logo.png")}/>
            {isLogin ? <LoginForm chanceForm={chanceForm}/>: <RegisterForm chanceForm={chanceForm}/>}
        </View>
    );
}
const Styles= StyleSheet.create({
    View:{
        flex:1,
        alignItems:"center",
    },
    logo:{
        width:"80%",
        height:240,
        marginTop:50,
        marginBottom:50
    }
})