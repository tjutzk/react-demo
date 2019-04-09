import React, {Component} from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import PropTypes from 'prop-types';

import './commentApp.css'

class CommentApp extends Component{
    constructor(){
        super()
        this.state={
            comments:[]
        }
    }
    componentWillMount(){
        this._loadComments()
    }
    _saveComments(comments){
        localStorage.setItem('comments', JSON.stringify(comments))
    }
    _loadComments () {
        let comments = localStorage.getItem('comments')
        console.log(comments)
        if(!comments){
            console.log('aaaaaaaaaaa')
            return
        }
        if (comments) {
          comments = JSON.parse(comments)
          this.setState({ comments })
        }
    }
    handleSubmitComment(comment){
        if(!comment){
            return
        }
        if(!comment.username){
            alert('请输入用户名')
            return
        }
        if(!comment.content){
            alert('评论内容不能为空')
            return
        }
        const comments = this.state.comments
        comments.push(comment)
        this.setState({
            comments
        })
        this._saveComments(comments)
    }
    handleDeleteComment(index){
        console.log('commentapp')
        console.log(index)
        const comments = this.state.comments
        comments.splice(index, 1)
        this.setState({comments})
        this._saveComments(comments)
    }
    render(){
        return (
            <div className="wrapper">
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
                <CommentList 
                    comments = {this.state.comments} 
                    onDeleteComment = {this.handleDeleteComment.bind(this)}/>
            </div>
        );
    }   
}

export default CommentApp