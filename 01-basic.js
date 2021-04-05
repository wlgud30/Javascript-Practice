// 한줄 주석
/*
여러줄 주석
*/


//내장 객체 console : 콘솔에 출력
console.info("정보 메세지");
console.debug("디버그 메세지");
console.warn("경고메세지")
console.error("에러 메세지");
console.log("로그 메세지");

//내용을 연속으로 출력할때는 , 사용
console.log("String",2021);

//객체의 속성,메서드에 접근할때는 . 으로 접근
console.log(Math.PI);
console.log(Math.max(1,3,2,5,6));//메서드 접근

//var let const
var testVar = 2021; //var : es6 이전 방식 -> web 에서는 아직 사용한다

//es6이후
let testLet = "let";    // let 재할당 가능 변수
const testConst = "const"   //const 재할당 불가 변수 - 상수처럼 이용
//const 는 선언과 동시에 값을 할당해야한다

console.log(testVar,testLet,testConst);

testVar = "var changed";
testLet = "let changed";
//testConst = "const changed"; error : const 는 재할당불가
//es6 가 지원되는 환경에서는 먼저 const 로 할 수 있는지 먼저 생각

console.log(testVar,testLet,testConst);

//자바스크립트는 동적 타이핑언어
//변수 선언시는 데이터 타입이 정해지지 않고 데이터가 할당될때 타입이 정해진다
let v = "This is String";
console.log(v,"->",typeof v);
v = 2021;
console.log(v,"->",typeof v);