import '@/assets/styles/globals.css';

export const metadata = {
	title: 'Project title',
	description: 'Project description',
	keywords: 'some keywords',
};

const MainLayout = ({ children }) => {
	return (
		<html lang="en">
			<body>
				<div>{children}</div>
			</body>
		</html>
	);
};

export default MainLayout;
