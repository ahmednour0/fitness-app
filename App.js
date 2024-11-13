import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import StackNavigator from './StackNavigator';
import { FitnessContext } from './context';

export default function App() {
  return (
    <FitnessContext>
    <SafeAreaProvider>
      <StackNavigator />
    </SafeAreaProvider>
  </FitnessContext>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
