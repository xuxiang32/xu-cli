const config = require('../templates')

module.exports = () => {
  for (let key in config.tpl) {
    console.log(key)
  }
  // console.log(config.tpl)
  process.exit()
}
