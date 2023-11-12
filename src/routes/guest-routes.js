import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

export default [
    {
        name: 'Welcome',
        component: WelcomeScreen,
        emptyLayout: true,
        title: 'Welcome Screen',
    },
    {
        name: 'Login',
        component: LoginScreen,
        title: 'Авторизация',
        emptyLayout: true,
    },
];
