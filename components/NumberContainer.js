import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

const NumberContainer = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.number}>
                {props.children}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

        padding: 10,
        borderRadius: 10,

        justifyContent: 'center',
        alignItems: 'center'

    },
    number: {
        fontSize: 30,
        color: '#028090',
        fontWeight: 'bold'

    }

})

export default NumberContainer; 
