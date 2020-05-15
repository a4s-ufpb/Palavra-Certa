import React from 'react';
import NotFound from '../../components/notFound/challengeNotFound';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { SafeAreaView, View, Text } from 'react-native';

import styles from './styles';

export default function NotFoundChallenge(){
    
    const navigation = useNavigation();

    function back(){
        navigation.goBack();
    }
    
    return (
        <SafeAreaView style={[styles.container]}>
            <View style={styles.header}>
                <Feather onPress={() => {back()}} name="arrow-left" size={25}/>
                <Text style={styles.textHeader} > Sem desafios </Text>
            </View>
            <View style={[styles.mainContainer, {zIndex: 110}]} >
                <NotFound />
            </View>
        </SafeAreaView>
    );
}

