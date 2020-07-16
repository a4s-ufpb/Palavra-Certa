import React, { useState, useEffect, useRef } from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, Modal, Animated } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import * as Speech from 'expo-speech';

import Result from '../../components/result/Results';
import generateAnswers from '../../utils/generateAnswers';

import styles from './styles';
import sucess from '../../assets/Success.png';
import fail from '../../assets/Error.png';
import warning from '../../assets/Warning.png'

export default function Challenge(){
    const navigation = useNavigation();
    const [challenges, setChallenges] = useState([]);

    const [modalVisible, setModalVisible] = useState(false);
    const [image, setImage] = useState({});
    const [description, setDescription] = useState("");
    const [height, setHeight] = useState(0);

    const [hints, setHints] = useState(0);
    const [failures, setFailures] = useState(0);
    const [count, setCount] = useState(1);
    const [total, setTotal] = useState(10);

    const [restart, setRestart] = useState(true);

    const route = useRoute();
    const routeChallenges = route.params.challenges;
    const context = route.params.nameContext;

    const fedeAnim = useRef(new Animated.Value(0)).current;
   
    const HorizontalProgressBar = () => {        
        return (
              <Animated.View style={[styles.barProgress, {
                  width: fedeAnim
              }]} />
        );
      };

    useEffect(() => {
        Animated.timing(
            fedeAnim,
            {
                toValue: 395,
                duration: 5000
            }
        ).start();
        checkTime();
    }, [restart]);

    function back(){
        navigation.goBack();
    }

    function viewModal(image, description, heigth){
        setImage(image);
        setDescription(description);
        setHeight(heigth);        
        setModalVisible(true);
        hiddenModal();    
    }

    function checkTime(){
        setTimeout(() => {
            viewModal(warning, "Tempo acabado", 250);
            challengeAcert("", "", true);
        }, 5000)
    }

    function hiddenModal(){
        setTimeout(() => {
            setModalVisible(false);
        }, 1000)
    }

    async function challengeAcert(option1, option2, flag){
        if(flag){ // IF TIME OUT
            setCount(count + 1);
            const [challenge, ...rest] = challenges;
            setChallenges(rest);
            return;
        }
        if(option1 === option2) {
            setHints(hints + 1);
            viewModal(sucess, "Você acertou!", 271);
        }else{
            setFailures(failures + 1);
            viewModal(fail,"Que pena, Continue tentando!", 300);
        }
        setCount(count + 1);
        setRestart(true);
        
        const [challenge, ...rest] = challenges;

        setChallenges(rest);
    }

    function speaking(text){
        Speech.speak(text, {
            language: 'pt-BR'
        });
    }

    useEffect(() => {
        async function loadChallenges(){
            let selecteds;
            const allChallenges = routeChallenges;
            if(allChallenges.length >= 10){
                selecteds = allChallenges.filter((item, index) => {
                    if(index < 10 && item.imageUrl !== null) return item;
                });
            }else{
                selecteds = allChallenges;
            }
            setChallenges(selecteds);  
            setTotal(selecteds.length);
        }
        loadChallenges();
        setRestart(false);
    }, []);

    function loadChallenge(item, index){
        const words = routeChallenges.map(item => item.word);
        const arrayMock = generateAnswers(words, item.word);
        return (
            <View key={index} style={[styles.challengeContainer, { zIndex: challenges.length - index }]}>
                <View style={styles.pointers} >
                    <Text style={styles.textPointers} >{count}/10</Text>
                </View>

                <HorizontalProgressBar restart={restart}/>
                
                <View style={styles.information}>
                    {   item.imageUrl ? 
                        <Image source={{uri: item.imageUrl}} style={styles.imageChallenge} />
                    :
                        <Text>Erro ao carregar imagem</Text>
                    }
                    
                    <TouchableOpacity style={styles.btnSpeak} onPress={() => speaking(item.word)} >
                        <Feather name="volume-2" size={20} style={styles.textBtnSpeak} /> 
                    </TouchableOpacity>
                </View>
                <View style={styles.submit}>
                    <View />
                    <View style={styles.submitLeft} >
                        <View />
                        <TouchableOpacity style={styles.option} onPress={() => challengeAcert(arrayMock[0], item.word, false)}>
                            <Text style={styles.textOption}> {arrayMock[0]} </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.option} onPress={() => challengeAcert(arrayMock[1], item.word, false)} >
                            <Text style={styles.textOption}> {arrayMock[1]} </Text>
                        </TouchableOpacity>
                        <View />
                    </View>
                    <View style={styles.submitRight} >
                        <View />
                        <TouchableOpacity style={styles.option} onPress={() => challengeAcert(arrayMock[2], item.word, false)} >
                            <Text style={styles.textOption}> {arrayMock[2]} </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.option} onPress={() => challengeAcert(arrayMock[3], item.word, false)} >
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
            <Modal animationType="slide" transparent={true} visible={modalVisible} >
                <View style={styles.centeredView}>
                    <View style={[{height}, styles.modalView]}>
                            <Image 
                            source={image}
                            style={styles.acert}
                            />
                        <Text style={styles.textAcert}> {description} </Text>
                    </View>
                </View>
            </Modal>
            <View style={styles.header}>
                <Feather onPress={() => {back()}} name="arrow-left" size={25}/>
                <Text style={styles.textHeader} > { context } </Text>
                
            </View>
            <View style={styles.challenge} >
                {   count <= total ? 
                    challenges.map((item, index) => loadChallenge(item, index))
                    :
                    <Result hints={hints} failures={failures}/>
                }
            </View>
        </SafeAreaView>
    );
}

