function setLoanValues() {
    var product = document.getElementById("loanProduct").value;
    if (product === "car") {
        document.getElementById("loanAmount").value = 50000;
        document.getElementById("interestRate").value = 7.5;
        document.getElementById("loanTenure").value = 60;
    } else if (product === "home") {
        document.getElementById("loanAmount").value = 200000;
        document.getElementById("interestRate").value = 5.0;
        document.getElementById("loanTenure").value = 240;
    } else if (product === "personal") {
        document.getElementById("loanAmount").value = 10000;
        document.getElementById("interestRate").value = 10.0;
        document.getElementById("loanTenure").value = 24;
    } else {
        document.getElementById("loanAmount").value = "";
        document.getElementById("interestRate").value = "";
        document.getElementById("loanTenure").value = "";
    }
}

function calculateLoan() {
    var loanAmount = document.getElementById('loanAmount').value;
    var interestRate = document.getElementById('interestRate').value;
    var loanTenure = document.getElementById('loanTenure').value;
    
    var P = parseFloat(loanAmount);
    var r = (parseFloat(interestRate) / 100) / 12;
    var n = parseInt(loanTenure);
    
    var EMI = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    EMI = EMI.toFixed(2);
    document.getElementById('result').innerText = "Monthly EMI: " + EMI;
    
    var table = document.getElementById('schedule');
    table.innerHTML = "<tr><th>Month</th><th>Principal</th><th>Interest</th><th>Balance</th></tr>";
    
    var balance = P;
    for (var i = 1; i <= n; i++) {
        var interest = (balance * r).toFixed(2);
        var principal = (EMI - interest).toFixed(2);
        balance = (balance - principal).toFixed(2);
        
        table.innerHTML += "<tr><td>" + i + "</td><td>" + principal + "</td><td>" + interest + "</td><td>" + balance + "</td></tr>";
    }
}
