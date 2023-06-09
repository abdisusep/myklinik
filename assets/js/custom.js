$('#logout').click(() => {
    Swal.fire({
        title: 'Logout',
        text: "Are you sure ?",
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Yes'
      }).then((result) => {
        
      })
});

$('.select-two').select2( {
  theme: 'bootstrap-5'
});

$('.date-range').daterangepicker();


function currentTime() {
  let date = new Date(); 
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

   hh = (hh < 10) ? "0" + hh : hh;
   mm = (mm < 10) ? "0" + mm : mm;
   ss = (ss < 10) ? "0" + ss : ss;
    
   let time = hh + " : " + mm + " : " + ss;

  document.getElementById("clock").innerText = time; 
  var t = setTimeout(function(){ currentTime() }, 1000); 

}

currentTime();