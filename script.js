let credit_form = document.getElementById('credit_form')

let points = 0;

function giveLoan() {
   
    points = 0;

   
    let annual_income = parseInt(document.getElementById('annual_income').value);
    let amount_account = parseInt(document.getElementById('amount_account').value);
    let loan_amount = parseInt(document.getElementById('loan_amount').value);
    let credithistory = document.getElementById('credithistory').value;
    let lastdate = document.getElementById('lastdate').value;
    let repayment = document.getElementById('repayment').value;
    let accounttype = document.getElementById('accounttype').value;
    let depositdate = document.getElementById('depositdate').checked;

    
    let amountwanted = 0.45 * annual_income;
    console.log('45% of annual income:', amountwanted);

    if (amount_account > loan_amount) {
        points += 10;
        console.log( points);
    } else {
        points -= 10;
        console.log( points);
    }
    
    if (credithistory === 'yes') {
        points += 10;
        console.log( points);
    }

    if (depositdate) {
        points += 5;
        console.log( points);
    }

    if (lastdate === 'yes1') {
        points += 10;
        console.log( points);
        
    }

    if (repayment === 'yes2') {
        points += 5;
        console.log( points);
    }

    if (accounttype === 'current') {
        points += 10;
        console.log( points);
    } else if (accounttype === 'savings') {
        points += 5;
        console.log( points);
    }

    console.log('Total points:', points);

  
    let worthiness = document.getElementById('worthiness');
    let worthines = document.getElementById('worthines');
    
    if (points >= 30) {
        worthiness.innerHTML = `You are eligible for a loan. Points: ${points} and amount ${amountwanted}`;
        console.log(`Eligible for loan. Points: ${points}`);
    } else {
        worthines.innerHTML = `Sorry, you aren't eligible for a loan. Points: ${points}`;
        console.log(`Not eligible for loan. Points: ${points}`);
    }
}

credit_form.addEventListener('submit', function (e) {
    document.getElementById('annual_Err').textContent = "";
    document.getElementById('amount_Err').textContent = "";
    document.getElementById('loan_Err').textContent = "";
    
    let valid = true;

    let annual_income = document.getElementById('annual_income').value;
    if (annual_income === "") {
        document.getElementById('annual_Err').textContent = "Annual income cannot be blank";
        valid = false;
    }

    let amount_account = document.getElementById('amount_account').value;
    if (amount_account === "") {
        document.getElementById('amount_Err').textContent = "Amount cannot be blank";
        valid = false;
    }

    let loan_amount = document.getElementById('loan_amount').value;
    if (loan_amount === "") {
        document.getElementById('loan_Err').textContent = "Loan amount cannot be blank";
        valid = false;
    }

    if (!valid) {
        e.preventDefault();
        console.log('Form validation failed');
    } else {
        e.preventDefault();
        giveLoan();
    }
});

    // let annual_income = parseInt(document.getElementById('annual_income').value)
    
    // let aErr = document.getElementById('aErr').textContent = ''


    // if (annual_income === ""){
    //     aErr.textContent = 'this cannot be blank'
    //      valid = false
    // }
    // console.log(annual_income)
    
    // if(!valid){
    //     e.preventDefault()
    //     console.log('Error')
    // }else{
    //     e.preventDefault()
    //     console.log('no error')
    // }




// function giveLoan(){
  
//     let annual_income = parseInt(document.getElementById('annual_income').value)
//     let amount_account = parseInt(document.getElementById('amount_account').value)
//     let loan_amount = parseInt(document.getElementById('loan_amount').value)
//     let credithistory = document.getElementById('credithistory').value;
//     let lastdate = document.getElementById('lastdate').value;
//     let repayment = document.getElementById('repayment').value;
//     let accounttype = document.getElementById('accounttype').value;
//     let depositdate = document.getElementById('depositdate').checked;
//      let answers =document.getElementById('answers').value

//     let loanamount = 0.45 * annual_income;

//    

//   if (amount_account > loan_amount) {
//              points += 10;
//              console.log(points)
//         } else{
//             points =-10;
//             console.log(points)
//         }

//         if (credithistory === 'yes') {
//                     points += 10;
//                     console.log("credithistory", points)
//                 }
//                 if (depositdate) {
//                     points += 5;
//                     console.log("depositdate", points)
//                 }
//                 if (lastdate === 'yes1') {
//                     points += 10;
//                     console.log("lastdate", points)
//                 }
            
//                 if (repayment === 'yes2') {
//                     points += 5;
//                     console.log("repayment", points)
//                 }
//                 if (accounttype === 'current') {
//                     points += 10;
//                     console.log("accountype", points)
//                 } else if (accounttype === 'savings') {
//                     points += 5;
//                     console.log("accountype", points)
//                 }
//     // console.log(accounttype)
//     let worthiness=document.getElementById('worthiness')
//     if (points>=30 && loan_amount <= loanamount) {
        
//               worthiness.innerHTML = `You are eligible for loan ${points}!`;
//          } else{
//                 worthiness.innerHTML = `Sorry but you aren't eligible for a loan !`;
//          }
//     console.log(`Credit points ${points}`)
// }






