"use strict";

/*
    ...  = ...
    rest | spread
    //= 기준으로 나누기

    rest 연산자 사용법을 학습한다.

    ES 5에서는
    arguments 매개변수는 유사 배열 객체다.
    length 프로퍼티가 있다.
    Array 메서드를 사용할 수 없다.
    arrow function에서는 arguments는 사용할 수 없다.

    ES 6에서는
    rest 매개변수는 배열이다.
    rest 연산자(...)를 사용하여 함수의 매개변수를 작성한 형태다.
    함수의 매개변수로 넘어오는 값들을 "배열"로 만든다.
*/

// ...args 에서 ...를 rest 연산자라고 부른다.
// arguments 를 대체 가능
function greet() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  //가변 매개변수를 이용한 출력
  console.log('가변매개변수(rest연산자) >> ', args);

  // arguments를 사용하여 출력
  console.log('arguments >> ', arguments);
  console.log('\n\n');
}
greet(); //
greet('Elise'); // Elise
greet('Mike', 'Hi'); // Mike Hi