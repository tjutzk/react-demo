import React, {Component} from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
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
    _loadComments(){
        const comments = JSON.parse(localStorage.getItem('comments'))
        if(!comments){
            return
        }
        this.setState({comments})
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
    render(){
        return (
            <div className="wrapper">
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
                <CommentList comments={this.state.comments}/>
            </div>
        );
    }   
}

export default CommentApp