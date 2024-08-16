'use client';
import { useState, useEffect } from 'react';
import Spinner from './Spinner';
import PropertyCard from './PropertyCard';
import { fetchProperties } from '@/utils/requests';

const Properties = () => {
	const [loading, setLoading] = useState(false);
	const [properties, setProperties] = useState([]);
	const [page, setPage] = useState(1);
	const [pageSize, setPageSize] = useState(3);
	const [totalItems, setTotalItems] = useState(0);

	useEffect(() => {
		const getProperties = async () => {
			const { properties } = await fetchProperties();
			properties.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
			setProperties(properties);
		};
		try {
			getProperties();
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	}, []);
	return loading ? (
		<Spinner loading={loading} />
	) : (
		<section className="px-4 py-6">
			<div className="container-xl lg:container m-auto px-4 py-6">
				{properties.length === 0 ? (
					<p>No properties found</p>
				) : (
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{properties.map((property) => (
							<PropertyCard key={property._id} property={property} />
						))}
					</div>
				)}
			</div>
		</section>
	);
};

export default Properties;
