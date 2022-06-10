import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';


import { TasksListProps } from '../../interfaces/components/TaskListProps';
import { ItemWrapper } from '../ItemWrapper';
import { TaskItem } from '../TaskItem';
import { styles } from './styles';
 
export function TaskList({ tasks, toggleTaskDone, removeTask }: TasksListProps) { 
    return (
        <FlatList
            data={tasks}
            renderItem={({ item, index }) => {
                return (
                    <ItemWrapper index={index}>
                        <TaskItem
                            index={index}
                            task={item}
                            toggleTaskDone={toggleTaskDone}
                            removeTask={removeTask}
                        />
                    </ItemWrapper>                    
                )
            }}
            keyExtractor={item => String(item.id)}
            contentContainerStyle={styles.contentContainerStyle}
            showsVerticalScrollIndicator={false}
            style={styles.flatList}
        />
    )
}
