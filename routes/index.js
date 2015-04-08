var express = require('express');
var router = express.Router();
var tweets=[];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', tweets: tweets });
});

/* Creer formulaire et poster infos sur url : contenu tweet */
router.post('/', function(req, res, next) {
   tweets.unshift(req.body.tweet); /* unshift : ajoute dans var tweet (~push) req.body.tweet : contenu */
    res.redirect('/') /* redirige sur la page d'accueil */
});

module.exports = router;

