function productInput(ProductId, IncreaseDcrease, price) {

    const ProductInput = document.getElementById(ProductId + '_Number');

    let ProductInputs = ProductInput.value;
    if (IncreaseDcrease == true) {
        ProductInput.value = parseInt(ProductInputs) + 1;
    } else if (ProductInputs > 0)
        ProductInput.value = parseInt(ProductInputs) - 1;

    ProductInputs = ProductInput.value;

    const sumTotal = document.getElementById(ProductId + '_Total')
    sumTotal.innerText = ProductInputs * price;
    subtotal()

}
function totalqantiy(id) {
    const total = document.getElementById(id + '_Number')
    const totalcont = parseInt(total.value);
    return totalcont;
}
function subtotal() {
    const asusAmmont = totalqantiy('Asus') * 799;
    const LenevoAmmount = totalqantiy('Lenevo') * 899;
    const msiAmmont = totalqantiy('msi') * 1999;
    const subtotals = asusAmmont + LenevoAmmount + msiAmmont;
    const tottalTax = subtotals / 5;
    const htmlSubtotal = document.getElementById('Sub_Total');
    htmlSubtotal.innerText = subtotals;
    const htmltax_Total = document.getElementById('tax_Total');
    htmltax_Total.innerText = tottalTax;

    const shippingCost = document.getElementById('shipping_Total');
    shippingCost.innerText = 50;

    const grandTotal = document.getElementById('grand_Total');
    grandTotal.innerText = subtotals + tottalTax + 50;
}

document.getElementById('increaseButton').addEventListener('click', function () {
    productInput('Asus', true, 799);


})
document.getElementById('DeductButton').addEventListener('click', function () {
    productInput('Asus', false, 799);


})
document.getElementById('lenevoincreaseButton').addEventListener('click', function () {
    productInput('Lenevo', true, 899);


})
document.getElementById('LenevoDeductButton').addEventListener('click', function () {
    productInput('Lenevo', false, 899);

})
document.getElementById('msiincreaseButton').addEventListener('click', function () {
    productInput('msi', true, 1999);


})
document.getElementById('msiDeductButton').addEventListener('click', function () {
    productInput('msi', false, 1999);


})

document.getElementById('confirmButton').addEventListener('click', function () {
    window.location.href = "Order confirm.html";
})

