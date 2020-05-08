import React, { useState, useEffect } from 'react';
import { SafeAreaView, ActivityIndicator ,FlatList, Image, View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import api from '../../service/api';
import styles from './styles';

export default function Home(){
    
    const navigation = useNavigation();

    const [ contexts, setContexts ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ total, setTotal ] = useState(0);
    const [ idContext, setIdContext ] = useState(0);
    
    function back(){
        navigation.goBack();
    }
    
    async function loadContexts(){
        if(loading) return;

        if(total > 0 && total === contexts.length) return;
        
        setLoading(true);

        const response = await api.get('contexts');
        
        setContexts([...response.data]);
        setTotal(contexts.length);
        setLoading(false)
    }

    async function navigationToChallenge(item){
        setIdContext(item.id);

        navigation.navigate('Challenge', {idContext});
    }

    function renderContext(item){        
        return (
            <View style={styles.context}>
                <Image source={{uri: item.imageUrl}} style={styles.imageContext} /> 
                <View style={styles.description} >
                    <Text style={styles.contextName}>{ item.name }</Text>
                    <TouchableOpacity style={styles.buttonIr} onPress={() => {navigationToChallenge(item)}}>
                        <Text style={styles.textButton}> <Feather name="arrow-right" size={16} />  </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    useEffect(() => {
        loadContexts();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
        { 
            loading ? <ActivityIndicator size="large" color="#CE9692"/> : 
            <>
                <View style={styles.header}>
                    <Feather onPress={() => {back()}} name="arrow-left" size={25}/>
                    <Text style={styles.textHeader} > Contexts </Text>
                </View>

                <FlatList 
                    style={styles.listContexts}
                    data={contexts}
                    keyExtractor={item => String(item.id)}
                    showsVerticalScrollIndicator={false}
                    onEndReached={loadContexts}
                    onEndReachedThreshold={0.8}
                    renderItem = {({ item }) => renderContext(item)} 
                /> 
            </> 
        } 
        </SafeAreaView>
    );
}