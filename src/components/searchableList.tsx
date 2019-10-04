import React, { ChangeEvent, useState } from 'react'

type SearchableListProps = {
  list: string[],
}

export const SearchableList: React.FC<SearchableListProps> = ({ list }) => {

  const [state, setState] = useState({
    actualList: list,
    search: '',
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState({
      actualList: list.filter((item) => item.indexOf(event.target.value) >= 0),
      search: event.target.value,
    })
  }

  return (
    <>
      <input type="text" value={state.search} onChange={handleChange} />
      <ul>
        {state.actualList.map((value, index) => <li key={index}>{value}</li>)}
      </ul>
    </>
  )
}
