import React from 'react'
// tslint:disable-next-line: no-implicit-dependencies
import { act, create } from 'react-test-renderer'

import { SearchableList } from './searchableList'

const cities = [
  'New York',
  'London',
  'Paris',
  'Lisbon',
  'Tokio',
  'Pekin',
]

describe('SearchableList component tests', () => {
  test('it render input and list', () => {
    const list = create(<SearchableList list={cities} />)
    const instance = list.root
    const inputs = instance.findAllByType('input')
    expect(inputs.length).toBe(1)
    const listElements = instance.findAllByType('li')
    expect(listElements.length).toBe(cities.length)
  })
  test('it search the listenerCount', async () => {
    const list = create(<SearchableList list={cities} />)
    const instance = list.root
    const input = instance.findByType('input')
    const event = {
      target: {
        value: 'on',
      },
    }
    await act(async () => {
      input.props.onChange(event)
    })
    const listElements = instance.findAllByType('li')
    expect(listElements.length).toBe(2)
  })
})
