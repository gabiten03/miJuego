import React from "react";
import { View, StyleSheet } from "react-native";

const Card = props => {
    return (
        <View style={{ ...styles.inputCard, ...props.style }}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({

    inputCard: {
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        width: 300,
        maxWidth: '80%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },

}
)



export default Card;
