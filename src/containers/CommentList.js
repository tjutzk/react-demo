import React, {Component} from 'react'
import {connect} from 'react-redux'
import CommentList from '../components/CommentList'
import {initComments, deleteComment} from '../reducers/comment'
import PropTypes from 'prop-types'

class CommentListContainer extends Component{
    
    //此处props值均是从reduxer传过来的
    static propTypes = {
        comments:PropTypes.array,
        initComments:PropTypes.func,
        onDeleteComment:PropTypes.func
    }
    //从localstorage记载评论列表
    componentWillMount(){
        this._loadCommentsList()
    }
    //加载评论列表后调用reduxer initComment方法，初始化comments
    _loadCommentsList(){
        let comments = localStorage.getItem('comments')
        comments = comments ? JSON.parse(comments) : []
        this.props.initComments(comments)
    }
    //删除评论，调用reduxer deleteComment方法
    handleOnDeleteComment(index){
        const {comments} = this.props
        const newComments = [
            ...comments.slice(0, index),
            ...comments.slice(index+1)
        ]
        localStorage.setItem('comments', JSON.stringify(newComments))
        if(this.props.onDeleteComment){
            this.props.onDeleteComment(index)
        }
    }
    render(){
        return (
        <CommentList
        comments = {this.props.comments}
        onDeleteComment = {this.handleOnDeleteComment.bind(this)}
        />)
    }
}
//从store获取数据
const mapStateToProps = (state) => {
    return{
        comments: state.comments
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        initComments:(comments)=>{
            dispatch(initComments(comments))
        },
        onDeleteComment:(index) => {
            dispatch(deleteComment(index))
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentListContainer)