import React, { Component } from 'react';
import './Sidebar.css';
import { HashLink as Link } from 'react-router-hash-link';
import { FiExternalLink } from 'react-icons/fi';
import logo from '../images/sam.jpg';

class Sidebar extends Component {
	render() {
		return (
			<div className="sidebar">
				{/* <div style={{ color: 'black', fontWeight: 'bold' }} className="tagtop"> # programmer_life </div>
                <div style={{ color: 'black', fontWeight: 'bold' }} className=""> #  </div>
                <div style={{ color: 'black', fontWeight: 'bold' }} className=""> # coding </div> */}
				<h1>
					<Link smooth to="/#start" className="h1_links">
						Raju Kumar{' '}
					</Link>
				</h1>

				<img src={'./raj.png'} />
				<p style={{ color: 'black', fontWeight: 'bold' }} className="gmail">
					<a
						href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJftvBffjPmxWxvfHWRHWnhTbpQgPxBxvkcnPpFpFqbhrXMCHXSJTsCXCVLsQzgRcVLpnPL"
						rel="opener noreferrer"
						target="_blank"
						className="fa fa-envelope"
					></a>{' '}
					rajukumarazh@gmail.com{' '}
				</p>

				<ul className="sidebar-nav">
					<li className="sidebar-nav-items">
						<Link smooth to="/#about" className="links">
							About
						</Link>
					</li>
					<li className="sidebar-nav-items">
						<Link smooth to="/#education" className="links">
							Education
						</Link>
					</li>
					<li className="sidebar-nav-items">
						<Link smooth to="/#interest" className="links">
							Interest
						</Link>
					</li>
					{/* <li className="sidebar-nav-items"><a href="http://www.bloggingpeek.com" target="_blank" rel="opener noreferrer" className="links"> Blog<FiExternalLink/></a></li> */}
				</ul>

				<div className="flip-card-back">
					<ul className="sidebar-nav">
						<li className="sidebar-nav-icons">
							{' '}
							<a
								href="https://github.com/rajukumarazh"
								rel="opener noreferrer"
								target="_blank"
								className="fa fas fa-github fa-lg"
							></a>
						</li>
						<li className="sidebar-nav-icons">
							<a
								href="https://www.linkedin.com/in/raju-kumar-19a725209/"
								rel="opener noreferrer"
								target="_blank"
								className="fa fas fa-linkedin fa-lg"
							></a>
						</li>
						{/* <li className="sidebar-nav-icons">
							{' '}
							<a
								href="https://twitter.com/Sachin_Mittal98"
								rel="opener noreferrer"
								target="_blank"
								className="fa fas fa-twitter fa-lg"
							></a>
						</li> */}
						{/* <li className="sidebar-nav-icons">
							{' '}
							<a
								href="https://www.instagram.com/decent_sachin.mittal/"
								rel="opener noreferrer"
								target="_blank"
								className="fa fas fa-instagram fa-lg"
							></a>
						</li> */}
						<li className="sidebar-nav-icons">
							{' '}
							<a
								href="mailto:rajukumarazh@gmail.com"
								rel="opener noreferrer"
								target="_blank"
								className="fa fas fa-envelope fa-lg"
							></a>
						</li>
						{/* <li className="sidebar-nav-icons">
							{' '}
							<a
								href="https://www.facebook.com/profile.php?id=100011989067867"
								rel="opener noreferrer"
								target="_blank"
								className="fa fas fa-facebook fa-lg"
							></a>
						</li> */}
					</ul>
				</div>
			</div>
		);
	}
}

export default Sidebar;
