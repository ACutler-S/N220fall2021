let billAmount = document.querySelector("#billAmount");
let dvTip = document.getElementById("dvTip");
let dvBill = document.getElementById("dvBill");

function calculateBill(){
    let tip = Math.round(billAmount.value * .2)
    let totalBill = Number(billAmount.value) + tip;
    console.log("Tip: $" +tip ,"Total: $"  +totalBill);
    dvTip. innerHTML = "Tip: $" +tip;
    dvBill.innerHTML = "Total: $"  +totalBill;
    //console.log(dvBill);
}