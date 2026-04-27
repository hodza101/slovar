function check() {
  const slova = document.getElementsByClassName("input");
  let skrivena = "games";
  // console.log(slovo1[0].value);
  // console.log(slovo1[1].value);
  // console.log(slovo1[2].value);
  // console.log(slovo1[3].value);
  // console.log(slovo1[4].value);
  let rijec = slova[0].value + slova[1].value + slova[2].value + slova[3].value + slova[4].value;
  // console.log(rijec);
  if(rijec === skrivena) {
    console.log("DA");
  } else {
    console.log("NE");
  }
}