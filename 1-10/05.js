// Q 다음 코드의 출력 값으로 알맞은 것은?
var a = 10;
var b = 2;
for (var i = 1; i < 5; i += 2) {
  a += i;
}
console.log(a + b);

// Answer
//Omuing_ver1
// 처음 i 는 1 이니까
// a += i 는 ? 10 + 1 = 11 나옴
// 다음 i는 3이니까
// a += i는 ? 11 + 3 = 14 나옴
// 14+ 2 = 16 이거 맞나? (응 이게 마자)

// sjshin_ver1
//for문 반복 (풀이 틀림!!!!!!!!!!!!!)
// i=1 : +2 증가 a = 12
// i=3 : +2 증가 a = 14
// i=5 반복 종료
console.log(a + b); // 14 + 2 = 16


//sePark
//최초 i = 1, a + i = 11
//두번째 i = 3, a + i = 14
//i < 5 라서  for문 종료
//console.log( 14 + 2)
