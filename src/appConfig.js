import * as Device from 'expo-device';


const getDeviceId = () => {
    return '';
};


export const appConfig = {
    //apiUrl: 'http://test.ariesdev.kz/',
    apiUrl: 'http://10.0.2.2:8000/',
    isIOS: Device.brand === 'ios',
    //deviceId: getDeviceId(),
    version: `${Device.osVersion} (${Device.osInternalBuildId})`,
};
