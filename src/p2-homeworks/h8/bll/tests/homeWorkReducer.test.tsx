import React from 'react'
import {homeWorkReducer} from '../homeWorkReducer'
import {User} from "../../HW8";

let initialState: User[] // need to fix any

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'up'})

    console.log(newState)
    expect(initialState).toEqual([
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ])
    expect(initialState).not.toBe(newState)
    expect(newState[0].name).toBe('Александр')
    expect(newState[0].age).toBe(66)
    expect(newState[1].name).toBe('Виктор')
    expect(newState[1].age).toBe(44)
})
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'down'})

    console.log(newState)
    expect(initialState).toEqual([
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ])
    expect(initialState).not.toBe(newState)
    expect(newState[0].name).toBe('Кот')
    expect(newState[0].age).toBe(3)
    expect(newState[1].name).toBe('Коля')
    expect(newState[1].age).toBe(16)
})
test('check age 18', () => {
    const newState = homeWorkReducer(initialState, {type: 'check', payload: 18})

    console.log(newState)
    expect(initialState).toEqual([
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ])
    expect(initialState).not.toBe(newState)
    expect(newState.length).toBe(4)
    expect(newState.find(item => item.age === 18)).toBeUndefined()
})
