export const calculateTrack = (salary, changeTrack) => {
  let track;

  if (salary < changeTrack.minTrack.finalValue) {
    track = 'minTrack';
  } else if (salary <= changeTrack.firstTrack.finalValue) {
    track = 'firstTrack';
  } else if (salary <= changeTrack.secondTrack.finalValue) {
    track = 'secondTrack';
  } else if (salary <= changeTrack.thirdTrack.finalValue) {
    track = 'thirdTrack';
  } else {
    track = 'maxTrack';
  }

  return track;
};

export const calculateTax = (salary, track, changeTrack) => {
  let inss;
  let irpf;

  let referenceValue = changeTrack[track].initialValue;
  let multiplier = changeTrack[track].multiplier;
  let valuePerRange = changeTrack[track].valuePerRange;

  inss = (salary - referenceValue) * multiplier + valuePerRange;

  irpf = salary * multiplier - valuePerRange;

  return {inss, irpf};
};

export const calculateNetSalary = (salary, discounts, inss, irpf) => {
  return salary - discounts - inss - irpf;
};
