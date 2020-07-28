import React, {useState} from 'react';
import {Keyboard} from 'react-native';

import {Layout, Logo, Form, LisResult, Compose} from '../../components';

const Main = () => {
  const [salary, setSalary] = useState();
  const [discounts, setDiscounts] = useState();

  const [show, setShow] = useState(false);

  const handleSubmit = () => {
    setShow(!show);
    Keyboard.dismiss();
  };

  return (
    <Layout>
      <Logo />
      <Form
        salary={salary}
        setSalary={setSalary}
        discounts={discounts}
        setDiscounts={setDiscounts}
        show={show}
        onPress={handleSubmit}
      />
      {show && (
        <>
          <LisResult />
          <Compose />
        </>
      )}
    </Layout>
  );
};

export default Main;
