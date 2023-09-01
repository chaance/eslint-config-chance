export default function () {
	return <div>Hello</div>;
} // WARN react/display-name

export function BadStyles() {
	return (
		<div>
			{/* TYPE ERROR - react/style-prop-object disabled in TS */}
			<div style="display: none;">Hello</div>
		</div>
	);
}
