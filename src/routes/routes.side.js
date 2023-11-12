import HomeScreen from "../screens/HomeScreen";
import ContactsScreen from "../screens/ContactsScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import OrdersScreen from "../screens/OrdersScreen";
import TeamScreen from '../screens/Team/TeamScreen';
import NewsIndexScreen from '../screens/News/NewsIndexScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import ServiceListScreen from '../screens/Services/ServiceListScreen';
import Logout from "../screens/Logout";

export default [
    {
        name: 'Home',
        component: HomeScreen,
        title: 'Главная',
    },
    {
        name: 'Team',
        component: TeamScreen,
        title: 'Команда'
    },
    {
        name: 'NewsIndex',
        component: NewsIndexScreen,
        title: 'Новости и анонсы'
    },
    {
        name: 'Contacts',
        component: ContactsScreen,
        title: 'Контакты',
        hasBack: true,
    },
    {
        name: 'Profile',
        component: ProfileScreen,
        title: 'Мой профиль',
        hasBack: true,
    },
    {
        name: 'ServiceList',
        component: ServiceListScreen,
        title: 'Наши услуги',
        hasBack: true,
    },
    {
        name: 'Logout',
        component: Logout,
        title: 'Выход',
        hasBack: false,
    },
    /*{
        name: 'Notifications',
        component: NotificationsScreen,
        title: 'Уведомления'
    },
    {
        name: 'Orders',
        component: OrdersScreen,
        title: 'Мои заказы'
    },*/
];
