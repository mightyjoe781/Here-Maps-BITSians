/**
 * GET /
 * Home page.
 */
const mongoose = require("mongoose");
const Esri = require("../models/esri.js");

exports.index = (req, res) => {
    res.render('about', {
      title: 'About'
    });
  };
//GET /map
exports.getMap = (req, res)=>{
    Esri.find({},function(err,foundObj){
		if(err){
			console.log(err);
		} else {
			res.render("index.ejs",{foundArr:foundObj});
		}
	}).limit(100);
};
exports.aboutDev = (req, res) => {
    res.render('AboutProject', {
      title: 'About Developers'
    });
  };
  //Get /login
  exports.getLogin = (req, res) => {
    res.render('login', {
      title: 'Login'
    });
  };
  // GET /dashboard
  exports.getDashboard = (req, res) => {
    res.render('dashboard', {
      title: 'DashBoard'
    });
  };
  // GET /index_plasma
  exports.getStatistics = (req, res) => {
    res.render('index_plasma', {
      title: 'Plasma Statistics'
    });
  };
  //GET /amenities
  exports.getAmenities = (req, res) => {
    res.render('amenities', {
      title: 'Amenities'
    });
  };
  //GET /form_donor
  exports.getDonorForm = (req, res) => {
    res.render('form_donor', {
      title: 'Donor Form'
    });
  };
  //GET /form_patient
  exports.getPatientForm = (req, res) => {
    res.render('form_patient', {
      title: 'Patient Form'
    });
  };
  //GET /common__pool
  exports.getCommonPool = (req, res) => {
    res.render('common_pool', {
      title: 'Pool Page'
    });
  };
  //GET /plasma_bank
  exports.getPlasmaBank = (req, res) => {
    res.render('plasma_bank', {
      title: 'Plasma Bank'
    });
  };