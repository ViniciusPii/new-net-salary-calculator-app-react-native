import React, {useState} from 'react';
import {Keyboard} from 'react-native';

import {Layout, Logo, Form, LisResult, Compose} from '../../components';

import trackInss from '../../utils/inss';
import trackIrpf from '../../utils/irpf';

import {
  calculateNetSalary,
  calculateTrack,
  calculateTax,
} from '../../utils/calcNetSalary';

const Main = () => {
  const [salary, setSalary] = useState();
  const [inss, setInss] = useState();
  const [irpf, setIrpf] = useState();
  const [discounts, setDiscounts] = useState();

  const [bkpSalary, setBackupSalary] = useState();
  const [bkpDiscounts, setBkpDiscounts] = useState();

  const [show, setShow] = useState(false);

  const handleSubmit = () => {
    Keyboard.dismiss();

    if (!salary) {
      alert('Preencha ao menos o campo Salário Bruto!');
      return;
    }

    if (isNaN(salary) || salary < 0) {
      alert('Digite um numero válido!');
      return;
    }

    setBackupSalary(salary);
    setBkpDiscounts(discounts ? discounts : 0);

    let changeTrackInss = calculateTrack(salary, trackInss);
    let resultInss = calculateTax(salary, changeTrackInss, trackInss);
    setInss(resultInss.inss);

    let changeTrackIrpf = calculateTrack(salary - resultInss.inss, trackIrpf);
    let resultIrpf = calculateTax(
      salary - resultInss.inss,
      changeTrackIrpf,
      trackIrpf,
    );
    setIrpf(resultIrpf.irpf);

    setShow(true);

    setSalary('');
    setDiscounts('');
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
            irpf={irpf}
            salary={bkpSalary}
            discounts={bkpDiscounts}
            netSalary={calculateNetSalary(bkpSalary, bkpDiscounts, inss, irpf)}
          />
        </>
      )}
    </Layout>
  );
};

export default Main;
