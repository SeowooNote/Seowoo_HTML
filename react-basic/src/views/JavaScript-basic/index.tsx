import { Console } from "console";

function JavaScriptBasic(){
     // 주석 //
     /* 
      * 여러줄 주석 
      */

     // 변수 : js의 경우 변수의 타입이 존재하지 않음 / ts의 경우 변수의 타입이 존재
     // javaScript / typeScript 에서 변수를 선언하는 방법
     // 1. var 키워드 사용
     var variable1;
     variable1 = 1;
     variable1 = 1.1;
     variable1 = "안녕하세요1.";

     // localVariable = 0;
     // if(true){
     //      var localVariable;
     // }
     // localVariable = 1;

     // 2. let 키워드 사용
     let variable2;
     variable2 = 2;
     variable2 = 2.2;
     variable2 = "안녕하세요2.";

     // if(true){
     //      let localVariable;
     // }
     // localVariable = 1;

     // 3. const : 상수 (Java와 다르게 선언시에 반드시 초기화 해야함)
     // Java의 경우 상수 선언 및 초기화를 따로 해도 되지만, js 와 ts의 경우 선언 및 초기화를 동시에 해야함
     const constantVariable = 10;

     // 4. typeScript의 변수 선언
     let typScriptVariable1 = 10;
     // typScriptVariable1 = "안녕하세요 typeScript 입니다.";  // 오류 발생
     
     let typScriptVariable2: string;    // 변수의 타입을 지정 (typeScript)
     typScriptVariable2 = "안녕하세요 typeScript 입니다.";
     // typScriptVariable2 = 0; // 변수의 타입을 string으로 지정하였기 떄문에 다른 타입의 변수 값 설정 불가

     let typScriptVariable3: String = "안녕하세요 typeScript 입니다.";

     // 데이터 타입
     // number : 숫자 타입 (정수, 실수, 10진수, 16진수, ...)
     let numberVariable: number = 0;
     numberVariable = 0.1;
     numberVariable = 0xff;   // 0x - 16진수 표현식

     // boolean : 논리 타입
     let booleanVariable: boolean = true;
     booleanVariable = false;

     // string : 문자열 타입
     let stringVariable1: string = "문자열 타입입니다.(typeScript)";
     let stringVariable2: String = "문자열 타입입니다.(typeScript)";
     // stringVariable1 = stringVariable2;

     // array : 배열 타입
     let numberArray: number[] = [1, 2, 3];
     // numberArray = [true, false];    // 오류 발생

     // object : 객체 타입
     let object: any = {
          name: "홍길동",
          age: 20
     };

     // object = {
     //      name: "김사과",
     //      age1: 20
     // };

     // null : 값이 지정되지 않은 타입
     object = null;
     let nullVariable: null = null;

     let stringVariable3: string | null | number = null;
     stringVariable3 = "문자열";
     stringVariable3 = null;
     stringVariable3 = 0;

     // undefined : 정의되지 않은 타입
     let undefinedVariable: undefined = object.address;

     // any : 모든 타입을 받을 수 있는 타입 (쓰지 않는 것이 좋음)
     let anyVariable: any = 10;
     anyVariable = "문자열";

     // 연산자
     let result: any = 10 / 3;     // 3.333...
     
     let number1: any = 10;
     let number2: any = "10";

     result = number1 == number2;  // true
     result = number1 === number2;  // false

     result = number1 != number2;  // false
     result = number1 !== number2;  // true

     // 조건문
     // 조건문의 조건이 무조건 true, false 형태의 boolean 값이 오지 않아도 됨
     // false : 0, 0.0, '', undefined, null
     const string = '';
     if(string){

     }

     // 반복문
     // for, while 문 모두 사용 가능
     const exampleArray = ['apple', 'banana', 'carrot'];

     // forEach 함수 : 배열.forEach(반환 값이 없는 함수);
     // for(string item: exampleArray){
     //   console.log(item);
     // }
     exampleArray.forEach(function(item){
          console.log(item);
     });

     // map 함수 : 배열.map(반환 값이 있는 함수);
     //            배열을 반복하면서 함수 작업의 반환 값으로 새로운 배열을 생성하여 반환
     const numbers = [1, 2, 3, 4, 5];
     let resultList = numbers.map(function(item){
          const result = item * item;
          return result; // 결과 값 : [1, 4, 9, 16, 25]
     });

     // filter 함수 : 배열.filter(조건문을 가진 함수);
     //               배열을 반복하면서 함수에 작성된 조건문에 부합하는 요소만 반환
     resultList = numbers.filter(function(item){
          return item % 2 == 0;    // 결과 값 : [2, 4]
     });

     // 객체 생성
     // 1. JSON 형식을 이용하여 생성 (바로 생성)
     // JSON : { 'key': 'value', 'key': 'value', ... }
     let object1 = {
          name: '홍길동',
          age: 20,
          address: '대한민국'
     };

     // 2. class를 이용하여 생성
     class CHuman {
          name: string;
          age: number;
          address: string;
          constructor(name: string, age: number, address: string){
               this.name = name;
               this.age = age;
               this.address = address;
          }
     };

     object1 = new CHuman('김사과', 30, '미국');

     // 3. interface를 이용하여 생성 (typeScript 에서만 가능)
     interface IHuman {
          name: string;
          age: number;
          address: string;
     };

     let object2: IHuman = {
          name: '고길동',
          age: 40,
          address: '캐나다'
     };

     object2.age;

     // 구조 분해 할당
     // let name = object1.name;
     // let age = object1.age;

     let { name, age } = object1;  // { name : '홀길동', age : 20, address : '대한민국' }
     console.log(name);
     console.log(age);

     let { address, ...other } = object1;    // ...other : 새로운 객체를 생성 (나머지 한꺼번에 새로운 객체 내부에 합쳐서 생성됨)
     // address: '대한민국', other: {name : '홀길동', age : 20}
     console.log(address);

     let object3 = { telNumber: '010-1234-5678', email: 'email@email.com' };
     let sumObject = { ...object2, ...object3 };  // { name : '홀길동', age : 20, address : '대한민국', telNumber: '010-1234-5678', email: 'email@email.com' } 합쳐짐

     // 함수
     
     // 함수 선언 방법
     // function 함수명 (매개변수: 타입, ...): 반환타입 {
     //   ...
     //   return 결과값;
     // }

     // 화살표 함수
     // 함수를 변수처럼 사용하는 것
     // 화살표 함수 선언 방법
     // const or let 함수명 = (매개변수: 타입, ...): 반환타입 => {
     //   ...
     //   return 결과값;
     // }

     // 익명함수 : 함수명이 없는 함수 (일회성, 재사용이 불가능)

     return(<></>);
}

export default JavaScriptBasic;