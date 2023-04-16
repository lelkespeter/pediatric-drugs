const DoseInMl = (seledtedDrugs) => {
  const w = 44;
  const strength = seledtedDrugs.strength.charAt(
    seledtedDrugs.strength.length - 5
  );
  const numStrength = parseFloat(seledtedDrugs.strength);

  const c1 = strength === "m";
  const c2 = seledtedDrugs.dosiMg;
  const c3 = (c2 * w) / numStrength;
  const c4 = seledtedDrugs.drugName === "Betapred";
  const c5 = seledtedDrugs.drugName === "Ondansetron";
  const c6 = seledtedDrugs.drugName === "Phenergan";

  let lm;

  if (c4 && c3 >= 1) {
    lm = "give 1 ml";
  } else if (c5 && c3 >= 2) {
    lm = "give 2 ml";
  } else if (c6 && c3 >= 0.5) {
    lm = "give 0.5 ml";
  } else {
    lm = "give " + c3 + " ml";
  }

  return lm;
};

export default DoseInMl;
