import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import Card from '../components/Card'


const generateRandom = (min, max, exclude) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    const rndNumber = Math.floor(Math.random() * (max - min) + min)
    if (rndNumber === exclude) {
        return generateRandom(min, max, exclude)
    }
    else return rndNumber

}
const GameScreen = props => {
    const [currentGuess, setCurrentGuess] = useState(generateRandom(1, 100, props.userOption))
    return (
        <View style={styles.screen}>
            <Text style={styles.text}>Suposicion del oponente</Text>
            <Text style={styles.text}>{currentGuess}</Text>
            <Card>
                <View style={styles.buttoncontainer}>
                    <TouchableOpacity style={styles.touchableButton}
                        onPress={() => null}>
                        <Text style={styles.textButton}>Mayor</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchableButton}
                        onPress={() => null}>
                        <Text style={styles.textButton}>Menor</Text>
                    </TouchableOpacity>
                </View>
            </Card >
        </View >

    )
}

const styles = StyleSheet.create({
    buttoncontainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,

    },
    textButton: {
        fontFamily: 'Spinnaker-Regular',
        fontSize: 12,
        color: '#fff',
        textTransform: 'uppercase',
        paddingHorizontal: 15,
    },
    touchableButton: {
        backgroundColor: '#028090',
        borderRadius: 20,
        padding: 10,
        margin: 10
    },
    screen: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
    },
    text: {
        textAlign: 'center',
        color: '#000',
        fontFamily: 'Spinnaker-Regular',
        fontSize: 20,
        marginVertical: 20,
    },

})

export default GameScreen
