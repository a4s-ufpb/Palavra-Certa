import React, { useState } from 'react';
import {  SafeAreaView, View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import api from '../../service/api';
import Challenge from '../../components/challenge/mock'

import styles from './styles';
export default function Home(){

    const route = useRoute();

    const [challenges, setChallenges] = useState([]);

    function back(){
        navigation.goBack();
    }

    const idContext = route.params.idContext;
    async function loadChallenge(){
        console.log(idContext)
        const allChallegens = await api.get('challenges');
        setChallenges(allChallegens);
    }

    loadChallenge();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Feather onPress={() => {back()}} name="arrow-left" size={25}/>
                <Text style={styles.textHeader} > Challenge </Text>
            </View>

           <Challenge challenges={challenges} />
        </SafeAreaView>
    );
}

