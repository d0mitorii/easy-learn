import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native'; // Import Image

export default function App() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('./assets/logo.png')} // Use require for local images
        style={styles.logo} // Apply the style
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 300, // Set width to 100
    height: 300, // Set height to 100
    backgroundColor: "transparent",
    resizeMode: 'contain' // This ensures the aspect ratio is maintained
  }
});
