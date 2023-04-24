
import {takeEvery} from 'redux-saga/effects'


function* Login() {
    console.log('login success fully!')
}

export function* getProfile() {

    console.log('run saga')

    yield takeEvery( Login.toString(),Login)

    
}