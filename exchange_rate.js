        const select = document.querySelectorAll('select');
        const input = document.querySelectorAll('input');
        let date = document.getElementById("date");
        let html = '';
        
        //API Link
        const API = "http://api.exchangeratesapi.io/v1/latest?access_key=1d1a645a9c743e7a24b6c8a489de1607";
       // https://forex.cbm.gov.mm/api/latest?access_key=53285b81e3ce76e5d2b54614a97c58c0
       
        async function currency(){
        const res = await fetch(API);//connect to fetch
        const data = await res.json();//import json file
        console.log(data.rates);

         const arrayKeys = Object.keys(data.rates);
         const rates = arrayKeys.rates;
         console.log(rates);

        date.innerHTML= data.date;
        

        if(data.success == true){
            document.getElementById("status").innerHTML = "Success";
        }
        else
        {
            document.getElementById("status").innerHTML = "Sever not connect";   
        }
        


    arrayKeys.map(item =>{
        return html += `<option value=${item}>${item}</option>`;
    });
    console.log(html);

   // Show Data to html selection's option
    for(let i=0; i<select.length; i++){
        select[i].innerHTML = html;
        
    };

    console.log([select[0].value]);

    let temp1,temp2;
    let n1, n2;

    input[0].addEventListener("input",()=>{
        temp1 = input[0].value * data.rates[select[1].value] / data.rates[select[0].value];
        n1 = temp1.toFixed(3);
        input[1].value = n1;
        document.getElementById("name1").innerHTML = select[0].value+" T";
        document.getElementById("amount1").innerHTML = "o "+select[1].value;
        
        

        document.getElementById("amount").innerHTML = n1+" "+select[1].value;
        

    });

    select[0].addEventListener("click",()=>{
        temp1 = input[0].value * data.rates[select[1].value] / data.rates[select[0].value];
        n1 = temp1.toFixed(3);
        input[1].value = n1;
        document.getElementById("name1").innerHTML = select[0].value+" T";
        document.getElementById("amount1").innerHTML = "o "+select[1].value;
        
        

        document.getElementById("amount").innerHTML = n1+" "+select[1].value;
        

    });




    input[1].addEventListener("input",()=>{
        temp2 = input[1].value * data.rates[select[0].value] / data.rates[select[1].value];
        n2 = temp2.toFixed(3);
        input[0].value = n2;

        document.getElementById("name1").innerHTML = select[1].value+" T";
        document.getElementById("amount1").innerHTML = "o "+select[0].value;
        
        

        document.getElementById("amount").innerHTML = n2+" "+select[0].value;
        
      
    });

    select[1].addEventListener("click",()=>{
        temp2 = input[1].value * data.rates[select[0].value] / data.rates[select[1].value];
        n2 = temp2.toFixed(3);
        input[0].value = n2;

        document.getElementById("name1").innerHTML = select[1].value+" T";
        document.getElementById("amount1").innerHTML = "o "+select[0].value;
        
        

        document.getElementById("amount").innerHTML = n2+" "+select[0].value;
        
      
    });


       


        };
        currency();
      


    // https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_text_value_dropdown2


