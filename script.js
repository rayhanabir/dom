// var headerElemnet = document.getElementById('header');
// headerElemnet.style.backgroundColor = 'yellow'
// headerElemnet.style.fontSize = "30px"
// headerElemnet.style.padding = "20px"

//  var color = document.getElementsByClassName("special");
//  for(var i = 0; i<special.length ; i++){
//     var element = special[i];  
//     element.style.backgroundColor = 'yellow';
//  }

//  var box = document.querySelectorAll('.special ');
//  for(var i=0; i<box.length; i++){
//      var element = box[i];
//      element.style.backgroundColor = 'yellow'

//  }
// digon taka dhar neyar function:

function jogkor (num1, num2){
    var jogfol = num1+num2 ;
    return jogfol; 

}
function duigonkor (number){
    var digonpelam =number*2;
    return digonpelam;
}
function dhardey (dharamount){
    var friendertaka = dharamount;
    return friendertaka;
}
var mobilePrice = 800;
var laptopprice = 500;

var total = jogkor(mobilePrice,laptopprice);
var dharlagbe = duigonkor(total);
var takapaichi = dhardey (dharlagbe);
console.log(takapaichi);





