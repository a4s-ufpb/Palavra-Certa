import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Challenge from './pages/challenge';
import Contexts from './pages/contexts';
import Home from './pages/home';
import NotFound from './pages/notFoundChallenges';

const AppStack = createStackNavigator();

export default function Routes(){
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Home" component={Home}/>
                <AppStack.Screen  name="Contexts" component={Contexts} />
                <AppStack.Screen name="Challenge" component={Challenge} />
                <AppStack.Screen name="NotFound" component={NotFound} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}