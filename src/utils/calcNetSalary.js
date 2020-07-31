export const calculateSalaryRange = (salary, taxTable) => {
  let salaryRange;

  if (salary < taxTable.minTrack.finalValue) {
    salaryRange = 'minTrack';
  } else if (salary <= taxTable.firstTrack.finalValue) {
    salaryRange = 'firstTrack';
  } else if (salary <= taxTable.secondTrack.finalValue) {
    salaryRange = 'secondTrack';
  } else if (salary <= taxTable.thirdTrack.finalValue) {
    salaryRange = 'thirdTrack';
  } else {
    salaryRange = 'maxTrack';
  }

  return salaryRange;
};

export const calculateTax = (salary, salaryRange, taxTable) => {
  let inss;
  let irpf;

  let referenceValue = taxTable[salaryRange].initialValue;
  let multiplier = taxTable[salaryRange].multiplier;
  let valuePerRange = taxTable[salaryRange].valuePerRange;

  inss = (salary - referenceValue) * multiplier + valuePerRange;

  irpf = salary * multiplier - valuePerRange;

  return {inss, irpf};
};

export const calculateNetSalary = (grossSalary, otherDiscounts, inss, irpf) => {
  return grossSalary - otherDiscounts - inss - irpf;
};
