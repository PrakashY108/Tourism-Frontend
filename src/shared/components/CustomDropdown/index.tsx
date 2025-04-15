import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, StyleSheet, ViewStyle } from 'react-native';
import { heightPixel } from '../../../utils/responsiveDimensions';
import globalStyles from '../../themes/globalStyles';
import { Colors } from '../../themes/colors';

type Option = {
    label: string;
    value: string;
};

interface Props {
    options: Option[];
    selectedValue: string;
    onValueChange: (value: string) => void;
    placeholder?: string;
    label: string;
    containerStyle: ViewStyle;
}

const CustomDropdown: React.FC<Props> = ({ options, label, selectedValue,containerStyle, onValueChange, placeholder = 'Select an option' }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const selectedLabel = options.find(opt => opt.value === selectedValue)?.label;

    return (
        <View style={containerStyle}>
            <Text
                style={[
                    globalStyles.caption_18_700,
                    globalStyles.marginLeft10,
                    globalStyles.marginVertical5,

                ]}>
                {label}
            </Text>
            <TouchableOpacity style={[styles.dropdownButton]} onPress={() => setModalVisible(true)}>
                <Text style={styles.dropdownText}>
                    {selectedLabel || placeholder}
                </Text>
            </TouchableOpacity>

            <Modal transparent animationType="fade" visible={modalVisible} onRequestClose={() => setModalVisible(false)}>

                <TouchableOpacity style={styles.modalOverlay} onPress={() => setModalVisible(false)}>
                    <View style={styles.modalContainer}>
                        <FlatList
                            data={options}
                            keyExtractor={item => item.value}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={styles.optionItem}
                                    onPress={() => {
                                        onValueChange(item.value);
                                        setModalVisible(false);
                                    }}
                                >
                                    <Text style={styles.optionText}>{item.label}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </TouchableOpacity>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    dropdownButton: {
        height: heightPixel(50),
        width: '100%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.black,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    dropdownText: {
        fontSize: 13,
        color: '#333',
        flex: 1,
        paddingHorizontal: 10,
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)',
    },
    modalContainer: {
        marginHorizontal: 40,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingVertical: 10,
        maxHeight: '50%',
    },
    optionItem: {
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    optionText: {
        fontSize: 16,
    },
});

export default CustomDropdown;
