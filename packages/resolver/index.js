/*
 * @Description: 
 * @Date: 2023-09-25 14:43:13
 * @LastEditors: huangly
 * @LastEditTime: 2023-09-25 15:14:21
 * @FilePath: /A-work/packages/resolver/index.js
 */
function LaoResolver () {
  return {
    type: 'component',
    resolve: (name) => {
      if (name.startsWith('Lao')) {
        
        const partialName = name.slice(3)
        return {
          name: 'Lao' + partialName,
          from: `@laodi/components`,
          sideEffects: `@laodi/components/es/${partialName}/style/index.css`
        }
      }
    }
  }
}

module.exports = {
  LaoResolver
}