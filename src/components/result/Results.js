import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles'


export default class Challenge extends Component{
    constructor(props){
        super(props);
    }
    
    navigationToContext(){
        navigation.navigate('Context');
    }
    
    navigationToHome(){
        navigation.navigate('Home');
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
                    Erros: <Text style={styles.textFails}> { this.props.fails } </Text>
                </Text>

                <View style={styles.footer}>
                    <TouchableOpacity style={styles.backContext} onPress={ () => this.navigarionToContexts()}>
                        <Text style={styles.textButton}> Voltar </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.backHome} onPress={ () => this.navigarionToHome()}>
                        <Text style={styles.textButton}> Sair dessa bagaça </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    };
}