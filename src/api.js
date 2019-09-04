import cld from "cloudinary-core";

const cloudinary = new cld.Cloudinary({
	cloud_name: "yoav-cloud",
	secure: true,
});

const API_DOMAIN = "http://localhost:9999/";

const makeRequest = async (resource, method = "GET", body = null) => {
	let res;

	try {
		res = await fetch(`${API_DOMAIN}${resource}`,
			{
				method,
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json",
				},
				body: body && JSON.stringify(body),
			});
	}
	catch (ex) {
		console.error("FAILED TO FETCH DATA FROM SERVER !!!!!!!!!!!!!! ", ex);
	}

	return res ? res.json() : {error: true}; //no catch for json()
};

const getCloudinaryUrl = (id, options = {}) =>
	cloudinary.url(id, options);

window.__url = getCloudinaryUrl;

export {
	makeRequest,
	getCloudinaryUrl,
};