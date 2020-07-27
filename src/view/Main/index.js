import React from 'react';
import {Text, SafeAreaView} from 'react-native';

import {Layout} from '../../components';

import Icon from 'react-native-vector-icons/FontAwesome5';

const Main = () => {
  return (
    <Layout>
      <SafeAreaView>
        <Text>Main</Text>
        <Icon name="trash" />
      </SafeAreaView>
    </Layout>
  );
};

export default Main;
