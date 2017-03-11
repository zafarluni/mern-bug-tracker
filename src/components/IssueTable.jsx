import React from 'react';

import IssueRow from 'IssueRow';

const IssueTable = (props) => (
    <table className='bordered-table'>
        <thead>
            <tr>
                <th>Id</th>
                <th>Status</th>
                <th>Owner</th>
                <th>Created</th>
                <th>Effort</th>
                <th>Completion Date</th>
                <th>Title</th>
            </tr>
        </thead>
        <tbody>{props.issues.map(issue => <IssueRow key={issue.id} issue={issue}/>)}</tbody> 
    </table>
)

export default IssueTable;