import React, { ChangeEvent, useState } from 'react'

type SearchableListProps = {
  list: string[],
}

export const SearchableList: React.SFC<SearchableListProps> = ({ list }) => {

  const [search, setSearch] = useState('')
  const [actualList, setActualList] = useState(list)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
    setActualList(list.filter((item) => item.indexOf(event.target.value) >= 0))
  }

  return (
    <>
      <input type="text" value={search} onChange={handleChange} />
      <ul>
        {actualList.map((value, index) => <li key={index}>{value}</li>)}
      </ul>
    </>
  )
}
