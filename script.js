// CS10 Grade Calculator

// Event Listerner
document.getElementById("Calculate").addEventListener("click", showAnnual);

// Event Function
function showAnnual() {
  // Input
  let pay = +document.getElementById("pay").value;
  let Tax = document.getElementById("Tax").value;
  let RRSP = document.getElementById("RRSP").value;
  let Annual = document.getElementById("Annual").value;

  let TaxAlberta = Tax;
  console.log(TaxAlberta);
  console.log(Tax);
  console.log(RRSP);
  console.log(pay);
  // Process let  =
  let yearlyAnnual = pay * 12;
  if (yearlyAnnual < 142000) {
    let yearlytax = yearlyAnnual / 10;
    // yearlyAnnual = yearlyAnnual / 10 this means its dividing by the assignment opertator shorthand for a divide
    document.getElementById("Tax").innerHTML =
      "Your Tax was 10% because your income was below 142k.";
  } else if (yearlyAnnual < 170000) {
    yearlyAnnual /= 12;
    document.getElementById("Tax").innerHTML =
      "Your Tax was 12% because your income was 142k+ to 170k";
  } else if (yearlyAnnual < 227000) {
    yearlyAnnual /= 13;
    document.getElementById("Tax").innerHTML =
      "Your Tax was 13% because your income was 170k+ to 227k";
  } else if (yearlyAnnual < 341000) {
    yearlyAnnual /= 14;
    document.getElementById("Tax").innerHTML =
      "Your Tax was 14% because your income was 227k+ to 341k ";
  } else if (yearlyAnnual < 351000) {
    yearlyAnnual /= 15;
    document.getElementById("Tax").innerHTML =
      "Your Tax was 15% because it was above 341k";
  }
  document.getElementById("Annual").innerHTML = Annual;
  console.log(yearlyAnnual);
  console.log(Annual);
  console.log(yearlytax);

  // Output  //
}

function ShowTaxAlberta() {
  // Process
}
