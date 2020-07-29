import trackInss from './inss';

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

export const calculateINSS = (salary, track) => {
  let inss;

  let referenceValue = trackInss[track].initialValue;
  let multiplier = trackInss[track].multiplier;
  let valuePerRange = trackInss[track].valuePerRange;

  inss = (salary - referenceValue) * multiplier + valuePerRange;

  return inss;
};
