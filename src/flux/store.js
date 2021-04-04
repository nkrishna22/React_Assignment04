import Dispatcher from './dispatcher';
import * as ActionTypes from './ActionTypes';
import {EventEmitter} from 'events';
import _ from 'lodash';

let _issues = [];

class IssueStore extends EventEmitter {
  addChangeListener(cb) {
    this.on('change', cb);
  }

  removeChangeListener(cb) {
    this.removeListener('change', cb);
  }

  emitChange() {
    this.emit('change');
  }

  getAllIssues() {
    return _issues;
  }
}

let store = new IssueStore();
export default store;

Dispatcher.register(action => {
  switch (action.actionType) {
    case ActionTypes.INITIALIZE:
      _issues = action.issues;
      store.emitChange();
      break;
    case ActionTypes.ADD_ISSUE:
      _issues.push(action.issue);
      store.emitChange();
      break;
    case ActionTypes.DELETE_ISSUE:
      _.remove(_issues, issue => (action.id === issue.id));
      console.log("Emitting Delete Change..." + action.id);
      store.emitChange();
      break;
    default:
  }
});
