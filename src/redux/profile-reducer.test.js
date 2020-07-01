import {render} from "@testing-library/react";
import App from "../App";
import React from "react";
import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 11 },
    { id: 3, message: 'No', likesCount: 11 },
    { id: 4, message: 'Dada', likesCount: 11 },
  ]
}

test('length of post should be incremented', () => {
  //1. test data
  const action = addPostActionCreator('some text')

  //2. action
  let newState = profileReducer(state, action)

  //3. expectation
  expect(newState.posts.length).toBe(5)
  expect(newState.posts[4].message).toBe('some text')
});

test('massage of new post should be correct', () => {
  //1. test data
  const action = addPostActionCreator('some text')

  //2. action
  let newState = profileReducer(state, action)

  //3. expectation
  expect(newState.posts[4].message).toBe('some text')
});

test('after deleting length of message should be decrement', () => {
  //1. test data
  const action = deletePost(1)

  //2. action
  let newState = profileReducer(state, action)

  //3. expectation
  expect(newState.posts.length).toBe(3)
});

test(`after deleting length should't be decrement if id is incorrect`, () => {
  //1. test data
  const action = deletePost(1000)

  //2. action
  let newState = profileReducer(state, action)

  //3. expectation
  expect(newState.posts.length).toBe(4)
});