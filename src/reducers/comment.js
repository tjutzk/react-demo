const INIT_COMMENTS = 'INIT_COMMENT'
const ADD_COMMENT = 'ADD_COMMENT'
const DELETE_COMMENT = 'DELETE_COMMENT'

//创建reducer
export default function(state,action){
    if(!state){
        return state = {
            comments:[]
        }
    }
    switch(action.type){
        case INIT_COMMENTS: 
            return {
                comments: action.comments
            }
        case ADD_COMMENT:
            return {
                comments:[...state.comments,action.comments]
            }
        case DELETE_COMMENT:
            return {
                comments:[
                    ...state.comments.slice(0, action.commentIndex),
                    ...state.comments.slice(action.commentIndex+1)
                ]
            }
        default:
            return state
    }
}

//定义action生成器
export const initComments = (comments) => {
    return {type:INIT_COMMENTS, comments}
}
export const addComment = (comments) => {
    return {type:ADD_COMMENT, comments}
}
export const deleteComment = (commentIndex) => {
    return {type:DELETE_COMMENT, commentIndex}
}
