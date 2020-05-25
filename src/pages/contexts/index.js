import React, { useState, useEffect } from 'react';
import { SafeAreaView, ActivityIndicator, Alert, Modal, FlatList, Image, View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import api from '../../service/api';
import styles from './styles';
import warning from '../../assets/Warning.png';

export default function Context(){
    
    const navigation = useNavigation();

    const [ contexts, setContexts ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ total, setTotal ] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);
    
    function back(){
        navigation.goBack();
    }    
    
    function teste(){
        Alert.alert(
            "Erro na conexão",
            "Não foi possível conectar!",
            [
                {
                    text: 'Ok!',
                    onPress: () => back()
                }
            ],
            {cancelable: true}
        );
    }

    async function loadContexts(){
        if(loading) return;
        
        if(total > 0 && total === contexts.length) return;
        
        setLoading(true);
        
        api.get('contexts')
            .then(response => {
                setContexts([...response.data]);
                setTotal(contexts.length);
                setLoading(false);
            }).catch(erro => teste());
    }

    async function navigationToChallenge(item){
        
        // const response = await api.get(`challenges`);
        // const  allchallenges = response.data; 
        // navigation.navigate('Challenge', { challenges: allchallenges, nameContext: item.name });

        const responseContext = await api.get(`contexts/${item.id}`);
        const context = responseContext.data;

        const { challenges } = context;

        console.log(challenges);
        console.log("Indo para challenge")

        if(challenges.length == 0) navigation.navigate('NotFound');
        else navigation.navigate('Challenge', { challenges, nameContext: item.name });
        
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
                    <Text style={styles.textHeader} > Temas </Text>
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