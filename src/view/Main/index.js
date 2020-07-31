import React, {useState} from 'react';
import {Keyboard} from 'react-native';

import {Layout, Logo, Form, LisResult, Compose} from '../../components';

import inssTable from '../../utils/inss';
import irpfTable from '../../utils/irpf';

import {
  calculateNetSalary,
  calculateSalaryRange,
  calculateTax,
} from '../../utils/calcNetSalary';

const Main = () => {
  const [grossSalary, setGrossSalary] = useState();
  const [inss, setInss] = useState();
  const [irpf, setIrpf] = useState();
  const [otherDiscounts, setOtherDiscounts] = useState();

  const [bkpGrossSalary, setBkpGrossSalary] = useState();
  const [bkpOtherDiscounts, setBkpOtherDiscounts] = useState();

  const [show, setShow] = useState(false);

  const handleSubmit = () => {
    Keyboard.dismiss();

    if (!grossSalary) {
      alert('Salário Bruto Obrigatório!');
      setShow(false);
      return;
    }

    setBkpGrossSalary(grossSalary);
    setBkpOtherDiscounts(otherDiscounts ? otherDiscounts : 0);

    let inssSalaryRange = calculateSalaryRange(grossSalary, inssTable);
    let inssValue = calculateTax(grossSalary, inssSalaryRange, inssTable);
    setInss(inssValue.inss);

    let irpfSalaryRange = calculateSalaryRange(
      grossSalary - inssValue.inss,
      irpfTable,
    );
    let irpfValue = calculateTax(
      grossSalary - inssValue.inss,
      irpfSalaryRange,
      irpfTable,
    );
    setIrpf(irpfValue.irpf);

    setShow(true);

    setGrossSalary('');
    setOtherDiscounts('');
  };

  return (
    <Layout>
      <Logo />
      <Form
        grossSalary={grossSalary}
        setGrossSalary={setGrossSalary}
        otherDiscounts={otherDiscounts}
        setOtherDiscounts={setOtherDiscounts}
        show={show}
        onPress={handleSubmit}
      />
      {show && (
        <>
          <Compose />
          <LisResult
            inss={inss}
            irpf={irpf}
            grossSalary={bkpGrossSalary}
            otherDiscounts={bkpOtherDiscounts}
            netSalary={calculateNetSalary(
              bkpGrossSalary,
              bkpOtherDiscounts,
              inss,
              irpf,
            )}
          />
        </>
      )}
    </Layout>
  );
};

export default Main;
