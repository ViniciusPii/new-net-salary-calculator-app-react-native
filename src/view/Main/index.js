import React, {useState} from 'react';
import {Keyboard} from 'react-native';

import {Layout, Logo, Form, LisResult, Compose} from '../../components';

import trackInss from '../../utils/inss';
import trackIrpf from '../../utils/irpf';

import {
  calculateNetSalary,
  calculateTrack,
  calculateINSS,
  calculateIRPF,
} from '../../utils/calcNetSalary';

const Main = () => {
  const [salary, setSalary] = useState();
  const [inss, setInss] = useState();
  const [irpf, setIrpf] = useState();
  const [discounts, setDiscounts] = useState(0);

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
    setBkpDiscounts(discounts);

    let changeTrackInss = calculateTrack(salary, trackInss);
    let resultInss = calculateINSS(salary, changeTrackInss, trackInss);
    setInss(resultInss);

    let changeTrackIrpf = calculateTrack(salary - resultInss, trackIrpf);
    let resultIrpf = calculateIRPF(
      salary - resultInss,
      changeTrackIrpf,
      trackIrpf,
    );
    setIrpf(resultIrpf);

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
