const { promises } = require("nodemailer/lib/xoauth2")

module.exports = (theFunc) => (req,res,next) => {
    promises.resolve(theFunc(req,res,next)).catch(next);
};