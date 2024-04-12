import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import Sound from 'react-native-sound';

const App = () => {
  const [currentSound, setCurrentSound] = useState(null);

  const playSound = (audioFile) => {
    if (currentSound) {
      currentSound.stop(); // Stop currently playing sound if any
      setCurrentSound(null); // Reset currentSound state
    }

    const sound = new Sound(audioFile, Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      // loaded successfully
      console.log('duration in seconds: ' + sound.getDuration() + 'number of channels: ' + sound.getNumberOfChannels());

      // Play the sound with an onEnd callback
      sound.play((success) => {
        if (success) {
          console.log('successfully finished playing');
        } else {
          console.log('playback failed due to audio decoding errors');
        }
      });

      setCurrentSound(sound); // Set currentSound state
    });
  };

  const stopSound = () => {
    if (currentSound) {
      currentSound.stop();
      setCurrentSound(null);
    }
  };

  return (
    <View style={styles.con}>
      <Text style={styles.heading}>Music Player App</Text>
      <View style={styles.audioControls}>
        <View style={styles.audioControl}>
          <TouchableOpacity onPress={() => playSound('music.mp3')} style={styles.greenButton}>
            <Text style={styles.buttonText}>Start Sound 1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={stopSound} style={styles.greenButton}>
            <Text style={styles.buttonText}>Stop Sound 1</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.audioControl}>
          <TouchableOpacity onPress={() => playSound('supra.mp3')}style={styles.greenButton}>
            <Text style={styles.buttonText}>Start Sound 2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={stopSound} style={styles.greenButton}>
            <Text style={styles.buttonText}>Stop Sound 2</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.audioControl}>
          <TouchableOpacity onPress={() => playSound('music3.mp3')}style={styles.greenButton}>
            <Text style={styles.buttonText}>Start Sound 3</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={stopSound} style={styles.greenButton}>
            <Text style={styles.buttonText}>Stop Sound 3</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.audioControl}>
          <TouchableOpacity onPress={() => playSound('music4.mp3')}style={styles.greenButton}>
            <Text style={styles.buttonText}>Start Sound 4</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={stopSound} style={styles.greenButton}>
            <Text style={styles.buttonText}>Stop Sound 4</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.audioControl}>
          <TouchableOpacity onPress={() => playSound('music5.mp3')}style={styles.greenButton}>
            <Text style={styles.buttonText}>Start Sound 5</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={stopSound} style={styles.greenButton}>
            <Text style={styles.buttonText}>Stop Sound 5</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.audioControl}>
          <TouchableOpacity onPress={() => playSound('music6.mp3')}style={styles.greenButton}>
            <Text style={styles.buttonText}>Start Sound 6</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={stopSound} style={styles.greenButton}>
            <Text style={styles.buttonText}>Stop Sound 6</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.audioControl}>
          <TouchableOpacity onPress={() => playSound('music7.mp3')}style={styles.greenButton}>
            <Text style={styles.buttonText}>Start Sound 7</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={stopSound} style={styles.greenButton}>
            <Text style={styles.buttonText}>Stop Sound 7</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  con: {
    flex: 1,
    backgroundColor: 'black',
  },
  heading: {
    fontSize: 28,
    textAlign: 'center',
    color: 'white',
    marginTop: 20,
  },
  audioControls: {
    marginTop: 20,
    marginLeft: 20,
  },
  audioControl: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    marginLeft: 10,
  },
  greenButton: {
    backgroundColor: 'green',
    padding: 10,
    margin:3,
    borderRadius: 5,
  },
});
