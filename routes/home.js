let express = require('express'),
  router = express.Router(),
  utils = require('../utils/utils')
User = require('../models/User'),
  Gradtion = require('../models/Gradution'),
  mailService = require('../service/mailService');

router.get('/', (req, res) => {
  let _id = '591c6d8370a568f221c5c48c'
  User.getUserById(_id)
    .then(user => {
      utils.success(res, user)
    })
    .catch(err => {
      utils.error(res, err.message)
    })

})

router.get('/info/:id', (req, res) => {
  console.log('[params]', req.params.id)

  let _id = '591c6d8370a568f221c5c48c'
  User.getUserById(_id)
    .then(user => {
      utils.success(res, user)
    })
    .catch(err => {
      utils.error(res, err.message)
    })
})

router.post('/setmail', (req, res) => {
  let email = req.body.email,
    authCode = req.body.authCode,
    id = req.body.id;

  if(email) {

  }

  User.updateEmail(id, email, authCode)
    .then(state => {
      if(state.ok) {
        utils.success(res, {})
      }
    })
    .catch(err => {
      utils.error(res, '更新失败')
    })

})

router.post('/info', (req, res) => {

})


module.exports = router