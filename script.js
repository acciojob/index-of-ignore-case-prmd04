function indexOfIgnoreCase(s1, s2) {
  let lows1=s1.toLowerCase();
  let lows2=s2.toLowerCase();

	return lows1.indexOf(lows2);
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
