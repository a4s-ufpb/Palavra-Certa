import React, { useState, useEffect } from 'react';
import {  SafeAreaView, View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Lottie from 'lottie-react-native';
import { Feather } from '@expo/vector-icons';

import api from '../../service/api';
import Result from '../../components/result/Results'

import generateAnswers from '../../utils/generateAnswers';

import styles from './styles';
import acertion from '../../assets/hint.json';
import failuration from '../../assets/failure.json';

export default function Home(){

    const navigation = useNavigation();
    const [challenges, setChallenges] = useState([]);
    
    const [hints, setHints] = useState(0);
    const [failures, setFailures] = useState(0);
    const [count, setCount] = useState(1);

    function back(){
        navigation.goBack();
    }

    function challengeAcert(option1, option2){
        if(option1 === option2) {
            animationAcert();  
            setHints(hints + 1);
            
        }else{
            animationErro();
            setFailures(failures + 1);
        }
        setCount(count + 1);

        const [challenge, ...rest] = challenges;
        
        setChallenges(rest);
    }

    function animationAcert(){
        return (
            <View > 
                <Lottie source={acertion} />
            </View>
        );
    }   

    function animationErro(){
        return (
            <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center', position: 'absolute', backgroundColor: 'blue'}}>
                <Lottie source={failuration}/>
            </SafeAreaView>
        );
    }

    useEffect(() => {
        async function loadChallenges(){
            const response = await api.get("challenges");
            let selecteds = []
            const allChallenges = response.data;
            if(allChallenges.length >= 10){
                selecteds = allChallenges.filter((item, index) => {
                    if(index < 10) return item;
                });
            }else{
                selecteds = allChallenges;
            }
            setChallenges(selecteds);  
        }
        loadChallenges();
    }, []);
    function loadChallenge(item, index){
        const arrayMock = generateAnswers(item.word);
        
        return (
            <View key={index} style={[styles.challengeContainer, { zIndex: challenges.length - index }]}>
                
                <View style={styles.pointers} >
                    <Text style={styles.textPointers} >{count}/10</Text>
                </View>

                <Image source={{uri: item.imageUrl}} style={styles.imageChallenge} />

                <View style={styles.submit}>
                    <View />
                    <View style={styles.submitLeft} >
                        <View />
                        <TouchableOpacity style={styles.option} onPress={() => challengeAcert(arrayMock[0], item.word)}>
                            <Text style={styles.textOption}> {arrayMock[0]} </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.option} onPress={() => challengeAcert(arrayMock[1], item.word)} >
                            <Text style={styles.textOption}> {arrayMock[1]} </Text>
                        </TouchableOpacity>
                        <View />
                    </View>
                    <View style={styles.submitRight} >
                        <View />
                        <TouchableOpacity style={styles.option} onPress={() => challengeAcert(arrayMock[2], item.word)} >
                            <Text style={styles.textOption}> {arrayMock[2]} </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.option} onPress={() => challengeAcert(arrayMock[3], item.word)} >
                            <Text style={styles.textOption}> {arrayMock[3]} </Text>
                            
                        </TouchableOpacity>
                        <View />
                    </View>
                    <View />
                </View>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Feather onPress={() => {back()}} name="arrow-left" size={25}/>
                <Text style={styles.textHeader} > Challenge </Text>
            </View>
            <View style={styles.challenge} >
                {   count < 11 ? 
                    challenges.map((item, index) => loadChallenge(item, index))
                    :
                    <Result hints={hints} failures={failures}/>
                }
            </View>
        </SafeAreaView>
    );
}

