/*

    스프레드 사용법을 학습한다.

    ES 5에서는
    arguments 매개변수는 유사 배열 객체다.
        length 프로퍼티가 있다.
        Array  메서드를 사용할 수 없다.
        arrow function에서는 arguments는 사용할 수 없다.

    ES2015 에서는
    rest 매개변수는 배열이다.
        rest 연산자(...)를 사용하여 함수의 매개변수를 작성한 형태다.
        함수의 매개변수로 넘어오는 값들을 "배열"로 만든다.

    Spread 연산자는 ... 이다.
        이터러블(iterable) 객체를 "개별" 요소로 분리
        이터러블(iterable) 객체에는 Array, String, Map, Set 등이 있다.
        iterator를 생성해서 next()로 순회할 수 있는 자료구조가 이터러블

*/

const cities = ['서울', '부산', '제주'];

//배열 요소를 변수로 만드시오, x, y, z
const x = cities[0]; // 0번방에 ㅔ 있는 값을  만들 수 있음  값 : 서울
const y = cities[1]; // 값 : 부산
const z = cities[2]; // 값 : 제주

//출력
console.log(cities[0], cities[1], cities[2]); // 값 : '서울', '부산', '제주'
console.log(x, y, z); // 값 : '서울', '부산', '제주'
console.log(...cities); // ... 은 객체에서 사용할 때 좋음

//spread 연산자는 기존의 값을 이용하여 새로운 값을 만들 때 사용된다.
// 복제된 배열, 복제된 객체
const east = ['U', 'K', 'T'];
const west = ['N', 'C', 'G'];
//const countries = ['U', 'K', 'T', 'N', 'C', 'G'];
console.log(east.concat(west)); // ["U", "K", "T", "N", "C", "G"];
const countries = [...east, ...west]; //... : spread 연산
console.log(countries);

//객체에서의 스프레드 연산자 상용법을 익힌다.
const car1 = {
  type: 't1',
  color: 'S1',
  model: 2017,
};

const car2 = {
  type: 't2',
  color: 'S2',
  model: 2019,
};
const { type } = car1;
console.log(type); // t1

//{ type } = { ...car1, ...car2 }
const func = function ({ type }) {
  console.log(type); //type 값은 무엇인가?
};
func({ ...car1, ...car2 });

//spread 연산자를 이용하여 새로운 객체를 만드는 방법을  실습힌다.
//===> 불변객체의 복제 후 할당

const moring = {
  breacfast: '미역국',
  lunuch: '삼치구이',
};

const dinner = '스테이크';

const meals = {
  ...moring,
  dinner, // dinner: dinner,
};

console.log(meals); // meals에 출력되는 값은 무엇인가?
//
