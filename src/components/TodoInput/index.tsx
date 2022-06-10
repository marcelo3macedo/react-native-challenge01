import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { TodoInputProps } from '../../interfaces/components/TodoInputProps';

import { styles } from './styles';

export function TodoInput({ addTask }: TodoInputProps) {
    const [value, setValue] = useState<string>('');
    const {t} = useTranslation();

    function handleOnPress() {
        if (!value || value.length == 0) {
            return
        }

        addTask(value)
        setValue('')
    }
    
    return (
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.input} 
                placeholder={t('todo.addNew')}
                placeholderTextColor="#B2B2B2"
                returnKeyType="send"
                selectionColor="#666666"
                value={value}
                onChangeText={setValue}
            />
            <TouchableOpacity
                testID="add-new-task-button"
                activeOpacity={0.7}
                style={styles.addButton}
                onPress={handleOnPress}
            >
                <Icon name="chevron-right" size={24} color="#B2B2B2" />
            </TouchableOpacity>
        </View>
    )
}
