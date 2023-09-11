import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigation from './src/navigation/AppNavigation'
import Store from "./src/redux/store";
import { Provider } from 'react-redux'


export default function App() {
  return (
    <Provider store={Store}>
      <AppNavigation />
    </Provider>
  );
}