import '@/assets/styles/globals.css';
import '@/components/Navbar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AuthProvider from '@/components/AuthProvider';

export const metadata = {
	title: 'Project title',
	description: 'Project description',
	keywords: 'some keywords',
};

const MainLayout = ({ children }) => {
	return (
		<AuthProvider>
			<html lang="en">
				<body>
					<Navbar />
					<main>{children}</main>
					<Footer />
				</body>
			</html>
		</AuthProvider>
	);
};

export default MainLayout;
