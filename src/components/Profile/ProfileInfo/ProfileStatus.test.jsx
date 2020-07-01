import React from 'react'
import { create } from 'react-test-renderer'
import ProfileStatus from './ProfileStatus'

describe('ProfileStatus component', () => {
  test('status from props should be in the state', () => {
    const component = create(
      <ProfileStatus status='HTML - это не язык программирования)' />
    )
    const instance = component.getInstance()
    expect(instance.state.status).toBe('HTML - это не язык программирования)')
  })

  test('after creation span should be displayed', () => {
    const component = create(
      <ProfileStatus status='HTML - это не язык программирования)' />
    )
    const root = component.root
    let span = root.findByType('span')
    expect(span.length).not.toBeNull()
  })

  test('after creation input should`t be displayed', () => {
    const component = create(
      <ProfileStatus status='HTML - это не язык программирования)' />
    )
    const root = component.root

    expect(() => {
      let input = root.findByType('input')
    }).toThrow()
  })

  test('after creation span should contains correct status', () => {
    const component = create(
      <ProfileStatus status='HTML - это не язык программирования)' />
    )
    const root = component.root
    let span = root.findByType('span')
    expect(span.children[0]).toBe('HTML - это не язык программирования)')
  })

  test('input should be displayed in editMode', () => {
    const component = create(
      <ProfileStatus status='HTML - это не язык программирования)' />
    )
    const root = component.root
    let span = root.findByType('span')
    span.props.onDoubleClick()
    const input = root.findByType('input')

    expect(input.props.value).toBe('HTML - это не язык программирования)')
  })
})
