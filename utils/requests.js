const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

// Fetch all properties
async function fetchProperties({ showFeatured = false } = {}) {
	// Handle the case where the domain is not available yet
	if (!apiDomain) {
		return [];
	}

	const res = await fetch(
		`${apiDomain}/properties${showFeatured ? '/featured' : ''}`
	);

	if (!res.ok) {
		console.log(error);
		throw new Error('Failed to fetch data');
	}

	return res.json();
}

// Fetch single property
async function fetchProperty(id) {
	try {
		// Handle the case where the domain is not available yet
		if (!apiDomain) {
			return null;
		}

		const res = await fetch(`${apiDomain}/properties/${id}`);

		if (!res.ok) {
			throw new Error('Failed to fetch data');
		}

		return res.json();
	} catch (error) {
		console.log(error);
		return null;
	}
}

export { fetchProperties, fetchProperty };
