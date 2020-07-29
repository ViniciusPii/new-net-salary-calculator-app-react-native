import React, {useState} from 'react';
import {Keyboard} from 'react-native';

import {Layout, Logo, Form, LisResult, Compose} from '../../components';

import {calculateTrack, calculateINSS} from '../../utils/calcInss';

const Main = () => {
  const [salary, setSalary] = useState();
  const [inss, setInss] = useState();
  const [discounts, setDiscounts] = useState(0);

  const [bkpSalary, setBackupSalary] = useState();
  const [bkpDiscounts, setBkpDiscounts] = useState();

  const [show, setShow] = useState(false);

  const handleSubmit = () => {
    Keyboard.dismiss();

    if (isNaN(salary) || !salary) {
      alert('Salário Bruto Obrigatário!');
      return;
    }

    setBackupSalary(salary);
    setBkpDiscounts(discounts);

    setInss(calculateINSS(salary, calculateTrack(salary)));

    setShow(true);
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
          <Compose />
          <LisResult
            inss={inss}
            salary={bkpSalary}
            discounts={bkpDiscounts}
            netSalary={bkpSalary - bkpDiscounts - inss}
          />
        </>
      )}
    </Layout>
  );
};

export default Main;
