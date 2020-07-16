import React, { useRef, useEffect } from 'react';
import { Animated, StyleSheet } from 'react-native';

const HorizontalProgressBar = props => {
  const fedeAnim = useRef(new Animated.Value(0)).current;
  
  useEffect(() => {
      Animated.timing(
          fedeAnim,
          {
              toValue: 395,
              duration: 15000
          }
      ).start();
  }, [props.restart]);
  
  setTimeout(() => {
      fedeAnim.setValue(0);
  }, 15000);

  return (
        <Animated.View style={[styles.barProgress, {
            width: fedeAnim
        }]} />
  );
};

const styles =  StyleSheet.create({
    barProgress: {
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#000',
        borderWidth: 1,
        height: 4
    },
})
