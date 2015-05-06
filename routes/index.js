var express = require('express');
var router = express.Router();
var tweets=[];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', tweets: tweets });
});

router.get('/accueil', function(req, res, next) {
  res.render('accueil', { title: 'Express', tweets: tweets });
});

router.get('/profil', function(req, res, next) {
  res.render('profil', { title: 'Express', tweets: tweets });
});

/* Creer formulaire et poster infos sur url : contenu tweet - sauvegarde les tweets. */
router.post('/accueil', function(req, res, next) {
   tweets.unshift(req.body.tweet); /* unshift : ajoute dans var tweet (~push) req.body.tweet : contenu */
    res.redirect('/accueil') /* redirige sur la page d'accueil */
});

module.exports = router;

