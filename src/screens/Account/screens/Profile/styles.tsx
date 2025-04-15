import { StyleSheet } from 'react-native';
import { Colors } from '../../../../shared/themes/colors';

export const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    imagePicker: {
        alignSelf: 'center',
        marginBottom: 20,
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    placeholder: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
    },
    placeholderText: {
        color: '#555',
    },
    label: {
        fontSize: 16,
        marginTop: 10,
        marginBottom: 4,
        color: '#333',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 12,
        fontSize: 16,
        backgroundColor: '#fff',
    },
    pickerContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#fff',
    },
    picker: {
        height: 50,
        width: '100%',
    },
    button: {
        marginTop: 30,
        backgroundColor: '#007bff',
        paddingVertical: 14,
        borderRadius: 10,
        alignItems: 'center',
    },
    imagePickerlogo: {
        width: 20,
        height: 20
    },
    imagePickerbtn: {
        position: 'absolute',
        right: 7,
        bottom: 0,
    }
});
