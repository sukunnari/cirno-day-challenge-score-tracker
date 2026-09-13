async function MainPage({ queries }: { queries: Record<string, string> }) {
	return (
		<html lang="en">
			<head>
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>Daily Streakers Tracker</title>
				<link rel="stylesheet" href="./assets/global.css?v=20260912" />
			</head>
			<body>
				<main>
					<div>Hi</div>

					<footer>
						<span>
							This website is open source for transparency purpose. You can
							check it on&nbsp;
							<a
								href="https://github.com/sukunnari/cirno-day-challenge-score-tracker.git"
								target="_blank"
								rel="noopener noreferrer"
							>
								GitHub
							</a>
							.
						</span>
					</footer>
				</main>
				<script
					type="text/javascript"
					src="./library/htmx.min.js?rev=20260912"
				></script>
			</body>
		</html>
	);
}

export { MainPage };
