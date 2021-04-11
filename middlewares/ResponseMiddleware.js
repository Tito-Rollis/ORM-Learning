module.exports = function () {
	return function (req, res, next) {
		res.serverError = function () {
			res.status(500).json({
				meta: {
					message: "Server Error",
					code: "server_error",
				},
			});
		};

		res.notFound = function (message, code) {
			res.status(404).json({
				meta: {
					message: message,
					code: code,
				},
			});
		};

		res.badRequest = function (error) {
			var message = "Bad Request";
			var code = null;
			var list = [];

			if (error.message) {
				message = error.message;
			}

			if (error.code) {
				code = error.code;
			}

			if (error.list) {
				list = error.list;
			}

			res.status(400).json({
				meta: {
					message: message,
					code: code,
					list: list,
				},
			});
		};

		res.result = function (data, meta) {
			var response = {
				data: data,
			};

			if (meta) {
				response.meta = metadata;
			}

			res.json(response);
		};

		next();
	};
};
