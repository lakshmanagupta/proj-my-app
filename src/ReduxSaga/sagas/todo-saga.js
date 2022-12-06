import {
    put,
    call,
    takeEvery
} from 'redux-saga/effects'

import {
    GET_MOVIE_DATA_YEAR, GET_MOVIE_DATA_GENRE
} from '../Actions/actions'

import {
    getMovieData,
} from '../api/todo-api'

function* getMovieByYear({payload}) {
    // console.log("inside ssaga")
    const todos = yield call(getMovieData, payload)
    yield put({ type: 'RES', payload: todos })
}

function* getMovieByGenre({payload}) {
    const todos = yield call(getMovieData, payload)
    yield put({ type: 'RES', payload: todos })
}

export default function* todoSaga() {
    yield takeEvery(GET_MOVIE_DATA_YEAR, getMovieByYear)
    yield takeEvery(GET_MOVIE_DATA_GENRE, getMovieByGenre)
}