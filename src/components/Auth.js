import React, {useState} from 'react';
import {View,Text,StyleSheet,Image} from "react-native";

export default function Auth(){
    const [isLogin, setIsLogin] = useState(true)
    return(
        <View style={Styles.View}>
            <Image style={Styles.logo}source={require("../assets/logo.png")}/>
            <Text>Auth</Text>
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