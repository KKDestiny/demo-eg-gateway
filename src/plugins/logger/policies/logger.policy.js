/*
 * @Author: linxiaozhou.com
 * @LastEditors: linxiaozhou.com
 * @Description: file content
 */
const jsonParser = require('express').json();

module.exports = {
  name: 'logger',
  schema: {
    $id: 'N/A',
    type: 'object',
    properties: {
      param: {
        type: 'string',
        default: 'log request'
      }
    }
  },
  policy: (actionParams) => {
    return (req, res, next) => {
      console.log('executing policy-from-example-plugin with params', actionParams);
      console.log("Authorization", req.headers.authorization);

      jsonParser(req, res, (err) => {
        if (err) return;
        console.log("Body", req.body);
      });

      next();

      // or write response:  
      // res.json({result: "this is the response"})
    };
  }
};
