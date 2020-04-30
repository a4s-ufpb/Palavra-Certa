import React, { useState } from 'react';
import {  SafeAreaView } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

import api from '../../service/api';
import Challenge from '../../components/challenge/Challenge'

import styles from './styles';

export default function Home(){

    const route = useRoute();

    const [challenges, setChallenges] = useState([]);

    const idContext = route.params.idContext;
    async function loadChallenge(){
        const allChallegens = await api.get('challenges', { idContext });
        setChallenges(allChallegens);
    }


    return (
        <SafeAreaView style={styles.container}>
           <Challenge challenges={challenges} />
        </SafeAreaView>
    );
}

