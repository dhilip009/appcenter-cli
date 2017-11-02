/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the AppleConnectionSecretRequest class.
 * @constructor
 * Apple connection secrets
 *
 * @member {object} data apple secret details
 * 
 * @member {string} [data.username] username to connect to apple store
 * 
 * @member {string} [data.password] password to connect to apple store
 * 
 */
function AppleConnectionSecretRequest() {
  AppleConnectionSecretRequest['super_'].call(this);
}

util.inherits(AppleConnectionSecretRequest, models['SharedConnectionRequest']);

/**
 * Defines the metadata of AppleConnectionSecretRequest
 *
 * @returns {object} metadata of AppleConnectionSecretRequest
 *
 */
AppleConnectionSecretRequest.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'AppleConnectionSecretRequest',
    type: {
      name: 'Composite',
      className: 'AppleConnectionSecretRequest',
      modelProperties: {
        displayName: {
          required: false,
          serializedName: 'displayName',
          type: {
            name: 'String'
          }
        },
        serviceType: {
          required: true,
          serializedName: 'serviceType',
          type: {
            name: 'String'
          }
        },
        data: {
          required: true,
          serializedName: 'data',
          type: {
            name: 'Composite',
            className: 'AppleSecretDetails'
          }
        }
      }
    }
  };
};

module.exports = AppleConnectionSecretRequest;
