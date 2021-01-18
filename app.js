function addIncome() {
    var income = document.getElementById("income").value;
    var cash = document.getElementById("cash");
    console.log(income.value)

    var h2 = document.createElement("h2");
    var h2Text = document.createTextNode(income);

    h2.appendChild(h2Text)

    cash.appendChild(h2)
}

function addExpense(){
    var details = document.getElementById("details");
    
}