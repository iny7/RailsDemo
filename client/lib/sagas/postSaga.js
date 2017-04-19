import { call, put, takeLatest } from 'redux-saga/effects'
import * as Api from '../api'

function* createPost (action) {
  try {
    const post = yield call(Api.createPost, action.payload.post)
    yield [
      put({ type: 'fetching:data:success', payload: { post } })
    ]
  } catch (e) {
    console.error(e)
    yield put({ type: 'CREATE_POST_SUCCESS' })
  }
}
function* fetchPostById (action) {
  try {
    const post = yield call(Api.fetchPostById, action.payload.id)
    console.log(post)
    yield put({ type: 'receive:post', payload: { post } })
  } catch (e) {
    console.error(e)
    yield put({ type: 'fetch:post:failed' })
  }
}
function* fetchPostsByCategory (action) {
  try {
    const posts = yield call(Api.fetchPostsByCategory, action.payload.category)
    console.log(posts)
    yield put({ type: 'receive:posts', payload: { posts } })
  } catch (e) {
    // TODO
    yield put({ type: 'fetch:posts:failed' })
  }
}
function* fetchPostsByUserId (action) {
  try {
    const posts = yield call(Api.fetchPostsByUserId, action.payload.userId)
    yield put({ type: 'fetching:data:success', payload: { posts } })
  } catch (e) {
    console.error(e)
    yield put({ type: '' })
  }
}
function* addCommentToPost (action) {
  try {
    const { post, comment } = action.payload
    const res = yield call(Api.addCommentToPost, post.id, comment)
  } catch (e) {
    console.error(e)
  }
}

function* watchCreatePost () {
  yield takeLatest('create:post', createPost)
}
function* watchFetchPost () {
  yield takeLatest('fetch:post:by:id', fetchPostById)
}
function* watchFetchPostByCategory () {
  yield takeLatest('fetch:post:by:category', fetchPostsByCategory)
}
function* watchFetchPostByUserId () {
  yield takeLatest('fetch:post:by:userId', fetchPostsByUserId)
}
function* watchAddCommentToPost () {
  yield takeLatest('post:add:comment', addCommentToPost)
}

export default function* rootSaga () {
  console.log('start all sagas')
  yield [
    watchCreatePost(),
    watchFetchPost(),
    watchFetchPostByCategory(),
    watchFetchPostByUserId(),
    watchAddCommentToPost()
  ]
  console.log('fuck sagas')
}
