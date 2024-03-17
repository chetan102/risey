import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';

const Dashboard = () => {
  return (
    <View>
      <Text>Some text</Text>
      <View>
        <Text>Some more text</Text>
       
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue="You can type in me"
      />
    </View>
  );
};

export default Dashboard;