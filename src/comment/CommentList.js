import React, {Component} from 'react'
import Comment from './Comment'

class CommentList extends Component {
    static defaultProps = {
        comments:[]
    }
    render() {
        return (
            <div>
                {
                    this.props.comments.map((item, i) => {
                        return (<Comment comment={item} key={i}/>)
                    })
                }
            </div>
        ) 
    }
  }

export default CommentList