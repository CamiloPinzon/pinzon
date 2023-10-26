import { ReactComponent as GPayLogo } from "../assets/img/google-pay-logo.svg";
import { ReactComponent as GoogleWalletLogo } from "../assets/img/Google_Wallet.svg";
import HugeLogo from "../assets/img/huge_logo.png";
import { ReactComponent as BairesLogo } from "../assets/img/bairesdev-logo.svg";
import { ReactComponent as FabricLogo } from "../assets/img/fabric-inc-logo.svg";
import ViaProductionsLogo from "../assets/img/via-productions.png";
import { ReactComponent as MyCrewLogo } from "../assets/img/myCrew-avianca.svg";
import { ReactComponent as CineplanetLogo } from "../assets/img/cineplanet.svg";
import TribuneLogo from "../assets/img/tribune_logo.png";
import { ReactComponent as GlobantLogo } from "../assets/img/globant-logo.svg";
import { ReactComponent as SassIcon } from "../assets/img/sass.svg";
import { ReactComponent as TSIcon } from "../assets/img/ts.svg";
import { ReactComponent as ReactIcon } from "../assets/img/react.svg";
import { ReactComponent as JSIcon } from "../assets/img/javascript.svg";
import { ReactComponent as HtmlIcon } from "../assets/img/html.svg";
import { ReactComponent as CssIcon } from "../assets/img/css.svg";
import { ReactComponent as AngularIcon } from "../assets/img/angular.svg";
import { ReactComponent as NodeIcon } from "../assets/img/node.svg";
import { ReactComponent as ExpressIcon } from "../assets/img/express.svg";
import { ReactComponent as MongoIcon } from "../assets/img/mongo.svg";

export const LogosT = {
	GPAY_LOGO: "GPAY_LOGO",
	GOOGLE_WALLET_LOGO: "GOOGLE_WALLET_LOGO",
	HUGE_LOGO: "HUGE_LOGO",
	BAIRES_LOGO: "BAIRES_LOGO",
	FABRIC_LOGO: "FABRIC_LOGO",
	VIA_PRODUCTIONS_LOGO: "VIA_PRODUCTIONS_LOGO",
	MYCREW_LOGO: "MYCREW_LOGO",
	CINEPLANET_LOGO: "CINEPLANET_LOGO",
	TRIBUNE_LOGO: "TRIBUNE_LOGO",
	GLOBANT_LOGO: "GLOBANT_LOGO",
	SASS_LOGO: "SASS_LOGO",
	TS_ICON: "TS_ICON",
	REACT_ICON: "REACT_ICON",
	JS_ICON: "JS_ICON",
	HTML_ICON: "HTML_ICON",
	CSS_ICON: "CSS_ICON",
	ANGULAR_ICON: "ANGULAR_ICON",
	NODE_ICON: "NODE_ICON",
	EXPRESS_ICON: "EXPRESS_ICON",
	MONGO_ICON: "MONGO_ICON",
};

export const getLogo = (logo, width) => {
	switch (logo) {
		case LogosT.GPAY_LOGO:
			return getGpayLogo(width);
		case LogosT.GOOGLE_WALLET_LOGO:
			return getGoogleWalletLogo(width);
		case LogosT.HUGE_LOGO:
			return getHugeLogo(width);
		case LogosT.BAIRES_LOGO:
			return getBairesLogo(width);
		case LogosT.FABRIC_LOGO:
			return getFabricLogo(width);
		case LogosT.VIA_PRODUCTIONS_LOGO:
			return getViaProductionsLogo(width);
		case LogosT.MYCREW_LOGO:
			return getMyCrewLogo(width);
		case LogosT.CINEPLANET_LOGO:
			return getCineplanetLogo(width);
		case LogosT.TRIBUNE_LOGO:
			return getTribuneLogo(width);
		case LogosT.GLOBANT_LOGO:
			return getGlobantLogo(width);
		case LogosT.JS_ICON:
			return getJSIcon(width);
		case LogosT.REACT_ICON:
			return getReactIcon(width);
		case LogosT.TS_ICON:
			return getTSIcon(width);
		case LogosT.SASS_LOGO:
			return getSassIcon(width);
		case LogosT.HTML_ICON:
			return getHtmlIcon(width);
		case LogosT.CSS_ICON:
			return getCssIcon(width);
		case LogosT.ANGULAR_ICON:
			return getAngularIcon(width);
		case LogosT.NODE_ICON:
			return getNodeIcon(width);
		case LogosT.EXPRESS_ICON:
			return getExpressIcon(width);
		case LogosT.MONGO_ICON:
			return getMongoIcon(width);
		default:
			console.error("The chosen logo not exist");
			break;
	}
};

const getGpayLogo = (width) => <GPayLogo width={width} />;

const getGoogleWalletLogo = (width) => <GoogleWalletLogo width={width} />;

const getHugeLogo = (width) => (
	<img src={HugeLogo} width={width} alt="Logo Huge" />
);

const getBairesLogo = (width) => <BairesLogo width={width} />;

const getFabricLogo = (width) => <FabricLogo width={width} />;

const getViaProductionsLogo = (width) => (
	<img src={ViaProductionsLogo} width={width} alt="Via Productions logo" />
);

const getMyCrewLogo = (width) => <MyCrewLogo width={width} />;

const getCineplanetLogo = (width) => <CineplanetLogo width={width} />;

const getTribuneLogo = (width) => (
	<img src={TribuneLogo} alt="Tribune logo" width={width} />
);

const getGlobantLogo = (width) => <GlobantLogo width={width} />;

const getSassIcon = (width) => <SassIcon width={width} />;
const getTSIcon = (width) => <TSIcon width={width} />;
const getReactIcon = (width) => <ReactIcon width={width} />;
const getJSIcon = (width) => <JSIcon width={width} />;
const getHtmlIcon = (width) => <HtmlIcon width={width} />;
const getCssIcon = (width) => <CssIcon width={width} />;
const getAngularIcon = (width) => <AngularIcon width={width} />;
const getNodeIcon = (width) => <NodeIcon width={width} />;
const getExpressIcon = (width) => <ExpressIcon width={width} />;
const getMongoIcon = (width) => <MongoIcon width={width} />;
