import createStackNavigator from 'react-native-screens/createNativeStackNavigator';
import {NavigationContainer} from '@react-navigation/native';
import SermonsScreen from './screens/sermons/SermonsScreen';
import SermonWatchScreen from './screens/sermons/SermonWatchScreen';
import ScripturesScreen from './screens/scriptures/ScripturesScreen';
import ScriptureDetailScreen from './screens/scriptures/ScriptureDetailScreen';
import IntroductionScreen from './screens/introduction/IntroductionScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import EntranceScreen from './screens/entrance/EntranceScreen';

const SermonStack = createStackNavigator();
const SermonNavigator = () => {

    return (
        <SermonStack.Navigator>
            <SermonStack.Screen
                name='Sermons'
                component={SermonsScreen}
                />
            <SermonStack.Screen
                name='SermonWatch'
                component={SermonWatchScreen}
                />
        </SermonStack.Navigator>
    )
}

const ScriptureStack = createStackNavigator();
const ScriptureNavigator = () => {

    return (
        <ScriptureStack.Navigator>
            <ScriptureStack.Screen
                name='Scriptures'
                component={ScripturesScreen}
                />
            <ScriptureStack.Screen
                name='ScriptureDetail'
                component={ScriptureDetailScreen}
                />
        </ScriptureStack.Navigator>
    )
}

const IntroductionStack = createStackNavigator();
const IntroductionNavigator = () => {

    return(
        <IntroductionStack.Navigator>
            <IntroductionStack.Screen
                name='Introduction'
                component={IntroductionScreen}
                />
        </IntroductionStack.Navigator>
    )
}

const MainStack = createBottomTabNavigator();
const MainNavigator = () => {

    return (
        <MainStack.Navigator
            initialRouteName='Sermons'
        >
            <MainStack.Screen
                name='Sermons'
                component={SermonNavigator}
                />
            <MainStack.Screen
                name='Scriptures'
                component={ScriptureNavigator}
                />
            <MainStack.Screen
                name='Introduction'
                component={IntroductionNavigator}
                />
        </MainStack.Navigator>
    )
}

const RootStack = createStackNavigator();
const AppNavigator = () => {

    return(
        <NavigationContainer>
            <RootStack.Navigator
                initialRouteName='Entrance'
            >
                <RootStack.Screen
                    name='Entrance'
                    component={EntranceScreen}
                />
                <RootStack.Screen
                    name='Main'
                    component={MainNavigator}
                    />
            </RootStack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;
