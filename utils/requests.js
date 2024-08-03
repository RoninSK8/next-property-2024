const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

const fetchProperties = async () => {
	try {
		if (!apiDomain) {
			return [];
		}
		const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/properties`);
		if (!res.ok) {
			throw new Error('Failed to fetch data');
		}
		return res.json();
	} catch (error) {
		console.log(error);
		return [];
	}
};

export { fetchProperties };
