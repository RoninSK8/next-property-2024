import '@/assets/styles/globals.css';
import '@/components/Navbar';
import Navbar from '@/components/Navbar';

export const metadata = {
	title: 'Project title',
	description: 'Project description',
	keywords: 'some keywords',
};

const MainLayout = ({ children }) => {
	return (
		<html lang="en">
			<body>
				<Navbar />
				<main>{children}</main>
			</body>
		</html>
	);
};

export default MainLayout;
