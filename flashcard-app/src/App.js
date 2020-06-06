import React, { useState, useEffect } from 'react';
import FlashcardList from './FlashcardList';
import './app.css';
import axios from 'axios';

function App() {
	const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS);

	useEffect(() => {
		axios
			.get('https://opentdb.com/api.php?amount=10');
			.then(res => {
				console.log(res.data);
			})
	}, []);

	return <FlashcardList flashcards={flashcards} />;
}

const SAMPLE_FLASHCARDS = [
	{
		id: 1,
		question: 'What is 2 + 2?',
		answer: '4',
		options: ['2', '3', '4', '5'],
	},
	{
		id: 2,
		question: 'Question 2?',
		answer: 'Answer',
		options: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
	},
];

export default App;
