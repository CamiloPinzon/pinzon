import { PILLS_ACTION_TYPES } from "../store/pills/pills.types";
import { JavascripPillsEn, JavascripPillsEs } from "../data/javascript";
import { ReactPillsEn, ReactPillsEs } from "../data/react";
import { CssPillsEn, CssPillsEs } from "../data/css";

const GetPills = (pills, language) => {
	switch (pills) {
		case PILLS_ACTION_TYPES.CATEGORY_REACT:
			return getReact(language);
		case PILLS_ACTION_TYPES.CATEGORY_JAVASCRIPT:
			return getJavaScript(language);
		case PILLS_ACTION_TYPES.CATEGORY_CSS:
			return getCss(language);
		default:
			break;
	}
};

const getReact = (language) =>
	language === "en" ? ReactPillsEn : ReactPillsEs;

const getJavaScript = (language) =>
	language === "en" ? JavascripPillsEn : JavascripPillsEs;

const getCss = (language) => (language === "en" ? CssPillsEn : CssPillsEs);

export default GetPills;
