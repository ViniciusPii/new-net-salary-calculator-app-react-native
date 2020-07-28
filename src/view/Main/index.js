import React, {useState} from 'react';
import {Keyboard} from 'react-native';

import trackInss from '../../utils/inss';

import {Layout, Logo, Form, LisResult, Compose} from '../../components';

const Main = () => {
  const [salary, setSalary] = useState();
  const [discounts, setDiscounts] = useState();

  const [bkpSalary, setBackupSalary] = useState();
  const [inss, setInss] = useState();

  const [show, setShow] = useState(false);

  const calculateTrack = () => {
    let track;

    if (salary < 1039) {
      track = 'minTrack';
    } else if (salary <= 2089.6) {
      track = 'firstTrack';
    } else if (salary <= 3134.4) {
      track = 'secondTrack';
    } else if (salary <= 6101.06) {
      track = 'thirdTrack';
    } else {
      track = 'maxTrack';
    }

    return track;
  };

  const calculateINSS = () => {
    let newInss;
    let referenceValue = trackInss[calculateTrack()].referenceValue;
    let multiplier = trackInss[calculateTrack()].multiplier;
    let valuePerRange = trackInss[calculateTrack()].valuePerRange;

    newInss = (salary - referenceValue) * multiplier + valuePerRange;

    setInss(newInss);
    return inss;
  };

  const handleSubmit = () => {
    Keyboard.dismiss();

    if (isNaN(salary) || !salary) {
      alert('Salário Bruto Obrigatário!');
      return;
    }

    setBackupSalary(salary);
    calculateTrack();
    calculateINSS();
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
          <LisResult inss={inss} salary={bkpSalary} />
        </>
      )}
    </Layout>
  );
};

export default Main;
