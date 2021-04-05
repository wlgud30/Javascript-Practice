//  C, Java와 거의 비슷한 조건 분기, 반복문을 활용

//  연습문제 1:
//  for 문과 while 문을 이용, 구구단 출력(각각)

//  연습문제 2:
//  for 문과 while 문을 이용, 아래와 같이 출력해 봅시다(각각)
/*
*****
****
***
**
*
*/

let star = "";
for(let i = 0 ; i<5;i++){
    for(let j = 5 ; j>i; j--){
        star += "*";
    }
    star+="\n";
}

console.log(star);

star ="";
let i=0;
while(i<5){
    i++;
    let j=0;
    while(j<6-i){
        j++
        star+="*";
 
    }
    star+="\n";
}
console.log(star);