import Toast from 'react-native-toast-message';

const showToast = (message, type, title) => {
    return Toast.show({
        text1: title,
        text2: message,
        type,
        visibilityTime: 3000,
        position: 'bottom'
    })
}

export default {
    success: (message) => {
        return showToast(message, 'success', 'Успешно!');
    },
    error: (message) => {
        return showToast(message, 'error', 'Ошибка!');
    },
    info: (message) => {
        return showToast(message, 'info', 'Обратите внимание!');
    }
}
