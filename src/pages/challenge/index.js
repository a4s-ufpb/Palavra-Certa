import React from 'react';
import {  SafeAreaView, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

// import api from '../../service/api';
import Challenge from '../../components/challenge/Challenge'

import styles from './styles';
export default function Home(){

    const navigation = useNavigation();

    function back(){
        navigation.goBack();
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Feather onPress={() => {back()}} name="arrow-left" size={25}/>
                <Text style={styles.textHeader} > Challenge </Text>
            </View>
            <View style={styles.challenge} >
                <Challenge />
            </View>
        
        </SafeAreaView>
    );
}

