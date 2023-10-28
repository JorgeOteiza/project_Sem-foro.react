import React, { useState } from "react";

//create your first component
const Home = () => {

	const colors = [{
		name: "rojo",
		color: "red"
	}, {
		name: "amarillo",
		color: "yellow"
	}, {
		name: "verde",
		color: "green"
	}]

	const [selected, setSelected] = useState({})
	return (
		<section style={{ width: "max-content", padding: "100px", margin: "auto", backgroundColor: "black", }}>
			{
				colors.map((el) => (<article>
					<button onClick={() => setSelected(el)} style={{
						borderRadius: "50%",
						width: "150px",
						height: "150px",
						fontWeight: "600",
						backgroundColor: el.color,
						border: el.name === selected.name ? '4px solid lightblue' : 'none'
					}}></button>
				</article>
				))
			}
		</section>
	);
};

export default Home;
