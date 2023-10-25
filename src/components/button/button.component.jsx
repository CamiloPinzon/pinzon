import { useNavigate } from "react-router-dom";

import "./button.styles.scss";

const Button = ({ children, route }) => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate(`${route}`);
	};
	return (
		<div className="button-container" onClick={handleClick}>
			{children}
		</div>
	);
};

export default Button;
