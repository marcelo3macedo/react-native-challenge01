import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, Text, View } from 'react-native';

import logoImg from '../../assets/images/logo/logo.png';
import { HeaderProps } from '../../interfaces/components/HeaderProps';

import { styles } from './styles';

export function Header({ tasksCounter }: HeaderProps) {
    const {t} = useTranslation();
    const tasksCounterText = tasksCounter === 1 ? t('task') : t('tasks')

    return (
        <View style={styles.container}>
            <Image source={logoImg} />

            <View style={styles.tasks}>
                <Text style={styles.tasksCounter}>{t('taskOwned')} </Text>
                <Text style={styles.tasksCounterBold}>{tasksCounter} {tasksCounterText}</Text>
            </View>
        </View>
    )
}
