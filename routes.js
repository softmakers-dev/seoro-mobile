import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import SermonsScreen from './screens/sermons/SermonsScreen';
import SermonWatchScreen from './screens/sermons/SermonWatchScreen';
import ScripturesScreen from './screens/scriptures/ScripturesScreen';
import ScriptureDetailScreen from './screens/scriptures/ScriptureDetailScreen';
import IntroductionScreen from './screens/introduction/IntroductionScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import EntranceScreen from './screens/entrance/EntranceScreen';

const HEADER_BG_COLOR = '#8585E1';

const SermonStack = createNativeStackNavigator();
const SermonNavigator = () => {

    return (
        <SermonStack.Navigator
            initialRouteName='Sermons'
            screenOptions= {{
                headerStyle: {
                    backgroundColor: HEADER_BG_COLOR,
                },
                headerTintColor: '#FFFFFF',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 20,
                },
                headerBackTitle: null,
                headerTruncatedBackTitle: null,
                headerBackTitleVisible: false
            }}
        >
            <SermonStack.Screen
                name='Sermons'
                component={SermonsScreen}
                options={{title: '설교듣기'}}
                />
            <SermonStack.Screen
                name='SermonWatch'
                component={SermonWatchScreen}
                options={{headerShown: false}}
                />
        </SermonStack.Navigator>
    )
}

const ScriptureStack = createNativeStackNavigator();
const ScriptureNavigator = () => {

    return (
        <ScriptureStack.Navigator
            initialRouteName='Scriptures'
            screenOptions= {{
                headerStyle: {
                    backgroundColor: HEADER_BG_COLOR,
                },
                headerTintColor: '#FFFFFF',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 20,
                },
                headerBackTitle: null,
                headerTruncatedBackTitle: null,
                headerBackTitleVisible: false
            }}
        >
            <ScriptureStack.Screen
                name='Scriptures'
                component={ScripturesScreen}
                options={{title: '묵상나눔'}}
                />
            <ScriptureStack.Screen
                name='ScriptureDetail'
                component={ScriptureDetailScreen}
                />
        </ScriptureStack.Navigator>
    )
}

const IntroductionStack = createNativeStackNavigator();
const IntroductionNavigator = () => {

    return(
        <IntroductionStack.Navigator
            screenOptions= {{
                headerStyle: {
                    backgroundColor: HEADER_BG_COLOR,
                },
                headerTintColor: '#FFFFFF',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 20,
                },
                headerBackTitle: null,
                headerTruncatedBackTitle: null,
            }}
        >
            <IntroductionStack.Screen
                name='Introduction'
                component={IntroductionScreen}
                options={{title: '교회소개'}}
                />
        </IntroductionStack.Navigator>
    )
}

const MainStack = createBottomTabNavigator();
const MainNavigator = () => {

    return (
        <MainStack.Navigator
            initialRouteName='SermonList'
            screenOptions={{
                headerShown: false,
                headerBackTitle: null,
                headerTruncatedBackTitle: null
            }}
        >
            <MainStack.Screen
                name='SermonList'
                component={SermonNavigator}
                options={{
                    tabBarLabel: '설교',
                    headerShown: false
                }}
                />
            <MainStack.Screen
                name='ScriptureList'
                component={ScriptureNavigator}
                options={{
                    tabBarLabel: '묵상',
                    headerShown: false
                }}
                />
            <MainStack.Screen
                name='IntroductionList'
                component={IntroductionNavigator}
                options={{
                    tabBarLabel: '교회소개',
                    headerShown: false
                }}
                />
        </MainStack.Navigator>
    )
}

const RootStack = createNativeStackNavigator();
const AppNavigator = () => {

    return(
        <NavigationContainer>
            <RootStack.Navigator
                initialRouteName={'Entrance'}
            >
                <RootStack.Screen
                    name={'Entrance'}
                    component={EntranceScreen}
                />
                <RootStack.Screen
                    name={'Main'}
                    component={MainNavigator}
                    options={{headerShown: false}}
                    />
            </RootStack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;
