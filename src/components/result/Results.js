import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles'


export default class Challenge extends Component{
    constructor(props){
        super(props);
    }

    render() {
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textHeader} > Resultados </Text>
            </View>
            <View style={styles.containerContext}>
                <Text style={styles.textButton}> 
                    Acertos: <Text style={styles.textHints} >{ this.props.hints }</Text>
                </Text>
                <Text style={styles.textButton}> 
                    Erros: <Text style={styles.textFails}> { this.props.filures } </Text>
                </Text>
            </View>
        </View>
    };
}