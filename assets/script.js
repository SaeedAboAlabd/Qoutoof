// script.js
// حدد تاريخ البدء
const startDate = new Date("october 7, 2023 00:00:00").getTime();

function updateCountUp() {
  const now = new Date();
  const start = new Date(startDate);

  // حساب الفرق بين التاريخين بالسنوات والشهور والأيام
  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();
  let days = now.getDate() - start.getDate();

  // تعديل الحسابات إذا كانت الشهور أو الأيام سالبًا
  if (months < 0) {
    months += 12;
    years--;
  }

  if (days < 0) {
    // تحديد عدد الأيام في الشهر السابق
    const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += previousMonth.getDate();
    months--;
  }

  // حساب الساعات والدقائق والثواني
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // عرض الفرق في السنوات والشهور والأيام
  document.getElementById("years").textContent = years;
  document.getElementById("months").textContent = months;
  document.getElementById("days").textContent = days;

  // عرض الوقت المتبقي (الساعات والدقائق والثواني)
  document.getElementById("hours").textContent = hours < 10 ? '0' + hours : hours;
  document.getElementById("minutes").textContent = minutes < 10 ? '0' + minutes : minutes;
  document.getElementById("seconds").textContent = seconds < 10 ? '0' + seconds : seconds;
}

// تحديث العد التصاعدي كل ثانية
setInterval(updateCountUp, 1000);

// تشغيل العد التصاعدي عند فتح الصفحة
updateCountUp();

window.onscroll = function(){
  scrollFunction();
};

