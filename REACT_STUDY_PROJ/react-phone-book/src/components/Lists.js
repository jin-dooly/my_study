import React from 'react'
import List from './List'

const Lists = React.memo(({ data, setData }) => {

  return (
    <div>
      {data.map((d) => (
        <List key={d.id} data={data} setData={setData} id={d.id} name={d.name} number={d.number} />
      ))}
    </div>
  )
});

export default Lists
