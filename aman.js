import React from 'react';
export default class Aman extends React.Component {
    render() {
        return (
            <div>
                <h1>git clone</h1><p>It copy the repository form github to the local computer</p>
                <p>If you want to add the file or done some changes in a particular file then,follow the command</p>
                <h2>git add file_name</h2><p>It It adds the file into the staging area</p>
                <p>After that, we should use the following command for commit</p>
                <h3>git commit -m "commit"</h3><p>Using this command we can give commit. </p>
                <p>Then, Follow the next command to push</p>
                <h4>git push</h4><p>It is used to push the entire code into the github</p>
            </div>
        )
    }
}