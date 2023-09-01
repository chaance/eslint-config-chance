export default function () {
	return <div>Hello</div>;
} // WARN react/display-name

export function BadStyles() {
	return (
		<div>
			{/* WARN react/style-prop-object */}
			<div style="display: none;">Hello</div>
		</div>
	);
}
