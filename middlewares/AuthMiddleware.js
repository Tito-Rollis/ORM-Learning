module.exports = function () {
	return function (req, res, next) {
		if (req.cookies.loginData) {
			next();
		} else {
			res.redirect("/login");
		}
	};
};
