import { all} from 'redux-saga/effects'
import { getProfile } from 'sagaSlice/loginSlice'




export default function*  rootState() {


    yield all( [ getProfile(), ] )
}