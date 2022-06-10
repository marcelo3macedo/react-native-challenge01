import React, { useEffect, useRef, useState } from 'react';
import { Image, TouchableOpacity, View, Text } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import trashIcon from '../../assets/icons/trash/trash.png'
import { TasksItemProps } from '../../interfaces/components/TasksItemProps';

import { styles } from './styles';

export function TaskItem({ index, task, toggleTaskDone, removeTask }: TasksItemProps) {
  function handleToggleTask() {
    toggleTaskDone(task.id);
  }

  function handleRemoveTask() {
    removeTask(task.id);
  }

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
            style={styles.taskButton}
            onPress={handleToggleTask}>
          <View testID={`marker-${index}`}>           
            <CheckBox 
              value={task.done}
              tintColors={{ true: '#1DB863', false: '#666' }}
              onValueChange={handleToggleTask}
            />
          </View>

          <Text style={task.done ? styles.taskTextDone : styles.taskText}>{task.title}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        testID={`trash-${index}`}
        style={{ paddingHorizontal: 24 }}
        onPress={handleRemoveTask}
      >
        <Image source={trashIcon} />
      </TouchableOpacity>
    </View>
  )
}

