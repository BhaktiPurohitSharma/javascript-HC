const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const results=document.querySelector('#results')

    if(height===''||height<0 ||isNaN(height)){
       results.innerHTML=`plz give valid value for height ${height}`;
    }
    else if(weight===''||weight<0 ||isNaN(weight)){
        results.innerHTML=`plz give valid value weight ${weight}`;
     }
     else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        if (bmi<18.6) {
            results.innerHTML = `<span>Calculeted BMI:=${bmi}</span> and you are underwight`;
        } 
        else if(bmi>=18.6&&bmi<=24.9){
            results.innerHTML = `<span>Calculeted BMI:=${bmi}</span>`;
        }
        else{
            results.innerHTML = `<span>Calculeted BMI:=${bmi}</span> and you are overwight`;
        }
        
    }



})