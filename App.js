import React, {useState, useContext} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import DrawerNavigator from "./src/navigation/DrawerNavigator";
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat';
import COLORS from "./src/styles/COLORS";
import {Asset} from "expo-asset";
import { observer } from 'mobx-react-lite';
import HomeStore from "./src/store/HomeStore";
import AsyncStorage from '@react-native-community/async-storage';
import ProductStore from "./src/store/ProductStore";
import STORAGE_KEYS from "./src/common/enums/STORAGE_KEYS";
import AuthStore from "./src/store/AuthStore";
import { RootSiblingParent } from 'react-native-root-siblings';
import './src/css/global.css';
import Loader from './src/components/utils/Loader';
import Toast from 'react-native-toast-message';
import axios from "axios";
import { LogBox } from 'react-native';

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

function __ignoreMessages () {
  const messages = [
      '[MobX] Since strict-mode is enabled, changing (observed) observable values without using an action is not allowed. Tried to modify: AuthStore@4.isAuthorized'
  ];
  messages.forEach(message => {
    LogBox.ignoreLogs([message]);
  })
}

function App() {
  const [appLoaded, setAppLoaded] = useState(false);
  const homeContent = useContext(HomeStore);
  const productContent = useContext(ProductStore);
  const authContent = useContext(AuthStore);

  let [fontsLoaded] = useFonts({
    Montserrat_400Regular, Montserrat_700Bold, Montserrat_500Medium, Montserrat_300Light, Montserrat_600SemiBold
  });

  const _loadAssetsAsync = async () => {
    const imageAssets = cacheImages([
      require('./assets/images/product/category_default.png'),
      require('./assets/images/login_icon.png'),
      require('./assets/images/catalog/catalog_icon.png'),
      require('./src/components/home/assets/relevant_1.png'),
      require('./src/components/home/assets/relevant_2.png'),
      require('./src/components/home/assets/slide_1.png'),
      require('./src/components/home/assets/slide_2.png'),
      require('./src/components/navigation/Drawer/images/arrow_right.png'),
      require('./src/components/navigation/Drawer/images/drawer_header.png'),
      require('./src/components/navigation/Drawer/images/location.png'),
      require('./src/components/navigation/Tabs/images/cart_active.png'),
      require('./src/components/navigation/Tabs/images/cart.png'),
      require('./src/components/navigation/Tabs/images/goods.png'),
      require('./src/components/navigation/Tabs/images/goods_active.png'),
      require('./src/components/navigation/Tabs/images/heart.png'),
      require('./src/components/navigation/Tabs/images/heart_active.png'),
      require('./src/components/navigation/Tabs/images/home.png'),
      require('./src/components/navigation/Tabs/images/home_active.png'),
      require('./src/components/navigation/Tabs/images/list.png'),
      require('./src/components/navigation/Tabs/images/list_active.png'),
      require('./assets/images/product/product.png'),
      require('./assets/images/back-button.png'),
      require('./assets/images/menu_icon.png'),
      require('./assets/images/clubs/1.png'),
      require('./assets/images/clubs/2.png'),
      require('./assets/images/clubs/3.png'),
    ]);
    await _loadAsyncStorage();
    __ignoreMessages();
    /*await _loadStore();
    await _loadAsyncStorage();*/
    await Promise.all([...imageAssets]);
  }

  const _loadStore = async () => {
    await homeContent.getTypes();
    await homeContent.getHomeTypes();
    await homeContent.getHomeStocks();
    await homeContent.getCategories();
    await productContent.getCities();
  }

  const _loadAsyncStorage = async () => {
    const userToken = await AsyncStorage.getItem(STORAGE_KEYS.USER_TOKEN);
    if (userToken) {
      authContent.setUserToken(userToken);
      //axios.defaults.headers.common['T-Authorization'] = userToken;
      await authContent.fetchUser();
    }
  }

  if (!(appLoaded && fontsLoaded)) {
    return <AppLoading
        startAsync={_loadAssetsAsync}
        onError={(e) => console.warn(e)}
        onFinish={() => setAppLoaded(true)}
    />
  } else {
    return (
        <RootSiblingParent>
          <NavigationContainer theme={{colors: {background: COLORS.primary}}}>
            <Loader />
            <DrawerNavigator/>
          </NavigationContainer>
          <Toast />
        </RootSiblingParent>
    );
  }

}

export default observer(App);
