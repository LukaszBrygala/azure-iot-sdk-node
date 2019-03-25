'use strict';
/*jshint esversion: 6 */


/**
 * verify that the clients have cleaned themselves up completely
 *
 * no response value expected for this operation
 **/
exports.wrapper_Cleanup = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get capabilities for this test wrapper
 *
 * returns Object
 **/
exports.wrapper_GetCapabilities = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * log a message to output
 *
 * msg Object 
 * no response value expected for this operation
 **/
exports.wrapper_LogMessage = function(msg) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

