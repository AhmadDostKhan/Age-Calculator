let enterDate = document.querySelector(".inputDate");
let result = document.querySelector(".result");

function ageCalculator() {
  let birthdate = new Date(enterDate.value);
  let d1 = birthdate.getDate();
  let m1 = birthdate.getMonth() + 1;
  let y1 = birthdate.getFullYear();

  let todayDate = new Date();
  let d2 = todayDate.getDate();
  let m2 = todayDate.getMonth() + 1;
  let y2 = todayDate.getFullYear();

  let d3, m3, y3;

  y3 = y2 - y1;

  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = 12 + m2 - m1;
  }

  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    m3--;
    d3 = getDaysInMonth(y2, m2 - 1) + d2 - d1;
    if (m3 < 0) {
      m3 = 11;
      y3--;
    }
  }

  result.innerHTML = `Your Age is ${y3} years ${m3} months and ${d3}  days`;
}

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}
