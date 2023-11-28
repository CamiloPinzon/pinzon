import { useDispatch, useSelector } from "react-redux";

import i18next from "../../i18n";
import { setLanguage } from "../../store/language/language.actions";
import { selectLanguage } from "../../store/language/language.selector";

const LanguageSelector = () => {
	const dispatch = useDispatch();
	const selectedLanguage = useSelector(selectLanguage);
	const chooseLanguage = (e) => {
		e.preventDefault();
		dispatch(setLanguage(e.target.value));
		i18next.changeLanguage(e.target.value);
	};
	return (
		<select defaultValue={selectedLanguage} onChange={chooseLanguage}>
			<option value="en">English</option>
			<option value="es">Español</option>
		</select>
	);
};

export default LanguageSelector;
