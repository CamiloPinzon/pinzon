import "./work-item.styles.scss";

const WorkItem = ({ item }) => {
	const { title } = item;
	return <div>{title}</div>;
};

export default WorkItem;
