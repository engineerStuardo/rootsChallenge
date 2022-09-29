import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';

import {Props} from './interface';

import styles from './styles';

export const Search = ({setText, text, searchBanks}: Props) => {
  return (
    <View>
      <Text style={styles.title}>Please Enter ISO Country e.g. SV</Text>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={(textValue: string) => {
            if (textValue.length <= 2) {
              setText(textValue.toUpperCase());
            }
          }}
          value={text}
          style={styles.input}
        />
        <TouchableOpacity onPress={searchBanks} style={styles.button}>
          <Text style={styles.searchText}>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
