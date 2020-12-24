import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './comment';
import faker from 'faker';
import ApprovalCard from './approvalCard';

const App = () => {
    return (
        <div className="ui comments" style={{
            paddingTop:'10px',
            paddingLeft:'10px'
        }}>
            <ApprovalCard>
            <Comment name='Gamze Zülal Civil' 
                     timeAgo='2'
                     star='5'
                     image={faker.image.image()}
                     comment='Merhaba React' />
            </ApprovalCard>
            <ApprovalCard>
            <Comment name='Ayşe Civil'
                    timeAgo='3'
                     star='4'
                     image={faker.image.image()}
                     comment='Merhaba React2' />
            </ApprovalCard>
            <ApprovalCard>
            <Comment name='Lütfü Civil'
                    timeAgo='1'
                     star='4.5'
                     image={faker.image.image()}
                     comment='Merhaba React3' />
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);