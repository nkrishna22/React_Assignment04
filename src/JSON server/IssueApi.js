import axios from 'axios';

export default class IssueApi {
    static getAllIssues(cb) {
        axios.get('http://localhost:3001/Issues')
        .then(response => cb(response.data))
        .catch(error => {throw error});
    }
}