const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

async function fetchProperties({ showFeatured = false } = {}) {
	try {
		// Handle the case where the domain is not available yet
		if (!apiDomain) {
			return [];
		}

		const res = await fetch(
			`${apiDomain}/properties${showFeatured ? '/featured' : ''}`,
			{ cache: 'no-store' }
		);

		if (!res.ok) {
			throw new Error('Failed to fetch data');
		}

		return res.json();
	} catch (error) {
		console.log(error);
		return [];
	}
}

const fetchProperty = async (id) => {
	try {
		if (!apiDomain) {
			return null;
		}
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_API_DOMAIN}/properties/${id}`
		);
		if (!res.ok) {
			throw new Error('Failed to fetch data');
		}
		return res.json();
	} catch (error) {
		console.log(error);
		return null;
	}
};

export { fetchProperties, fetchProperty };
