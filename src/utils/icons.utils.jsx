import { ReactComponent as GPayLogo } from "../assets/img/google-pay-logo.svg";
import { ReactComponent as GoogleWalletLogo } from "../assets/img/Google_Wallet.svg";
import HugeLogo from "../assets/img/huge_logo.png";

export const LogosT = {
	GPAY_LOGO: "GPAY_LOGO",
	GOOGLE_WALLET_LOGO: "GOOGLE_WALLET_LOGO",
	HUGE_LOGO: "HUGE_LOGO",
};

export const getLogo = (logo, width) => {
	switch (logo) {
		case LogosT.GPAY_LOGO:
			return getGpayLogo(width);
		case LogosT.GOOGLE_WALLET_LOGO:
			return getGoogleWalletLogo(width);
		case LogosT.HUGE_LOGO:
			return getHugeLogo(width);
		default:
			break;
	}
};

const getGpayLogo = (width) => <GPayLogo width={width} />;

const getGoogleWalletLogo = (width) => <GoogleWalletLogo width={width} />;

const getHugeLogo = (width) => (
	<img src={HugeLogo} width={width} alt="Logo Huge" />
);
