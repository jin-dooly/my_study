import React, { useState } from 'react'

const Form = React.memo(({data, setData}) => {
  const [changeName, setChangeName] = useState("")
  const [changeNumber, setChangeNumber] = useState("")

  const handleChangeName = (e) => {
    setChangeName(e.target.value);
  };

  const handleChangeNumber = (e) => {
    setChangeNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newData = {
      id: Date.now(),
      name: changeName,
      number: changeNumber
    };

    setData([...data, newData]);
    localStorage.setItem('data', JSON.stringify([...data, newData]));
    
    setChangeName("");
    setChangeNumber("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' name='name' value={changeName} placeholder='이름' onChange={handleChangeName}/>
        <input type='text' name='number' value={changeNumber} placeholder='전화번호' onChange={handleChangeNumber}/>
        <button type='submit' value={{changeName, changeNumber}}>등록</button>
      </form>
    </div>
  )
});

export default Form

