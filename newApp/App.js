import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <>
    <View style={styles.container}>
      <Text>Hello world nigga yoo what is up   </Text>
      <StatusBar style="auto" />
    </View>
    <View>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Text>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
