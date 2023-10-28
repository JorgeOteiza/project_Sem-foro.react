import React, { useState } from 'react';

const Home = () => {
	const colors = [
		{ name: 'rojo', color: 'red' },
		{ name: 'amarillo', color: 'yellow' },
		{ name: 'verde', color: 'green' }
	];

	const [selected, setSelected] = useState(null);

	const handleClick = (el) => {
		if (selected && selected.name === el.name) {
			setSelected(null); // Apagar la luz si se hace clic en un color ya seleccionado
		} else {
			setSelected(el);
		}
	};

	return (
		<section style={{
			width: 'max-content',
			padding: '21px',
			margin: 'auto',
			marginTop: '99px',
			backgroundColor: 'black',
			position: 'relative',
			borderRadius: '30px',
		}}>
			<div style={{ position: 'absolute', top: '-99px', left: '50%', transform: 'translateX(-50%)', width: '21px', height: '99px', backgroundColor: 'black' }}></div>
			<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
				{colors.map((el) => (
					<article key={el.name} style={{ marginBottom: '20px' }}>
						<button
							onClick={() => handleClick(el)}
							style={{
								borderRadius: '50%',
								width: '96px',
								height: '96px',
								fontWeight: '600',
								backgroundColor: el.color,
								border: selected && el.name === selected.name ? '0 solid lightblue' : 'none',
								boxShadow: selected && el.name === selected.name ? '0 0 60px 50px rgba(173, 216, 230, 1.0)' : 'none',
								transition: 'box-shadow 0.3s'
							}}
						></button>
					</article>
				))}
			</div>
		</section>
	);
};

export default Home;