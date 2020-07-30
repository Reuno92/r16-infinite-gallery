import React from 'react';
import './App.css'

function App() {
	return (
		<section className="App">
			<h1>Unsplash Image gallery</h1>

			<form>
				<input type="text" placeholder="Search unsplash…"/>
				<button>Search</button>
			</form>

			<section className="image-grid">
				{
					[...Array(100)].map((_, index) => (
						(
							<div className="image" key={index}>
								<img className="card-img-top"
										 src={"https://placekitten.com/g/1920/1080"}
										 alt={"kitten sample number #" + {index}}/>
							</div>
						)
					))
				}
			</section>
		</section>
	);
}

export default App;
