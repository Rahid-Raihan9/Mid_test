document.getElementById('DepositeButton').addEventListener('click', function () {
    const NewDeposite = document.getElementById('DepositeInput');
    const Depositinputs = NewDeposite.value;
    const depositinputnum = parseFloat(Depositinputs)

    const depositTotal = document.getElementById('dtotal');

    const depositTotalText = depositTotal.innerText;

    const depositTotalTextNum = parseFloat(depositTotalText);

    const TotalDeposite = depositinputnum + depositTotalTextNum;
    depositTotal.innerText = TotalDeposite;

    const totalB = document.getElementById('btotal')
    const btotals = totalB.innerText;
    const BalanceTotal = parseFloat(btotals);
    const TotalBalance = BalanceTotal + TotalDeposite;

    totalB.innerText = TotalBalance;
    NewDeposite.value = "";

})
document.getElementById('withdrawButton').addEventListener('click', function () {
    const withdrawInputs = document.getElementById('withdrawInput');
    const withdrawInput = withdrawInputs.value;
    const withdrawInputammount = parseFloat(withdrawInput);
    const withdrawed = document.getElementById('wtotal');
    const withdraweddata = withdrawed.innerText;
    const TotalWithdraw = parseFloat(withdraweddata);
    const withdraw = TotalWithdraw + withdrawInputammount;
    withdrawed.innerText = withdraw;
    // Total Balance
    const totalB = document.getElementById('btotal')
    const btotals = totalB.innerText;
    const BalanceTotal = parseFloat(btotals);

    const remainingBalance = BalanceTotal - withdrawInputammount;
    totalB.innerText = remainingBalance;

    withdrawInputs.value = "";
})