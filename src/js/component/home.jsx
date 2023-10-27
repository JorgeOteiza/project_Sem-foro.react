import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

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
		<section style={{ margin: "24px" }}>
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
