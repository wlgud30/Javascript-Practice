//Date 날짜,시간을다루는 객체
let now = new Date();
console.log("현재시간 : ", now);

let past = new Date(1999,11,31);        //YYYYMMDD 1월은 0 (주의)
console.log("과거 : ",past);

past = new Date(1999,11,31,12,30,30);       //년월일시분초

console.log("년도:", now.getYear() + 1900); //  1900년 기준
console.log("년도:", now.getFullYear());    //  실제 년도
console.log("월:", now.getMonth() + 1);     //  월 
console.log("일:", now.getDate());          //  일
console.log("요일:", now.getDay());         //  요일: 0 = 일요일