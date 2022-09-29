import React from 'react';

import {Text} from 'react-native';
import {Item} from './interface';

import styles from './styles';

export const RenderItem = ({item}: Item) => (
  <Text style={styles.itemName}>- {item.name}</Text>
);
