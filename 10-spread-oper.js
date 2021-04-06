console.log("-------------배열 전개 연산")

//ES5 방식 배열 합치기
let arr1 = ['홍길동','장길산'];
let arr2 = ['임꺽정','전우치'];

console.log("arr1 : " ,arr1);
console.log("arr1 : " ,arr2);

let combined = [];

//ES5 방법 1 . 각 요소를 꺼내서 새 배열에 할당
combined = [arr1[0],arr1[1],arr2[0],arr2[1]];
console.log("combined m1 : ",combined);

//ES5 방법 2 . concat 메서드 사용
combined = arr1.concat(arr2);       //arr1배열에 arr2를 연결 새 배열 생성
console.log("combined m2 : ",combined);

//ES5 방법 3 . 빈 배열에 concat 매서드 사용
combined = [].concat(arr1,arr2);
console.log("combined m3 : ",combined);

//ES6 방법 
combined = [...arr1,...arr2];
console.log("combined m4 : ",combined);

//배열의 전개
console.log("원본 배열 : ",combined);

let [first,second,third = "empty",...others] = arr1;        //third= "empty" arr1의 3번째값이 비어있다면 기본값으로 "empty" 를 넣어라. 라는뜻인듯

console.log("arr1 : ",arr1);
console.log("전개: ",first,second,third,others);
console.log("combined : ",combined);
[first,second,third="empty",...others] = combined;
console.log("전개: ",first,second,third,others);


console.log("--------------객체 전개 연산");
let obj1 = {one : 1 , two : 2 , other : 0};
let obj2 = {three : 3 , four : 4 , other : -1};

//ES5 방식으로 두 객체 합치기
//방법 1. 수작업 풀어내기
combined = {
    one : obj1.one,
    two : obj1.two,
    three : obj2.three,
    four : obj2.four,
    other : obj1.other
};
console.log("obj1 : ",obj1);
console.log("obj2 : ",obj2);
console.log("combined m1 : ",combined);

//ES5 방법 2. Object.assign
combined = Object.assign({},obj1,obj2);
console.log("combined m2 : ",combined);
//assign 의 순서를 바꿔보자
combined = Object.assign({},obj2,obj1);
console.log("combined m3 : ",combined);

//ES6 방식
combined = {
    ...obj1,    //obj1의 모든 속성을 전개
    ...obj2     //obj2의 모든 속성을 전개
}

console.log("obj combined es6 : ",combined);

//속성의 전개
console.log("obj combined : ",combined);
let{one,two,other,...otrs} = combined;
console.log("전개 : ",one,two,other,otrs);