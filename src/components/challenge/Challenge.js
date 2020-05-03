import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image  } from 'react-native';
// import Result from '../result/Results';


import styles from './styles';
import imagem from '../../assets/logoMain.jpg'

export default class Challenge extends Component{
    constructor(props){
        super(props);
        this.challenge = {}
        this.challenges = []
        this.wordsRandom = []
        this.state = {
            counter: 0,
            hits: 0,
            fail: 0
        }
    }  

    render() {
        return (
            <View  style={styles.container}>
                <View style={styles.pointers} >
                    <Text style={styles.textPointers} >1/10</Text>
                </View>

                <Image source={imagem} style={styles.imageChallenge} />

                <View style={styles.submit} >
                    <TouchableOpacity style={styles.option} >
                        <Text style={styles.textOption}> Opção 1 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.option} >
                        <Text style={styles.textOption}> opção 2 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.option} >
                        <Text style={styles.textOption}> Opção 3 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.option} >
                        <Text style={styles.textOption}> Opção 4 </Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}