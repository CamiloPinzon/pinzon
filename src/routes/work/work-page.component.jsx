import { Link } from "react-router-dom";

import { ReactComponent as GPayLogo } from "../../assets/img/google-pay-logo.svg";
import { ReactComponent as GoogleWalletLogo } from "../../assets/img/Google_Wallet.svg";
import HugeLogo from "../../assets/img/huge_logo.png";
import ReactComponent from "react";

import "./work-page.styles.scss";
import React from "react";

const WorkPage = () => {
	const gpayUrl = "https://pay.google.com/intl/es_es/about/";
	const walletUrl = "https://wallet.google/intl/es_es/";
	const hugeUrl = "https://www.hugeinc.com/";
	const angularImage = ReactComponent("../../assets/img/huge_logo.png");
	return (
		<div className="work-container">
			<h1>Some of my work</h1>
			<div className="work-items-container">
				<div className="work-item">
					<h2>Gpay / Google Wallet for Huge Inc.</h2>
					<div className="work-item-content">
						<div className="work-logos-container">
							<img src={angularImage} alt="huge" />
							<Link to={gpayUrl} target="_blank">
								<GPayLogo width="85" height="40" />
							</Link>
							<Link to={walletUrl} target="_blank">
								<GoogleWalletLogo width="162" height="28" />
							</Link>
							<Link to={hugeUrl} target="_blank">
								<img src={HugeLogo} alt="Huge Inc" width="60" height="60" />
							</Link>
						</div>
						<div className="work-description-container">
							<p>
								Working on “
								<a href={hugeUrl} target="_blank" rel="noreferrer">
									Huge Inc
								</a>
								”, "
								<a href={gpayUrl} target="_blank" rel="noreferrer">
									GPay
								</a>
								" and "
								<a href={walletUrl} target="_blank" rel="noreferrer">
									Google Wallet
								</a>
								" was my asigned accounts, the main of my functions was to
								modify and create components for their pages, also load and
								admin content through their own CMS.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WorkPage;
