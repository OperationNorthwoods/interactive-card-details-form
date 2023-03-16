const submit = document.querySelector(".submit")
const name_In = document.querySelector("#name_In")
const cardNum_In = document.querySelector("#cardNum_In")
const month_In = document.querySelector("#month_In")
const year_In = document.querySelector("#year_In")
const cvc_In = document.querySelector("#cvc_In")


function inputVal(input) {
    if (input = name_In) {
        const nameVal = name_In.value
        if (/[a-zA-Z]/.test(input.value)) { 
            console.log('this is letters') 
        }
    } else {

    }
}





submit.addEventListener('click', function (e) {
    e.preventDefault();
    inputVal(name_In)
    setTimeout(function () {
        submit.style.backgroundColor = 'var(--Very-dark-violet)';
    }, 2000);
    
})



