import React from 'react'

import expert1 from '../../../images/experts/expert-1.jpg'
import expert2 from '../../../images/experts/expert-2.jpg'
import expert3 from '../../../images/experts/expert-3.jpg'
import expert4 from '../../../images/experts/expert-4.jpg'
import expert5 from '../../../images/experts/expert-5.jpg'
import expert6 from '../../../images/experts/expert-6.jpg'

const experts = [
	{ id: 1, name: 'Will Smith', img: expert1 },
	{ id: 2, name: 'Chris Rock', img: expert2 },
	{ id: 3, name: 'Dwayne Rock', img: expert3 },
	{ id: 4, name: 'Messi Vai', img: expert4 },
	{ id: 5, name: 'Ronaldo Bro', img: expert5 },
	{ id: 6, name: 'Stachy Johnson', img: expert6 },
]

const Experts = () => {
	return (
		<div>
			<h2>Our Experts</h2>
		</div>
	)
}

export default Experts
