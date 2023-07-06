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
     
     return(<></>);
}

export default JavaScriptBasic;