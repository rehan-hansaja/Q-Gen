'use client'

import { useState } from 'react'
import { topics } from './constants/topics'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const HomePage = () => {

    const [language, setLanguage] = useState('programming')
    const [difficulty, setDifficulty] = useState('Beginner')
    const [topic, setTopic] = useState('Java')
    const [numQuestions, setNumQuestions] = useState('5')

    const handleSetQuestions = (e) => {}

    const handleLanguageSelect = (e) => {
        setLanguage(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(language, difficulty, topic)
    }

    return (
        <div className='min-h-screen grid place-items-center'>
            <div className='border rounded border-white/0 '>
                <h1 className='text-center text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-500 via-pink-400 to-blue-500 bg-clip-text text-transparent q-animate-gradient'>
                    
                </h1>
                <h1 className='text-center text-5xl md:text-7xl font-bold text-violet-500'>
                    Q-GEN 
                </h1>
                <h1 className='text-center text-5xl md:text-5xl font-bold text-violet-500'>
                    {/* MCQ Quiz Generator */}
                    Generate Your Quiz
                </h1>
                <h4 className='text-center text-2xl md:text-2xl font-bold text-white-700'>
                    {/* for IT students */}
                    Dive into the World of Tech 
                </h4>


                {/* <form onSubmit={handleSubmit} className='mt-8 grid grid-cols-[2fr_3fr]'> */}
                <form
                    onSubmit={handleSubmit}
                    className='mt-14 flex flex-col gap-4 w-[80%] mx-auto'
                >
                    {/* <div className='flex flex-col gap-6'> */}
                    <div className='grid grid-cols-2 gap-x-8 gap-y-6'>

                        {/* LANGUAGE */}
                        <div className='flex flex-col'>
                            <label
                                htmlFor='language'
                                className='uppercase text-xs'
                            >
                                Topic
                            </label>
                            <select
                                value={language}
                                onChange={handleLanguageSelect}
                                name='language'
                                className='quiz-select'
                            >
                                <option value='programming'>Programming</option>
                                <option value='web'>Web Development</option>
                                <option value='database'>Database Management</option>
                                <option value='networking'>Networking</option>
                                <option value='sdlc'>Development Methodologies</option>
                                <option value='cloud'>Cloud Computing</option>
                                <option value='ml'>Machine Learning</option>
                            </select>
                        </div>

                        {/* TOPIC */}
                        <div className='flex flex-col'>
                            <label
                                htmlFor='topic'
                                className='uppercase text-xs'
                            >
                                Sub Topic
                            </label>
                            <select
                                value={topic}
                                onChange={(e) => setTopic(e.target.value)}
                                name='topic'
                                className='quiz-select'
                            >
                                {topics[language].map((option, index) => (
                                    <option
                                        value={option}
                                        key={index}
                                    >
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* DIFFICULTY */}
                        <div className='flex flex-col'>
                            <label
                                htmlFor='difficult'
                                className='uppercase text-xs'
                            >
                                Difficulty
                            </label>
                            <select
                                name='difficulty'
                                value={difficulty}
                                onChange={(e) => setDifficulty(e.target.value)}
                                className='quiz-select'
                            >
                                <option value='beginner'>Easy</option>
                                <option value='intermediate'>
                                    Medium
                                </option>
                                <option value='advanced'>Hard</option>
                            </select>
                        </div>

                        {/* NUMBER OF QUESTIONS */}
                        <div className='flex flex-col'>
                            <label
                                htmlFor='numQuestions'
                                className='uppercase text-xs'
                            >
                                No of Questions
                            </label>
                            <select
                                name='numQuestions'
                                value={numQuestions}
                                onChange={(e) =>
                                    setNumQuestions(e.target.value)
                                }
                                className='quiz-select'
                            >
                                <option value='5'>5</option>
                                <option value='10'>10</option>
                                <option value='15'>15</option>
                                <option value='20'>20</option>
                            </select>
                        </div>
                    </div>

                    <div className='mx-auto mt-8'>
                        <Link
                            className='q-button'
                            href={{
                                pathname: '/quiz',
                                query: {
                                    language,
                                    difficulty: difficulty.toLowerCase(),
                                    topic: topic.toLowerCase(),
                                    numQuestions,
                                },
                            }}
                        >
                            Generate Quiz
                        </Link>
                    </div>
                </form>
            </div>

{/* <a
    className='fixed bottom-0 flex items-center gap-2 pb-2 font-mono text-sm text-white transition hover:text-emerald-300 sm:m-0'
    href='https://github.com/rehan-hansaja/Q-Gen'
    target='_blank'
>
    Built by TEAM INVICTUS
</a> */}

        </div>
    )
}
export default HomePage
