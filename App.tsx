import * as React from 'react';
import {StatusBar} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider as StoreProvider} from 'react-redux';
import {ThemeProvider} from 'styled-components';
import {theme} from './src/global/styles/theme';
import {store} from './src/store';
import {Routes} from './src/routes';
import {Background} from './src/components/Background';

function App() {
  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <PaperProvider>
          <Background>
            <StatusBar
              barStyle="light-content"
              backgroundColor="transparent"
              translucent
            />
            <Routes />
          </Background>
        </PaperProvider>
      </ThemeProvider>
    </StoreProvider>
  );
}

export default App;
