export const conditions = {
  c1: styrka === "m",
  c2: dosimG,
  c3: dosIµG,
  c4: styrka === "µ",
  c5: drugName === "Ondansetron", //max 2 ml
  c6: drugName === "Betapred", // max 1 ml
  c7: drugName === "Phenergan", //max 0.5 ml
  c8: drugName === "Atropin", //max 1 ml,
  c9: recept,
  c10: obs,
  c11: dosIµG_2,
  c12: dosiMg_2,
  c13: dosIµG_3,
  c14: obs_2,
};
