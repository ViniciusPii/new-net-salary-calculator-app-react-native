import React from 'react';
import {Text, SafeAreaView} from 'react-native';

import {Layout, Logo} from '../../components';

const Main = () => {
  return (
    <Layout>
      <SafeAreaView>
        <Logo />
      </SafeAreaView>
    </Layout>
  );
};

export default Main;
