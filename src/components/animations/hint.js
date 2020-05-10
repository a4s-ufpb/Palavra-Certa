import React from 'react';
import { View } from 'react-native'

import styles from './styles';

export default class BasicExpamle extends React.Component {
    componentDudMount(){
        this.animation.play();
    }

    render(){
        return (
            <View style={styles.container} >
                
            </View>
        );
    }
}