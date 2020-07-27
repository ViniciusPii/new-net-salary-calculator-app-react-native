import React, {useState} from 'react';

import {Layout, Logo, Form} from '../../components';

const Main = () => {
  const [salary, setSalary] = useState();
  const [discounts, setDiscounts] = useState();

  const handleSubmit = () => {
    alert(`salario ${salary}, descontos ${discounts}`);
  };

  return (
    <Layout>
      <Logo />
      <Form
        salary={salary}
        setSalary={setSalary}
        discounts={discounts}
        setDiscounts={setDiscounts}
        onPress={handleSubmit}
      />
    </Layout>
  );
};

export default Main;
