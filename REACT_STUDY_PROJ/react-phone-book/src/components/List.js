import React, { useState } from 'react'

const List = React.memo(({ data, setData, id, name, number }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(name);
  const [editNumber, setEditNumber] = useState(number);


  const listStyle = {
    margin: '10px',
    padding: '10px',
    border: '1px black solid'
  };
  const handleEditName = (e) => {
    setEditName(e.target.value);
  }

  const handleEditNumber = (e) => {
    setEditNumber(e.target.value);
  }

  const handleEditSubmit = () => {
    let newData = data.map((d) => {
      if (d.id === id) {
        d.name = editName;
        d.number = editNumber;
      }
      return d;
    });
    setData(newData);
    localStorage.setItem('data', JSON.stringify(newData));
    setIsEditing(false);
  }

  const deleteData = (id) => {
    let newData = data.filter((data) => data.id !== id);
    setData(newData);
    localStorage.setItem('data', JSON.stringify(newData));
  }


  if (isEditing) {
    return (
      <div style={listStyle} key={id}>
        <form onSubmit={handleEditSubmit}>
          <input value={editName} onChange={handleEditName} autoFocus />
          <p><input value={editNumber} onChange={handleEditNumber} autoFocus /></p>
        </form>
        <button onClick={handleEditSubmit}>적용</button>
        <button onClick={() => { setIsEditing(false); setEditName(name); setEditNumber(number); }}>취소</button>
      </div>
    )
  } else {
    return (
      <div style={listStyle} key={id}>
        <b>{name}</b>
        <p>{number}</p>
        <button onClick={() => setIsEditing(true)}>수정</button>
        <button onClick={() => deleteData(id)}>삭제</button>
      </div>
    )
  }
});

export default List