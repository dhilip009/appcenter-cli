/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the SymbolUploadBeginRequest class.
 * @constructor
 * A request containing information pertaining to starting a symbol upload
 * process
 *
 * @member {string} [clientCallback] The callback URL that the client can
 * optionally provide to get status updates for the current symbol upload
 * 
 * @member {string} [fileName] The file name for the symbol upload
 * 
 */
function SymbolUploadBeginRequest() {
}

/**
 * Defines the metadata of SymbolUploadBeginRequest
 *
 * @returns {object} metadata of SymbolUploadBeginRequest
 *
 */
SymbolUploadBeginRequest.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'SymbolUploadBeginRequest',
    type: {
      name: 'Composite',
      className: 'SymbolUploadBeginRequest',
      modelProperties: {
        symbolType: {
          required: true,
          isConstant: true,
          serializedName: 'symbol_type',
          defaultValue: 'Apple',
          type: {
            name: 'String'
          }
        },
        clientCallback: {
          required: false,
          serializedName: 'client_callback',
          type: {
            name: 'String'
          }
        },
        fileName: {
          required: false,
          serializedName: 'file_name',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = SymbolUploadBeginRequest;
