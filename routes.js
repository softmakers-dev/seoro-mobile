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
import { Icon } from '@ui-kitten/components';
import {StyleSheet} from 'react-native';
import {ScreenWidth} from './helpers';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import AppVersionScreen from './screens/introduction/AppVersionScreen';

// const HEADER_BG_COLOR = '#8585E1';
const HEADER_BG_COLOR = '#32CD32';

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
                options={({route}) => ({
                    title: '설교듣기',
                    headerRight: () => (
                        <FoundationIcon
                            style={{marginRight: 26}}
                            name="refresh"
                            size={30}
                            color="#ffffff"
                            onPress={() => {
                                const {onRefresh} = route.params;
                                onRefresh();
                            }}
                        />
                    )
                })}
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
                options={({route}) => ({
                    title: '묵상나눔',
                    headerRight: () => (
                        <FoundationIcon
                            style={{marginRight: 26}}
                            name="refresh"
                            size={30}
                            color="#ffffff"
                            onPress={() => {
                                const {onRefresh} = route.params;
                                onRefresh();
                            }}
                        />
                    )
                })}
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
                headerBackTitleVisible: false,
            }}
        >
            <IntroductionStack.Screen
                name='Introduction'
                component={IntroductionScreen}
                options={{
                    title: '교회소개',
                }}
                />
            <IntroductionStack.Screen
                name="AppVersion"
                component={AppVersionScreen}
                options={{
                    headerTitle: '앱 버전',
                    headerBackVisible: false
                }}
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
                headerTruncatedBackTitle: null,
                tabBarActiveTintColor: HEADER_BG_COLOR,
                tabBarLabelStyle: {
                    fontSize:15
                }
            }}
        >
            <MainStack.Screen
                name='SermonList'
                component={SermonNavigator}
                options={{
                    tabBarLabel: '설교',
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Icon style={styles.icon} fill='#8F9BB3' name='cast-outline'/>
                    )
                }}
                />
            <MainStack.Screen
                name='ScriptureList'
                component={ScriptureNavigator}
                options={{
                    tabBarLabel: '묵상',
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Icon style={styles.icon} fill='#8F9BB3' name='book-open-outline'/>
                    )
                }}
                />
            <MainStack.Screen
                name='IntroductionList'
                component={IntroductionNavigator}
                options={{
                    tabBarLabel: '교회소개',
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Icon style={styles.icon} fill='#8F9BB3' name='list-outline'/>
                    )
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
                    options={{headerShown: false}}
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

const styles = StyleSheet.create({
    icon: {
        width: 25,
        height: 25
    },
});

export default AppNavigator;
