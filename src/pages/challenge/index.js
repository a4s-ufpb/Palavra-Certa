import React, { useState, useEffect } from 'react';
import {  SafeAreaView, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import api from '../../service/api';
import Challenge from '../../components/challenge/Challenge'

import styles from './styles';
export default function Home(){

    const navigation = useNavigation();
    const [challenges, setChallenges] = useState([]);
    const [challenge, setChallenge] = useState({});
    const [count, setCount] = useState(10);

    function back(){
        navigation.goBack();
    }

    async function loadChallenges(){
        const response = await api.get("challenges");
        const allChallenges = response.data;
        const selecteds = [];
        let i = 0;
        while(i < count) {
            selecteds.push(allChallenges[i]);
            ++i;
        }
        setChallenges(selecteds);
        setCount(count + i);
    }
    function loadChallenge(item){
        setChallenge(item);
    }

    useEffect(() => {
        loadChallenges();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Feather onPress={() => {back()}} name="arrow-left" size={25}/>
                <Text style={styles.textHeader} > Challenge </Text>
            </View>
            <View style={styles.challenge} >
                <Challenge currency={challenge}/>
            </View>
        
        </SafeAreaView>
    );
}

