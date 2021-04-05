//Javascript 의 숫자
//산술연산이가능
let n1 = 5; //Literal : 소스 코드에 직접 입력된 값
let n2 = Number(5); //Number 타입 함수를 이용한 생성

console.log(n1,"==",n2,"?",n1==n2);
console.log(typeof n1, typeof n2);

//Math 내장 객체의 활용 : 각종 수학 상수,함수들을 가진 내장 객체
console.log(Math.min(1,5,3,2,6,7),Math.max(2,3,4,5,6,7));

//Casting
//자바스크립트는 문자열로 전달받은 수치 데이터를 Number로 변환해야 하는 경우가 많음
console.log("=============Casting");
//parseInt,parseFloat 내장 함수 활용
console.log(parseInt("011"));   //"011" 을 10진수 int 로 변환
console.log(parseInt("011",2)); //"011" 을 2진수 진법 변환
console.log(parseInt("123.456"));   //"123.456" 을 정수로 변환
console.log(parseFloat("123.456")); //123.456 을 실수로 변환

//parseInt : float -> int 변환할 때도 사용
console.log(Math.PI,parseInt(Math.PI));

let n4 = parseInt("abcd1234");
console.log(n4,"is",typeof n4);
console.log(n4,isNaN(n4));

let result = 1/0;       //Infinity
console.log(result,"is",typeof result);

//Infinity 가 포함된 산술식은 항상 Infinity
console.log(result + 10);
//number 객체가 산술연산 가능한 데이터인지 확인 isFinite()함수 사용
console.log(result,"is finite",isFinite(result));