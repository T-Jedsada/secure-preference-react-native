import React from 'react';
import {useColorScheme, View, Text} from 'react-native';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View>
      <Text>{`isDarkMode: ${isDarkMode}`}</Text>
    </View>
  );
};

export default App;
