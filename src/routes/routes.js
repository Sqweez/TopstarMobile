import HomeScreen from "../screens/HomeScreen";
import ContactsScreen from "../screens/ContactsScreen";
import TeamScreen from '../screens/Team/TeamScreen';
import TeamMemberScreen from '../screens/Team/TeamMemberScreen';
import NewsIndexScreen from '../screens/News/NewsIndexScreen';
import NewsShowScreen from '../screens/News/NewsShowScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import ServiceListScreen from '../screens/Services/ServiceListScreen';
import ServiceDetailsScreen from '../screens/Services/ServiceDetailsScreen';
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
        title: 'Команда',
        hasBack: true,
    },
    {
        name: 'TeamMember',
        component: TeamMemberScreen,
        title: 'Команда',
        hasBack: true,
    },
    {
        name: 'NewsIndex',
        component: NewsIndexScreen,
        title: 'Новости и анонсы',
        hasBack: true,
    },
    {
        name: 'NewsShow',
        component: NewsShowScreen,
        title: 'Новости и анонсы',
        hasBack: true,
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
        title: '',
        hasBack: false,
        emptyLayout: true
    },
    {
        name: 'ServiceList',
        component: ServiceListScreen,
        title: 'Услуги',
        hasBack: true,
    },
    {
        name: 'ServiceDetails',
        component: ServiceDetailsScreen,
        title: '',
        hasBack: true,
    },
    {
        name: 'Logout',
        component: Logout,
        hasBack: false,
        title: '',
    }
];

/*export default [
    {
        name: 'Home',
        component: HomeScreen,
        title: 'Главная',
    },
    {
        name: 'Register',
        component: RegistrationScreen,
        title: 'Регистрация',
        emptyLayout: true,
    },
    {
        name: 'Login',
        component: LoginScreen,
        title: 'Авторизация',
        emptyLayout: true,
    },
    {
        name: 'Contacts',
        component: ContactsScreen,
        title: 'Контакты',
        hasSearch: false,
    },
    {
        name: 'Notifications',
        component: NotificationsScreen,
        title: 'Уведомления',
        hasSearch: false,
    },
    {
        name: 'Orders',
        component: OrdersScreen,
        title: 'Мои заказы',
        hasSearch: false,
        hasBack: true
    },
    {
        name: 'Profile',
        component: ProfileScreen,
        title: 'Профиль'
    },
    {
        name: 'Catalog',
        component: CatalogScreen,
        title: 'Каталог',
        hasBack: true,
    },
    {
        name: 'Category',
        component: CategoryScreen,
        title: 'Категории',
        hasBack: true,
    },
    {
        name: 'Product',
        component: ProductScreen,
        title: '',
        hasBack: true,
        hasSearch: false,
        hasBottomBorder: false,
    },
    {
        name: 'Cart',
        component: CartScreen,
        title: 'Корзина',
        hasBack: true,
        hasSearch: false,
    },
    {
        name: 'Payment',
        component: PaymentScreen,
        title: 'Оплата',
        hasBack: true,
        hasSearch: false,
        hasBottomBorder: false,
    },
    {
        name: 'Favorites',
        component: FavoritesScreen,
        title: 'Избранное',
        hasBack: true,
        hasSearch: false,
    },
    {
        name: 'PasswordChange',
        component: PasswordChangeScreen,
        title: 'Изменение пароля',
        hasBack: true,
        hasSearch: false,
    },
    {
        name: 'PhoneChange',
        component: PhoneChangeScreen,
        title: 'Изменение телефона',
        hasBack: true,
        hasSearch: false,
    },
    {
        name: 'CityChange',
        component: CityChangeScreen,
        title: 'Сменить город',
        hasBack: true,
        hasSearch: false,
    },
    {
        name: 'CitySelectScreen',
        component: CitySelectScreen,
        title: 'Выбрать город',
        emptyLayout: true
    },
    {
        name: 'ProductList',
        component: ProductListScreen,
        title: 'Поиск',
        hasBack: true,
        hasSearch: true,
    },
];*/

