//자바스크립트는 prototype 기반 상속
// ES6에서는 편리하게 사용하기 위해 CLASS 문법을 추가함
class Shape{
    static create(x, y) { return new Shape(x, y); }
    constructor(x,y){
        this.name="Shape";
        this.move(x,y);
    }
    //메서드들
    move(x,y){
        this.x = x;
        this.y = y;
    }
    area(){
        return 0;
    }
}

let s = new Shape(10,20);
console.log(s,s.x,s.y,s.area());

//상속 extends : 부모로부터 속성들을 물려받는다
//this : 자기 자신 , super : 부모를 지칭
class Circle extends Shape{
    //생성자
    constructor(x,y,radius){
        super(x,y);     //super 생성자를 이용하요 초기 설정
        this.radius = radius;
    }
    //메서드 오버라이드
    area(){
        return this.radius ** 2 * Math.PI;
    }
};

let c = new Circle(20,30,10);
console.log(c,c.x,c.y,c.radius,c.area());