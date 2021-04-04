import Dispatcher from "./dispatcher";
import * as ActionTypes from './ActionTypes'

export default class IssuesActions {
  
  static addIssue(issue) {
    // let newComment = CommentApi.saveComment(comment);
    console.log("Dispatching Add Comment ...");
    Dispatcher.dispatch({
      actionType: ActionTypes.ADD_ISSUE,
      issue: issue
    });
  }

  static initialize(issues) {
    // let newComment = CommentApi.saveComment(comment);
    console.log("Dispatching Initialize ...");
    Dispatcher.dispatch({
      actionType: ActionTypes.INITIALIZE,
      issues: issues
    });
  }

  static deleteIssue(id) {
    // CommentApi.deleteComment(id);
    console.log("Dispatching Delete Comment for id ..." + id);
    Dispatcher.dispatch({
      actionType: ActionTypes.DELETE_ISSUE,
      id: id
    });
  }
}
