import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'



const Header = (props) => {


    return (
        <View style={styles.headercontainer} >
            <Text style={styles.headertext}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headercontainer: {
        height: Dimensions.get('window').height * 0.15,
        backgroundColor: '#028090'

    },
    headertext: {
        fontFamily: 'Spinnaker-Regular',
        color: '#fff',
        fontSize: 20,
        paddingVertical: Dimensions.get('window').height * 0.05,
        textAlign: 'center',
        textTransform: 'uppercase',

    }
})


export default Header