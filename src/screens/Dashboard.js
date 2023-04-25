import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import Background from '../components/Backg1';

const CreateAccountWidget = () => {
  useEffect(() => {
    // initialization code goes here
    return () => {
      // cleanup code goes here
    };
  }, []);

  return (
    <Background>
      <View style={styles.container}>
      <View style={styles.titleLogoContainer}>
    <Text style={styles.title}>ใบรับรองข้อมูลโควิด</Text>
    <Image source={require('../assets/logo1.png')} style={styles.logo} />
  </View>

        <View style={styles.imageContainer}>
          <View style={styles.imageWrapper}>
            <Image
              source={require('../assets/docsa.jpg')}
              resizeMode="cover"
              style={styles.image}
            />
            </View>
          </View>
        </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    borderStartColor: '#b8f5ba',
  },
  
  title: {
    fontSize: 25,
    color: '#000000',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageWrapper: {
    position: 'relative',
  },
  image: {
    width: 385,
    height: 590,
  },
  titleLogoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 20,
  },
  logo: {
    width: 50,
    height: 50,
  },
});

export default CreateAccountWidget;
