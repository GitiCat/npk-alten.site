import axios from "axios"

async function GET(url) {

	var result = {
		data: null,
		isError: false,
		error: null
	}

	await axios.get(url).then(function(response) {
		result["data"] = response.data;
	}).catch(function(error) {
		result["isError"] = true;
		result["error"] = error
	})
	
	return result;
}

export default GET;