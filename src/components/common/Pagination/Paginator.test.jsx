import React from 'react'
import { create } from 'react-test-renderer'
import Pagination from './Pagination'

describe('Pagination component test', () => {
  test('pages count is 11 but should be showed only 10', () => {
    const component = create(
      <Pagination totalItemsCount={11} pageSize={1} portionSize={10} />
    )
    const root = component.root
    const span = root.findAllByType('span')
    expect(span.length).toBe(10)
  })

  test('if pages is more then 10 button NEXT should be present', () => {
    const component = create(
      <Pagination totalItemsCount={11} pageSize={1} portionSize={10} />
    )
    const root = component.root
    const button = root.findAllByType('button')
    expect(button.length).toBe(1)
  })
})
