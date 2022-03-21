import React, { useState } from 'react'
import { View, StyleSheet, Text, TextInput, Keyboard, Dimensions, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';

const StartGameScreen = props => {

    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState('');
    let confirmedOutput
    if (confirmed) {
        confirmedOutput = (
            <Card style={styles.inputContainer}>
                <Text style={styles.text}>Numero Elegido </Text>
                <NumberContainer> {selectedNumber}</NumberContainer>
                <TouchableOpacity style={styles.touchableButton}
                    onPress={() => props.onStartGame(selectedNumber)} >
                    <Text style={styles.textButton}>Empezar Juego</Text>
                </TouchableOpacity>
            </Card>)
    }
    const handleReset = () => {
        setEnteredValue('');
        setConfirmed(false);

    }
    const handleConfirm = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            return;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue('');
        Keyboard.dismiss();

    }


    const handleInput = (inputText) => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.container}>
                <Text style={styles.text}>Comenzar Juego</Text>
                <Card style={styles.inputContainer}>
                    <Text style={styles.textinput}>
                        Elija un numero
                    </Text>
                    <TextInput style={styles.input}
                        keyboardType='numeric'
                        blurOnSubmit
                        autoCorrect={false}
                        maxLength={2}
                        placeholder='0'
                        onChangeText={handleInput}
                        value={enteredValue}

                    />
                    <View style={styles.buttoncontainer}>
                        <TouchableOpacity style={styles.touchableButton}
                            onPress={handleReset}>
                            <Text style={styles.textButton}>Limpiar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touchableButton}
                            onPress={handleConfirm}>
                            <Text style={styles.textButton}>Confirmar</Text>
                        </TouchableOpacity>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
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
    inputContainer: {
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        width: 300,
        maxWidth: '80%',
        marginBottom: 10
    },
    textinput: {
        alignItems: 'center',
        fontFamily: 'Spinnaker-Regular',
        fontSize: 20,
        marginVertical: 10,
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 10,
        textAlign: 'center',
        marginBottom: 10,
        color: '#000',
        fontFamily: 'Spinnaker-Regular',
        fontSize: 20,
    },
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
    }
})

export default StartGameScreen