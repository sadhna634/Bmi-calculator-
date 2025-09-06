//const weight = parseInt(document.querySelector('#weight').value)
//this usecase will give you empty

const form = document.querySelector('form')
form.addEventListener('submit', function (e) {

    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');
    const bmiText = document.querySelector('#BMI');

    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result 

   // result.innerHTML = `<span>${BMI}</span>`;
    const bmiValue = parseFloat(BMI);

    if(bmiValue < 18.6){
        bmiText.innerHTML = `<span>${BMI} , you are under-weighted make a perfect diet</span>`;
    }
else if(bmiValue >= 18.6 && bmiValue <= 24.9){
        bmiText.innerHTML = `<span>${BMI} , Congratulations....you have normal weight </span>`;
    }
    else if(bmiValue>24.9){
         bmiText.innerHTML = `<span>${BMI} , O Oh...you are over-weight, do exercisem regularely</span>`;
    }
    else{
       //bmiText.innerHTML = `<span>${BMI}</span>`;
    }







    // if (height === '' || height < 0 || isNaN(height)) {
    //     result.innerHTML = `please give a valid height ${height}`
    // }
    // else if (weight === '' || weight < 0 || isNaN(weight)) {
    //     result.innerHTML = `please give a valid weight ${weight}`
    // }
    // else {
    //     const BMI = (weight / ((height * height) / 10000)).toFixed(2)
    //     //show the result 
    //     result.innerHTML = `<span>${BMI}</span>`
    //     const bmi = document.querySelector('BMI')
    //     if(bmi <= 18.6){
    //         bmi.innerHTML = `<span>${bmi} , you are under-weighted</span>`
    //     }
    // else if(bmi > 18.6 || BMI < 24.9){
    //         bmi.innerHTML = `<span>${bmi} , you are normal weight</span>`
    //     }
    //     else if(bmi>24.9){
    //          bmi.innerHTML = `<span>${bmi} , you are over-weight</span>`
    //     }
    // }
   
    //

              
});

    
