//  속성
/*  프로퍼티 : 객체가 가진 데이터
    메서드 : 객체가 가진 기능 함수
*/

//객체 생성 방법
const person = new Object();
//동적 타이핑 언어 , 설계도에 없는 속성도 동적으로 추가할 수 있다.

console.log("person :",person);
person.name="홍길동";
person.age = 32;
//메서드의 추가
person.showinfo = function(){
    let message = `Name: ${this.name},Age : ${this.age}`;
    console.log(message);
}
console.log("person :",person);
person.showinfo();

//객체 생성 방법 2: json(매우중요)
//{} -> 객체 표기, 속성들은 KEY:VALUE 쌍으로 기술한다
console.log("-----------------------json")
const person2 = {
    name : "장길산",
    age : 43,
    showInfo : function(){
        console.log(`Name : ${this.name}, Age : ${this.age}`);
    }
}

console.log("person2",person2);
person2.showInfo();

//객체 생성 방법 3: 함수를 생성자처럼 활용
console.log("----------Prototype");
const Member = function(name,position){
    this.name = name;
    this.position = position;
};
console.log("Member",Member);

let m1 = new Member("강백호","PF");
let m2 = new Member("서태웅","SF");

console.log("m1 : ",m1);
console.log("m2 : ",m2);

//javascript 는 동적으로 속성을 추가할 수 있다.
//m1 에 동적으로 메서드 추가
m1.sayHi = function(){
    console.log(`${this.name} , ${this.position}`);
}
m1.sayHi();

console.log(m1.constructor);    //m1을 생성한 생성 객체 확인
//동일 객체는 prototype(중요) 라는 공유 영역을 가지고 있다.
//이 객체를 이용 , new(인스턴스화)한 모든 인스턴스에 동일한 속성을 공유해 줄 수 있다
//상속의 일부 개념을 구현할 수 있다.
console.log("Member 객체의 prototype 영역 : ",Member.prototype);

Member.prototype.introduce = function(){
    console.log("Name : "+this.name);
    console.log("Position : ",this.position);
};

console.log("Member 객체의 prototype 영역 : ",Member.prototype);
//프로토타입에 추가된 속성은 해당 객체로 생성된 모든 인스턴스에서 공유할 수 있다.
m1.introduce();
m2.introduce();

//prototype 영역과,동적 속성 등록의 특성을 활용하면,
//기존 객체들에도 동적으로 속성을 추가할 수 있다.
console.log("String 객체의 prototype : ", String.prototype);
//기존 String 객체에 동적으로 원하는 기능을 추가해 보기
// .sayHello() 메서드를추가

String.prototype.sayHello = function(){
    return  "say Hello , " + this;
}

console.log("둘리".sayHello());