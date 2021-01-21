/*
 * @Date: 2021-01-21 23:15:47
 * @LastEditors: linxiaozhou.com
 * @Description: Description
 */
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@config': './src/config',
        '@models': './src/models',
        '@controllers': './src/controllers',
        '@views': './src/views'
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}
