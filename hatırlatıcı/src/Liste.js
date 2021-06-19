import React from 'react';

export const Liste = (props) => {
	const { kisiler } = props;

	return (
		<div>
			{kisiler.map((k) => {
				console.log(k);
				let { id, isim, yas, resim } = k;

				return (
					<div className="kisi" key={id}>
						<img className="" src={resim} alt="" />
						<div>
							<h4>{isim}</h4>
							<h4>{yas} Yaşında</h4>
						</div>
					</div>
				);
			})}
		</div>
	);
};
export default Liste;
