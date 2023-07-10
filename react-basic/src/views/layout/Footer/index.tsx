import React, { useState } from 'react'

interface Human{
  name: string;
  age: number;
}

export default function Footer() {
  const [human, setHuman] = useState<Human>({name: '홍길동', age: 20});
  const [value, setValue] = useState<string>('');

  const changeHuman = () => {
    // console.log(human);
    // human.name = '김철수';
    // human.age = 30;

    const newHuman: Human = {
      name: '김철수',
      age: 30
    }
    setHuman(newHuman);
  }

  return (
    <>
      <div>{human.name} {human.age}</div>
      <button onClick={changeHuman} style={{ cursor: 'pointer' }}>변경</button>
      <div>
        <input onChange={(event) => {setValue(event.target.value)}} type="text" placeholder="입력해주세요." />{value}
      </div>
    </>
  )
}