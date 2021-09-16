import { Alert } from 'react-native';


/* Show alert */
export const showAlert = (message) => {
    Alert.alert(
        'Demo App',
        message, [
            { text: 'ok' },
        ], { cancelable: false },
    );
};

export const showOptionAlert = (message, action) => {
    Alert.alert(
        'Demo App',
        message, [
            { text: 'ok', onPress: action },
            { text: 'cancel' },
        ], { cancelable: false },
    );
};