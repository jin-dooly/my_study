import React, { useState } from 'react'


const List = React.memo(({
  id, title, completed, todoData, setTodoData, provided, snapshot, handleClick
}) => {
  console.log('List Component')

  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);

  const handleCompleChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    setTodoData(newTodoData);
    localStorage.setItem('todoData', JSON.stringify(newTodoData));
  };

  const handleEditChange = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleSubmit = () => {
    let newTodoData = todoData.map((data) => {
      if(data.id === id) {
        data.title = editedTitle;
      }
      return data;
    });
    setTodoData(newTodoData);
    localStorage.setItem('todoData', JSON.stringify(newTodoData));
    setIsEditing(false);
  }


  if (isEditing) {
    return (
      <div className={`flex items-center justify-between w-full px-4 py-1 my-2 bg-gray-100 text-gray-600 border rounded`}>
        <form onSubmit={handleSubmit}>
          <input
            value={editedTitle}
            onChange={handleEditChange}
            autoFocus
            className='w-full px-3 py-2 mr-4 text-gray-500'
          />
        </form>
        <div className='items-center'>
          <button className='px-4 py-2 float-right' onClick={() => {setIsEditing(false); setEditedTitle(title)}} type='button'>
            x
          </button>
          <button className='px-4 py-2 float-right' onClick={handleSubmit} type='submit'>
            save
          </button>
        </div>
      </div>
    )
  } else {
    return (
      <div
        key={id}
        {...provided.draggableProps}
        ref={provided.innerRef}
        {...provided.dragHandleProps}
        className={`${snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"} flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 border rounded`}
      >
        <div className='items-center'>
          <input
            type="checkbox"
            onChange={() => handleCompleChange(id)}
            defaultChecked={false}
          />{" "}
          <span className={completed ? "line-through" : undefined}>{title}</span>
        </div>
        <div>
          <button className='px-4 py-2 float-right' onClick={() => handleClick(id)}>
            x
          </button>
          <button className='px-4 py-2 float-right' onClick={() => setIsEditing(true)}>
            edit
          </button>
        </div>
      </div>
    )
  }
});

export default List