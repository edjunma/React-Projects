import React from 'react';

function App() {
	return (
		<Navbar>
			<NavItem icon={<PlusIcon />} />
			<NavItem icon={<BellIcon />} />
			<NavItem icon={<MessengerIcon />} />
			<NavItem icon={<CaretIcon />}>
				<DropdownMenu></DropdownMenu>
			</NavItem>
		</Navbar>
	);
}

function Navbar(props) {
	return (
		<nav className='navbar'>
			<ul className='navbar-nav'>{props.children}</ul>
		</nav>
	);
}

function NavItem(props) {
	const [open, setOpen] = useState(false);

	return (
		<li className='nav-item'>
			<a href='#' className='icon-button' onClick={() => setOpen(!open)}>
				{props.icon}
			</a>

			{open && props.children}
		</li>
	);
}

export default App;
