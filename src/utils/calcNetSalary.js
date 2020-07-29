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

export const calculateINSS = (salary, track, trackInss) => {
  let inss;

  let referenceValue = trackInss[track].initialValue;
  let multiplier = trackInss[track].multiplier;
  let valuePerRange = trackInss[track].valuePerRange;

  inss = (salary - referenceValue) * multiplier + valuePerRange;

  return inss;
};

export const calculateIRPF = (salary, track, trackIrpf) => {
  let irpf;

  let multiplier = trackIrpf[track].multiplier;
  let valuePerRange = trackIrpf[track].valuePerRange;

  irpf = salary * multiplier - valuePerRange;

  return irpf;
};

export const calculateNetSalary = (salary, discounts, inss, irpf) => {
  return salary - discounts - inss - irpf;
};
