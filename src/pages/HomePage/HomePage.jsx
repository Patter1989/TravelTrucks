import css from "./HomePage.module.css"

function HomePage() {

	return (
		<div className={css.HomePageWrapper}>
			<h1 className={css.header}>Campers of your dreams</h1>
			<h2 className={css.text}>
				You can find everything you want in our catalog
			</h2>
			<button className={css.btn}>View Now</button>
		</div>
	);
}

export default HomePage
