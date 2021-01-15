import React,{useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ActionBar from "./ActionBar";
import AddBirthday from "./AddBirthday";


export default function ListBirthday(props) {
    const {user} = props;
    const [showList, setShowList] = useState(true)
    return (
        <View style={styles.container}>
            {showList? (
            <>
                <Text>ListBirthday</Text>
                <Text>ListBirthday</Text>
                <Text>ListBirthday</Text>
            </>
            ):(
                <AddBirthday user={user}
                setShowList={setShowList}
                setReloadData={setReloadData}/>
            )}
            <ActionBar showList={showList} setShowList={setShowList}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        height:"100%",
    }
})
