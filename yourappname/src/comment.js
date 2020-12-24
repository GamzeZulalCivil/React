import React from 'react';
import faker from 'faker';

const Comment= ({name, timeAgo, star, comment, image}) => {
    return (
        <div className="comment">
            <a className="avatar" href='/'>
            <img alt='avatar' src={image}/>
            </a>
            <div className="content">
            <a className="author" href='/'>{name}</a>
            <div className="metadata">
                <div className="date">{timeAgo} gün önce</div>
                <div className="rating">
                <i className="{star} icon"></i>
                5 Yıldız
                </div>
            </div>
            <div className="text">
                {comment}
            </div>
            </div>
  </div>
    )
}

export default Comment;