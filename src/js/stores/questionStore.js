var EditorDispatcher = require('../dispatchers/editorDispatcher.js');
var merge = require('react/lib/merge');
var EventEmitter = require('events').EventEmitter;
var ActionConstants = require('../constants/actionConstants');
var QuestionTypes = require('../constants/questionTypes');
var uuidGenerator = require('node-uuid');

var CHANGE_EVENT = 'change';
var QUESTIONNAIRE_DATA = 'questionnaireData';
var QUESTIONNAIRE_INFO = 'questionnaireInfo';

var _questionnaire = _getQuestionnaireFromLS();



module.exports = QuestionStore;
