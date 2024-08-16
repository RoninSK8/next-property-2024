'use client';
import { useState, useEffect } from 'react';
import Spinner from './Spinner';
import PropertyCard from './PropertyCard';
import { fetchProperties } from '@/utils/requests';
import Pagination from './Pagination';

const Properties = () => {
	const [loading, setLoading] = useState(false);
	const [properties, setProperties] = useState([]);
	const [page, setPage] = useState(1);
	const [pageSize, setPageSize] = useState(6);
	const [totalItems, setTotalItems] = useState(0);

	useEffect(() => {
		const fetchProperties = async () => {
			try {
				const res = await fetch(
					`/api/properties?page=${page}&pageSize=${pageSize}`
				);

				if (!res.ok) {
					throw new Error('Failed to fetch data');
				}

				const data = await res.json();
				setProperties(data.properties);
				setTotalItems(data.total);
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		};
		try {
			fetchProperties();
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	}, [page, pageSize]);

	const handlePageChange = (newPage) => {
		setPage(newPage);
	};
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
				<Pagination
					page={page}
					pageSize={pageSize}
					totalItems={totalItems}
					onPageChange={handlePageChange}
				/>
			</div>
		</section>
	);
};

export default Properties;
