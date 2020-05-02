import React, { Component} from 'react';
import { View, Image,Text, TouchableOpacity } from 'react-native';
import Result from '../result/Results';

import styles from './styles';
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

    navigationToContext(){
        navigation.navigate('Context');
    }
    
    navigationToHome(){
        navigation.navigate('Home');
    }
    
    loadChallenge(challenges){
        setState({challenge: challenges[this.counter]});
    }

    checkOption(opcao1, opcao2){
        opcao1 === opcao2 ? this.setState({ hits: hits += 1 }) : this.setState({ fail:fail += 1 });
        this.counter !== 10 ? this.setState({ counter:counter += 1 }) : null;
        setState({challenge: challenges[counter]});
    }

    render() {
        return (
            this.counter !== 10 ? 
        <View style={styles.container}>
            <View style={styles.header}>
                <Text> {this.state.counter}/10</Text>
            </View>
            <View style={styles.containerContext}>
                <Image style={styles.imagemContext} source={this.challenge.urlImage} />
                
                <View style={styles.options}>
                    <TouchableOpacity style={styles.option} onPress={ () => this.checkOption(opcao1, opcao2)}>
                        <Text style={styles.textButton}> { this.challenge.word } </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.option} onPress={ () => this.checkOption(opcao1, opcao2)}>
                        <Text style={styles.textButton}> { this.wordsRandom[0] } </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.option} onPress={ () => this.checkOption(opcao1, opcao2)}>
                        <Text style={styles.textButton}> {this.wordsRandom[0]} </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.option} onPress={ () => this.checkOption(opcao1, opcao2)}>
                        <Text style={styles.textButton}> {this.wordsRandom[0]} </Text>
                    </TouchableOpacity>
                </View>

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
        
        : 

        <Result 
            hints={this.hits}
            fails={this.fail}
        />

        
    );
    };
}