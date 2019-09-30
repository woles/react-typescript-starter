import React from 'react'
// tslint:disable-next-line: no-implicit-dependencies
import { act, create } from 'react-test-renderer'

import { Text } from './text'

describe('Text component tests', () => {
  test('it render', () => {
    const counter = create(<Text />)
    const instance = counter.root
    const div = instance.findByType('div')
    expect(div.children[1]).toBe('TEST COMPONENT')
  })
  test('it increment by value', async () => {
    const counter = create(<Text />)
    const instance = counter.root
    const button = instance.findByType('button')
    await act(async () => {
      button.props.onClick()
    })
    const div = instance.findByType('div')
    expect(div.children[1]).toBe(undefined)
  })
})
