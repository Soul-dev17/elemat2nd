var countDownDate = new Date("January 28, 2024 16:27:01").getTime();
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = (now - countDownDate)/1000
  document.getElementById("cd-d").innerHTML = Math.floor((distance)/60)
  document.getElementById("cd-h").innerHTML = Math.floor((distance)/100)
  document.getElementById("cd-m").innerHTML = Math.floor((distance+1000)/60)
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Đã kết thúc";
  }
}, 1000);