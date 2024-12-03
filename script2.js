window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
  var mybutton = document.getElementById("ttpbtn");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    if (mybutton.style.display === "none") {
        mybutton.style.display = "block";  // إظهار الزر
        setTimeout(function() {
            mybutton.style.transform = "scale(1)";  // تكبير الزر بشكل سلس
        }, 10);  // تأخير قليل بعد الظهور
    }
  } else {
    mybutton.style.transform = "scale(0)";  // تصغير الزر عند التمرير للأعلى
    setTimeout(function() {
        mybutton.style.display = "none";  // إخفاء الزر بعد التصغير
    }, 300);  // الانتظار قليلاً قبل إخفاء الزر
  }
}

function ScrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

