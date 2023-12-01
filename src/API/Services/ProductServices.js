import { HttpClient } from "../HttpClient/index";

class ProductService extends HttpClient {
	constructor() {
		super("https://api.romanomaximo.com/api/Product");

	}

	getAll(body) {
		return this.get("getAllProduct", body);
	}

	getAllPopularProducts(body) {
		return this.get("getAllPopularProduct", body)
	}

	getNewProducts(body) {
		return this.get("getNewProducts", body)
	}

	getPaginatedProducts(body) {
		return this.get("getPaginatedProduct", body)
	}
}

export const productService = new ProductService();