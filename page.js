"use client";

import Image from "next/image";
import { useState } from "react";

const features = [
	{
		name: "Reports",
		content: (
			<div
				style={{
					display: "flex-inline",
					flexDirection: "column",
					alignItems: "right",
          marginTop: "0em",
				}}
			>
				<img
					src="graph.png"
					alt="Bar Graph Example"
					style={{
            alignItems: "right",
						marginBottom: "0.5em",
						borderRadius: "10px",
            marginLeft: "400px",
            marginTop: "-150px",
            opacity: "0.4",
					}}
					width={600}
					height={500}
				/>
				<img
					src="Pie.png"
					style={{ alignItems: "right",
						marginBottom: "0.5em",
						borderRadius: "50px",
            marginLeft: "-600px",
            marginTop: "-150px",
            opacity: "0.4",}}
					width={350}
					height={350}
				/>
				<div
					style={{
						marginTop: "0.5em",
						fontSize: "0.95em",
					}}
				>
					
				</div>
			</div>
		),
	},
	{
		name: "Forecasts",
		content: (
			<div
				style={{
					display: "inline",
					flexDirection: "column",
					// alignItems: "right",
				}}
			>
				<img
					src="forcast.png"
					alt="Bar Graph Example"
					style={{ 
             alignItems: "right",
						marginBottom: "0.5em",
						borderRadius: "10px",
            marginLeft: "400px",
            marginTop: "-150px",
            opacity: "0.4",
					}}
					width={400}
					height={300}
				/>
				<img
					src="Pie.png"
					style={{ 
            alignItems: "right",
						marginBottom: "0.5em",
						borderRadius: "50px",
            marginLeft: "-600px",
            marginTop: "-150px",
            opacity: "0.4",
          }}
					width={400}
					height={400}
				/>
				<div
					style={{
						// marginTop: "0.5em",
						fontSize: "0.95em",
					}}
				>
					
				</div>
			</div>
		),
	},
	{
		name: "Dashboards",
		content: (
			<div
				style={{
					display: "flex-inline",
					flexDirection: "column",
					alignItems: "right",
				}}
			>
				<img
					src="graph.png"
					alt="Bar Graph Example"
					style={{
             alignItems: "right",
						marginBottom: "0.5em",
						borderRadius: "10px",
            marginLeft: "400px",
            marginTop: "-150px",
            opacity: "0.4",
					}}
					width={400}
					height={300}
				/>
				<img
					src="stats.png"
					style={{ 
            alignItems: "right",
						marginBottom: "0.5em",
						borderRadius: "50px",
            marginLeft: "-600px",
            marginTop: "-150px",
            opacity: "0.4",
          }}
					width={400}
					height={400}
				/>
				<div
					style={{
						marginTop: "0.5em",
						fontSize: "0.95em",
					}}
				>
					
				</div>
			</div>
		),
	},
	{
		name: "Consolidations",
		content: (
			<div
				style={{
					display: "flex-inline",
					flexDirection: "column",
					
          
				}}
			>
				<img
					src="graph.png"
					alt="Bar Graph Example"
					style={{
            alignItems: "right",
						marginBottom: "0.5em",
						borderRadius: "10px",
            marginLeft: "550px",
            marginTop: "-500px",
            opacity: "0.4",
					}}
					width={600}
					height={500}
				/>
				<img
					src="Pie.png"
					style={{ alignItems: "right",
						marginBottom: "0.5em",
						borderRadius: "50px",
            marginLeft: "-400px",
            marginTop: "-300px",
            opacity: "0.4",}}
					width={350}
					height={350}
				/>
				<div
					style={{
						marginTop: "0.5em",
						fontSize: "0.95em",
					}}
				>
					
				</div>
			</div>
		),
	},
];

export default function Home() {
	const [hovered, setHovered] = useState(null);

	return (
		<div className="main-container">
			{/* <!-- Background glowing shapes --> */}
			{/* <div className="background-blob blob-purple"></div>
    <div className="background-blob blob-red"></div>
    <div className="background-blob blob-yellow"></div> */}

			{/* <!-- Credibility Bar - Top Section --> */}
			<div className="credibility-bar">
				<div className="credibility-item">
					<span className="star-icon">★</span> 4.8 rating on Capterra
				</div>
				<div className="credibility-item">
					<span className="star-icon">★</span> 4.8 rating on G
				</div>
				<div className="credibility-item">
					<span className="star-icon">★</span> 350+ reviews on Xero
					<img
						src="https://placehold.co/20x20/transparent/white?text=Xero"
						alt="Xero logo"
						className="logo-icon"
						width={150}
						height={150}
					/>
				</div>
				<div className="credibility-item">
					<span className="star-icon">★</span> 550+ reviews on QuickBooks
					<img
						src="https://placehold.co/20x20/transparent/white?text=QKB"
						alt="QuickBooks logo"
						className="logo-icon"
					/>
				</div>
				<div className="credibility-item">
					<span className="star-icon">★</span> ratings on Sage
					<img
						src="https://placehold.co/20x20/transparent/white?text=Sage"
						alt="Sage logo"
						className="logo-icon"
					/>
				</div>
			</div>

			{/* <!-- Main Content Area - Hero Section --> */}
			<div className="hero-section">
				<h1
					className="hero-title animate-fade-in"
					style={{ position: "relative" }}
				>
					{features.map((feature, idx) => (
						<span
							key={feature.name}
							className="feature-btn"
              onMouseEnter={() => setHovered(idx)}
							onClick={() => setHovered(idx)}
              
							onMouseMove={() => setHovered(null)}
							style={{
								cursor: "pointer",
								padding: "0.2em 0.6em",
								margin: "0 0.2em",
								borderRadius: "6px",
								
								transition: "background 0.2s",
								color: "white",
								fontWeight: "bold",
								position: "relative",
								display: "inline-block",
							}}
						>
							{feature.name}
							{idx < features.length - 1 && <span>, </span>}
							{hovered === idx && (
								<span
									className="feature-tooltip"
									style={{
										display: "block",
										position: "absolute",
										left: 0,
										top: "2.2em",
										background: "transparent",
										color: "#222",
									
										borderRadius: "8px",
										padding: "0.7em 1em",
										zIndex: 10,
										boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
										minWidth: "220px",
										whiteSpace: "nowrap",
									}}
								>
									{feature.content}
								</span>
							)}
						</span>
					))}
					&nbsp;with AI-insights{" "}
					<span className="sparkle-icon">✨</span>
				</h1>
				<p className="hero-subtitle animate-fade-in-delay">
					Now with AI-insights
					<span className="sparkle-icon">✨</span>
				</p>

				{/* <!-- Call to Action Buttons --> */}
				<div className="cta-group animate-fade-in-long-delay">
					<button className="btn-primary">
						Start 14-day free trial &gt;
					</button>
					<a href="#" className="btn-secondary">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="icon-eye"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
							<path
								fillRule="evenodd"
								d="M.661 10.592l1.637 1.637a7.5 7.5 0 0010.518-10.518l-1.637-1.637a9 9 0 11-10.518 10.518zM10 3.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13z"
								clipRule="evenodd"
							/>
						</svg>
						See what we do
					</a>
				</div>
			</div>

			{/* <!-- Floating UI Elements (Static placeholders to mimic video visuals) --> */}
			<div className="floating-card card-expenses animate-float-1">
				<p className="card-title">Expenses</p>
				<p className="card-value">$56.2K</p>
				<img
					src="https://placehold.co/100x50/333/FFF?text=Pie+Chart"
					alt="Expenses Pie Chart"
					className="card-chart"
				/>
				<ul className="card-list">
					<li>• Insurance</li>
					<li>• Wages</li>
					<li>• Rent</li>
					<li>• Legal Expenses</li>
				</ul>
			</div>

			<div className="floating-card card-income animate-float-2">
				<p className="card-title">Total Income</p>
				<p className="card-value">
					$426.8K <span className="text-green">↑ 36.5%</span>
				</p>
				<img
					src="https://placehold.co/100x60/333/FFF?text=Bar+Chart"
					alt="Income Bar Chart"
					className="card-chart"
				/>
				<p className="card-footer">
					Next 90 days:{" "}
					<span className="font-bold">$100,548</span>
				</p>
			</div>

			<div className="floating-card card-health animate-float-3">
				<p className="card-title">Financial Health Score</p>
				<p className="card-value large-value text-green">90%</p>
				<p className="card-footer">Excellent!</p>
				<img
					src="https://placehold.co/100x50/333/FFF?text=Gauge"
					alt="Health Gauge"
					className="card-chart"
				/>
			</div>

			<div className="floating-card card-cash animate-float-4">
				<p className="card-title">Cash</p>
				<p className="card-value">$288,721</p>
				<img
					src="https://placehold.co/100x60/333/FFF?text=Line+Graph"
					alt="Cash Line Graph"
					className="card-chart"
				/>
				<p className="card-footer">Last update: Today</p>
			</div>
		</div>
	);
}
