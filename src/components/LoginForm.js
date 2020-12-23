import React from 'react'
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'

export default function LoginForm(props) {
    const {chanceForm}= props;
    return (
        <View>
            <Text>Login Form</Text>
            <TouchableOpacity  onPress={chanceForm} >
                <Text style={styles.btnText}>Registrate</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    btnText:{
        color:"#fff",
        fontSize:18
    },
})
