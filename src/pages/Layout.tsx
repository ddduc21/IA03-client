import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
	return (
		<>
			<nav className="flex flex-row justify-between w-screen bg-primary">
				<div className="flex flex-row justify-center content-center">
					<h1 className="text-center">App</h1>
				</div>
				<div className="flex flex-row justify-end">
					<Link
						to="/user/login"
						className="px-3 py-2 bg-primary text-primary-foreground hover:bg-secondary/20 border-l border-secondary/20"
					>
						Login
					</Link>
					<Link
						to="/user/register"
						className="px-3 py-2 bg-primary text-primary-foreground hover:bg-secondary/20 border-l border-secondary/20"
					>
						Register
					</Link>
				</div>
			</nav>

			<Outlet />
		</>
	);
};

export default Layout;
