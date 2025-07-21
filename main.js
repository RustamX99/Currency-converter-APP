const select1 = document.getElementById("select1")
const select2 = document.getElementById("select2")
const amount = document.getElementById("amount")
const btn = document.getElementById("btn");
const h1 = document.getElementById("h1");
btn.addEventListener("click", () => {
let url = `https://currency-converter-pro1.p.rapidapi.com/convert?from=${select1.value}&to=${select2.value}&amount=${amount.value}`
const options = {
    method: "GET",
    headers: {
        'x-rapidapi-key': '38811f085bmshe2c68a829bd4009p17b7d5jsnde713f466317',
        'x-rapidapi-host': 'currency-converter-pro1.p.rapidapi.com'
      }
}

const getData = async () => {
    let res = await fetch(url, options);
    let data = await res.json();
    console.log(data);
    h1.innerHTML = `
     ${amount.value} = 
     ${Math.round(data.result * 100)}
    `;
    if (amount.value == null) {
        h1.innerHTML = 'Please enter an amount';
    }
}

    
    getData();
})