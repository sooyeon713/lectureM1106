"use strict";

/*
 (구조) 분해 할당에 대해서 알아본다.


*/
//배열에 잉ㅆ는 요소를 개별 변수로 만들기.
var points = [20, 30, 40];
var x1 = points[0];
var y1 = points[1];
var z1 = points[2];
console.log(x1, y1, z1); // 20, 30, 40

var x2 = points[0],
  y2 = points[1],
  z2 = points[2]; // const [x2, y2, z2] = [20, 30, 40];
console.log(x2, y2, z2); // 20, 30, 40

// 두번째 값 무시하기
var x3 = points[0],
  z3 = points[2]; //[20, 30, 40];
console.log(x3, z3); //20, 40

// 두번째, 세번째 값 무시하기
var x4 = points[0],
  w4 = points[3]; //[20,30,40];
console.log(x4, w4); //20 underfined

/*
 * 객체 분해 할당 연산자 사용법을 실습한다.
 */
var car = {
  type: 't',
  color: 's',
  model: 2021
};

//ES5 에서의 객체 분해 할당
var type1 = car.type;
var color1 = car.color;
var model1 = car.model;
console.log(type1, color1, model1); // // t s 2021

//ES2015 에서의 객체 분해 할당. {} 사용해서
var type = car.type,
  color = car.color,
  model = car.model,
  gear = car.gear;
console.log(type, color, model, gear); // t s 2021 undefined

var type2 = car.type,
  color2 = car.color,
  model2 = car.model,
  gear2 = car.gear;
console.log(type2, color2, model2, gear2); // t s 2021 undefined

//분해할당 - react에서 주ㅗ 사용되는 방식
var func1 = function func1(_ref) {
  var type = _ref.type,
    color = _ref.color;
  console.log(type); // t
  console.log(color); // s
};

func1(car);