import React, { useState } from 'react';

import {
  SafeAreaView,
  Text,
  StyleSheet,

} from 'react-native';

import Header from './components/Header';
import StartGameScreen from './Pages/StartGameScreen';
import GameScreen from './Pages/GameScreen';

const App = () => {
  const [userNumber, setUserNumber] = useState();
  const handleStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  }

  let content = <StartGameScreen onStartGame={handleStartGame} />;
  if (userNumber) {
    content = <GameScreen />;
  }

  return (
    <SafeAreaView style={styles.safeAreacontainer}>
      <Header title={'Adivina el numero'} />
      {content}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreacontainer: {
    flex: 1,
    backgroundColor: '#fff',

  },

});

export default App;
