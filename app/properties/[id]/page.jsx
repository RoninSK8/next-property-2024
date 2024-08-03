'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { fetchProperty } from '@/utils/requests';

const PropertyPage = () => {
	const { id } = useParams();
	const [isLoading, setIsLoading] = useState(false);
	const [property, setProperty] = useState(null);
	useEffect(() => {
		const fetchPropertyData = async () => {
			if (!id) return;
			try {
				const property = await fetchProperty(id);
				setProperty(property);
			} catch (error) {
				console.error('Error fetching property:', error);
			} finally {
				setIsLoading(false);
			}
		};
		if (property === null) fetchPropertyData();
	}, [property, isLoading]);
	return <div>PropertyPage</div>;
};

export default PropertyPage;
