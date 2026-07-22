import { Navigate, Route, Routes } from 'react-router';
import { Home, About } from '@pages';
import { Navbar } from '@components';
import './App.scss';

export default function App() {
	return (
		<>
			<div className="container">
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="*" element={<Navigate to="/" replace />} />
				</Routes>
			</div>
		</>
	);
}
