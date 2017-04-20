import React, { Component } from 'react'

import './style.sass'

export default class Comment extends Component {
  render () {
    const { comment } = this.props
    const { commenter, avatar, content, created_at: createdAt } = comment
    return (
      <div className="comment-item">
        <img className="avatar" src={avatar} />
        <div className="comment-right">
          <div className="comment-user">
            <span className="user">{commenter}</span>
            <div className="like">
              <i className="fa fa-thumbs-o-up"></i>
              <span>18</span>
            </div>
          </div>
          <time className="comment-time">{createdAt}</time>
          <div className="comment-body">
            {content}
          </div>
        </div>
      </div>
    )
  }
}
