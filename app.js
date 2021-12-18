/*SEARCH BY USING A CITY NAME (e.g. athens) OR A COMMA-SEPARATED CITY NAME ALONG WITH THE COUNTRY CODE (e.g. athens,gr)*/
const frm = document.getElementById('form');
const input = $('#cityName');
const msg = $('.msg');
const list = $('.cities');
/*SUBSCRIBE HERE FOR API KEY: https://home.openweathermap.org/users/sign_up*/
const apiKey = "5026d0b670d5d0961291b2cf922dafd8";

function frmSubmit(){
    debugger;
    // e.preventDefault();
     let inputVal = $('#cityName').val();
   

   
    
   
     //ajax here
     const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;
   debugger;
     fetch(url)
       .then(response => response.json())
       .then(data => {
         const { main, name, sys, weather } = data;
         const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
           weather[0]["icon"]
         }.svg`;
   
         var li = document.createElement("li");
         li.classList.add("city");
         var markup = `
           <h2 class="city-name" data-name="${name},${sys.country}">
             <span>${name}</span>
             <sup>${sys.country}</sup>
           </h2>
           <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
           <figure>
             <img class="city-icon" src="${icon}" alt="${
           weather[0]["description"]
         }">
             <figcaption>${weather[0]["description"]}</figcaption>
           </figure>
         `;
        //  li.innerHTML = markup;
        //  list.appendChild(li);
        $('.cities').html(markup);
       })
       .catch(() => {
         msg.text = "Please search for a valid city";
       });
   
     msg.text = "";
     form.reset();
     input.focus();
}
