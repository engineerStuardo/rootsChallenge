import React from 'react';
import {FlatList, Text, View} from 'react-native';

import {RenderItem} from './renderItem';
import {EmptyMessage} from './emptyMessage';
import {Props} from './interface';

import styles from './styles';

export const Results = ({bankList}: Props) => {
  return (
    <View>
      <Text style={styles.title}>Results</Text>
      <FlatList
        data={bankList}
        renderItem={RenderItem}
        keyExtractor={item => item.id.toString()}
        ListEmptyComponent={EmptyMessage}
      />
    </View>
  );
};
