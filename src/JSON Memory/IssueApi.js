import JSONMemory from './JSONMemory';

export default class IssueApi {
    static getAllIssues() {
        return JSONMemory.Issues;
    }
}