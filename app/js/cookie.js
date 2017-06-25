export default class Cookie {
	static create(name, value, days) {
		let expires = '';
		if (days) {
			const date = new Date();
			date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
			expires = `; expires=${date.toGMTString()}`;
		}

		document.cookie = `${name}=${value}${expires}; path=/`;
	}

	static read(name){
		const nameEQ = `${name}=`;
		const result = document.cookie.split(';').find((c) => {
			return (c.trim().indexOf(nameEQ) === 0);
		});

		if(!result) return null;

		return result.trim().substring(nameEQ.length, result.length);
	}

	static erase(name){
		Cookie.create(name, '', -1);
	}
}
