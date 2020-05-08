import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import * as Progress from 'react-native-progress';
import { Feather } from '@expo/vector-icons';
import * as Speech from 'expo-speech';

import styles from './styles';
import Acert from '../../assets/imgAcert.png'
import ImgErro from '../../assets/imgErro.jpg'


export default class Result extends Component{
    constructor(props){
        super(props);
        this.state = {
            text: 0
        }
    }

    loadTalk(){
        let message = "";
        if (this.props.hints > 7)
            message = `Você acertou ${this.props.hints} e errou ${this.props.failures}! Meus parabéns!`    
        else if(this.props.hints > 5)
            message = `Você acertou ${this.props.hints} e errou ${this.props.failures}! Muito bem!`
        else
            message = `Você acertou ${this.props.hints} e errou ${this.props.failures}! Tente melhorar na próxima vez!`
        this.setState({text: message})
    }

    async speaking(){
        await this.loadTalk();
        Speech.speak(this.state.text, {
            language: 'pt-BR'
        });
    }
    render() {
       return (
            <View style={styles.container}>
                <View style={styles.resul}>
                    <Text style={styles.textResul} > Resultado </Text>
                </View>
                <View style={styles.inutil}>
                    <View style={styles.hints}>
                        <Image source={Acert} style={ styles.imgAcert }/>
                        <Text style={styles.textHints} >{ this.props.hints }</Text>
                    </View>
                    <View style={styles.failures}>
                        <Image source={ImgErro} style={ styles.imgErro }/>
                        <Text style={styles.textFailures}> { this.props.failures } </Text>
                    </View>
                </View>

                <Progress.Bar  color="rgba(0, 168, 107, 1)" unfilledColor="rgba(255, 99, 71, 1)" borderWidth={1} borderColor="#000000" borderRadius={15} width={350} height={35}  ndeterminate={false} progress={(this.props.hints)/10} />
                
                <TouchableOpacity style={styles.option} onPress={() => this.speaking()} >
                    <Feather name="volume-2" size={25} style={styles.textOption} /> 
                </TouchableOpacity>
            </View>
        );
    };
}