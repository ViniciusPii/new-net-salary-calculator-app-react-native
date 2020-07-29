import trackInss from './inss';
import trackIrpf from './irpf';

export const calculateTrack = (salary) => {
  let track;

  if (salary < trackInss.minTrack.finalValue) {
    track = 'minTrack';
  } else if (salary <= trackInss.firstTrack.finalValue) {
    track = 'firstTrack';
  } else if (salary <= trackInss.secondTrack.finalValue) {
    track = 'secondTrack';
  } else if (salary <= trackInss.thirdTrack.finalValue) {
    track = 'thirdTrack';
  } else {
    track = 'maxTrack';
  }

  return track;
};

export const calculateTrackIRPF = (salary) => {
  let track;

  if (salary < trackIrpf.minTrack.finalValue) {
    track = 'minTrack';
  } else if (salary <= trackIrpf.firstTrack.finalValue) {
    track = 'firstTrack';
  } else if (salary <= trackIrpf.secondTrack.finalValue) {
    track = 'secondTrack';
  } else if (salary <= trackIrpf.thirdTrack.finalValue) {
    track = 'thirdTrack';
  } else {
    track = 'maxTrack';
  }

  return track;
};

export const calculateINSS = (salary, track) => {
  let inss;

  let referenceValue = trackInss[track].initialValue;
  let multiplier = trackInss[track].multiplier;
  let valuePerRange = trackInss[track].valuePerRange;

  inss = (salary - referenceValue) * multiplier + valuePerRange;

  return inss;
};

export const calculateIRPF = (salary, track) => {
  let irpf;

  let multiplier = trackIrpf[track].multiplier;
  let valuePerRange = trackIrpf[track].valuePerRange;

  irpf = salary * multiplier - valuePerRange;

  return irpf;
};

export const calculateNetSalary = (salary, discounts, inss, irpf) => {
  return salary - discounts - inss - irpf;
};
