import React, {Component} from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types';

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array,
        onDeleteComment: PropTypes.func
    }
    static defaultProps = {
        comments:[]
    }
    handleDeleteComment(index){
        console.log('commentList')
        console.log(index)
        if(this.props.onDeleteComment){
            this.props.onDeleteComment(index)
        }   
    }
    render() {
        return (
            <div>
                {
                    this.props.comments.map((item, i) => {
                        return (<div>
                            <Comment 
                            comment={item} 
                            key={i}
                            index={i}
                            onDeleteComment={this.handleDeleteComment.bind(this)}/>
                        </div>)
                    })
                }
            </div>
        ) 
    }
  }

export default CommentList