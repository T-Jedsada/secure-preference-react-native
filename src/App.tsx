import 'react-native-gesture-handler';
import React from 'react';
import {useColorScheme, View, Text} from 'react-native';
import {ThemeProvider} from 'styled-components';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ThemeProvider theme={{}}>
      <View>
        <Text>{`isDarkMode: ${isDarkMode}`}</Text>
      </View>
    </ThemeProvider>
  );
};

export default App;
