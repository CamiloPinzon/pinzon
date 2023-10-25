import { Link } from "react-router-dom";

import WorkItem from "../../components/work-item/work-item.component";
import { LogosT, getLogo } from "../../utils/icons.utils";
import { works } from "../../data/work";

import "./work-page.styles.scss";

const WorkPage = () => {
	const gpayUrl = "https://pay.google.com/intl/es_es/about/";
	const walletUrl = "https://wallet.google/intl/es_es/";
	const hugeUrl = "https://www.hugeinc.com/";

	return (
		<div className="work-container">
			<h1>Some of my work</h1>
			<div className="work-items-container">
				{works.map((item) => (
					<WorkItem key={item.id} item={item} />
				))}
				<div className="work-item">
					<h2>Gpay / Google Wallet for Huge Inc.</h2>
					<div className="work-item-content">
						<div className="work-logos-container">
							<Link to={gpayUrl} target="_blank">
								{getLogo(LogosT.GPAY_LOGO, 85)}
							</Link>
							<Link to={walletUrl} target="_blank">
								{getLogo(LogosT.GOOGLE_WALLET_LOGO, 162)}
							</Link>
							<Link to={hugeUrl} target="_blank">
								{getLogo(LogosT.HUGE_LOGO, 60)}
							</Link>
						</div>
						<div className="work-description-container">
							<p>
								Working on 'Huge Inc', 'GPay' and 'Google Wallet' was my asigned
								accounts, the main of my functions was to modify and create
								components for their pages, also load and admin content through
								their own CMS.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WorkPage;
