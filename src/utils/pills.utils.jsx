import { PILLS_ACTION_TYPES } from "../store/pills/pills.types";
import { JavascripPills } from "../data/javascript";
import { ReactPills } from "../data/react";
import { CssPills } from "../data/css";

const getPills = (pills) => {
	switch (pills) {
		case PILLS_ACTION_TYPES.CATEGORY_REACT:
			return getReact();
		case PILLS_ACTION_TYPES.CATEGORY_JAVASCRIPT:
			return getJavaScript();
		case PILLS_ACTION_TYPES.CATEGORY_CSS:
			return getCss();
		default:
			break;
	}
};

const getReact = () => ReactPills;
const getJavaScript = () => JavascripPills;
const getCss = () => CssPills;

export default getPills;
