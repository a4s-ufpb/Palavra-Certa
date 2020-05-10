import React, { useState } from 'react';
import { View, Image, KeyboardAvoidingView, Text, TextInput,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import logo from '../../assets/logoMain.png'

export default function Home(){
    
    const navigation = useNavigation();

    const [user, setUser] = useState('');

    function navigateToContexts(user){
        navigation.navigate('Contexts', { user });
    }

    return (
        <KeyboardAvoidingView  behavior='padding' style={styles.container}>
            <View style={styles.form} >
                <Image source={logo} style={styles.logoMain}/>                
                <TextInput 
                    style={styles.textInput}
                    placeholder="Informe seu usuário"
                    placeholderTextColor="#aaa"
                    keyboardType="default"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={user}
                    onChange={user => setUser(user.nativeEvent.text)}
                />

                <TouchableOpacity style={styles.button} onPress={() => navigateToContexts(user)}>
                    <Text style={styles.textButton}> Acessar! </Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

