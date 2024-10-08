import '@/assets/styles/globals.css';
import '@/components/Navbar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AuthProvider from '@/components/AuthProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'photoswipe/dist/photoswipe.css';
import { GlobalProvider } from '@/context/GlobalContext';

export const metadata = {
	title: 'Project title',
	description: 'Project description',
	keywords: 'some keywords',
};

const MainLayout = ({ children }) => {
	return (
		<GlobalProvider>
			<AuthProvider>
				<html lang="en">
					<body>
						<Navbar />
						<main>{children}</main>
						<Footer />
						<ToastContainer />
					</body>
				</html>
			</AuthProvider>
		</GlobalProvider>
	);
};

export default MainLayout;
