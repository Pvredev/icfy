import React from 'react';
import { Link } from 'react-router-dom';

const GitHubButton = () => (
	<span className="button">
		<a
			className="github-button"
			href="https://github.com/Automattic/icfy"
			aria-label="View sources on GitHub"
		>
			GitHub
		</a>
	</span>
);

const Masterbar = () => (
	<div className="masterbar">
		<Link className="title" to="/">Is Calypso fast yet?</Link>
		<Link to="/">Chunks</Link>
		<Link to="/chunkgroups">Chunk Groups</Link>
		<Link to="/branch">PR Branches</Link>
		<Link to="/pushlog">Push Log</Link>
		<Link to="/buildlog">Build Log</Link>
		<span className="tagline">Tracking Webpack bundle sizes since 2017</span>
		<GitHubButton />
	</div>
);

export default Masterbar;
