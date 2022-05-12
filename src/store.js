import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/useSlice.js'


    //1. reducers에 state 수정해주는 함수 만들기
    //2. 만든 함수 export 해야함
    //3. 만든 함수 import해서 사용
    //4. dispatch(state변경함수())

let stock = createSlice({ //useState와 비슷
    name: 'stock',
    initialState: [10, 11, 12]
})

let cart = createSlice({
    name: 'cart',
    initialState:
        [
            {id : 0, name : 'White and Black', count : 2},
            {id : 2, name : 'Grey Yordan', count : 1}
        ],
    reducers: {
        changeCount(state, action){
            let index = state.findIndex((a) => a.id === action.payload )
            state[index].count++;
        },
        addCart(state, action){
            state.push(action.payload)
        }
    } 
})
export let {changeCount, addCart} = cart.actions;


export default configureStore({
  reducer: {
    user : user.reducer,
    stock : stock.reducer,
    cart : cart.reducer
  }
}) 


// 리덕스 사용하기 위한 셋팅
// 셋팅 1. store.js 파일 생성 & 코드 복붙
// 셋팅 2. index.js 가서 <Provider store={store}> 쓰기