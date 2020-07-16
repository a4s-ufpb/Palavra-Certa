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
            hintsPorcents: 0,
            failurePorcents: 0
        }
    }
    
    calculateResultPercents(hints, failures){
        const total = hints + failures;
        const totalAcertosPorcentagem = (100 * hints) / total;
        const totalErrosPorcentagem = 100 - totalAcertosPorcentagem;
        const arrayReturn = [totalAcertosPorcentagem, totalErrosPorcentagem];

        return arrayReturn;
    }

    async speaking(){
        Speech.speak(`Você acertou ${this.state.hintsPorcents}% e errou ${this.state.failurePorcents}%`, {
            language: 'pt-BR'
        });
    }
    render() {
       this.state.hintsPorcents = this.calculateResultPercents(this.props.hints, this.props.failures)[0];
       this.state.failurePorcents = this.calculateResultPercents(this.props.hints, this.props.failures)[1];
       return (
            <View style={styles.container}>
                <View style={styles.resul}>
                    <Text style={styles.textResul} > Resultado </Text>
                </View>
                <View style={styles.inutil}>
                    <View style={styles.hints}>
                        <Image source={Acert} style={ styles.imgAcert }/>
                        <Text style={styles.textHints} >{ this.state.hintsPorcents }%</Text>
                    </View>
                    <View style={styles.failures}>
                        <Image source={ImgErro} style={ styles.imgErro }/>
                        <Text style={styles.textFailures}> { this.state.failurePorcents }% </Text>
                    </View>
                </View>

                <Progress.Bar  color="rgba(0, 168, 107, 1)" unfilledColor="rgba(255, 99, 71, 1)" borderWidth={1} borderColor="#000000" borderRadius={15} width={325} height={35}  indeterminate={false} progress={(this.props.hints/10)} />
                
                <TouchableOpacity style={styles.option} onPress={() => this.speaking()} >
                    <Feather name="volume-2" size={25} style={styles.textOption} /> 
                </TouchableOpacity>
            </View>
        );
    };
}