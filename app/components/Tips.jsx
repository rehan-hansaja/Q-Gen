'use client'

import { useState } from 'react'
import { facts, jokes } from '../constants/tips'
import { useTypewriter, Typewriter } from 'react-simple-typewriter'
import { HiChevronRight } from 'react-icons/hi2'
import { pickRandom } from '../utils'

const Facts = () => {
    const [fact, setFact] = useState(pickRandom(facts))

    return (
        <div className='flex flex-col items-center text-center mt-8'>
            <p className='min-h-[100px] text-2xl '>
                <Typewriter
                    key={fact}
                    words={[fact]}
                    loop={false}
                    typeSpeed={50}
                    deleteSpeed={10000000}
                />
            </p>
            <button
                onClick={() => setFact(pickRandom(facts))}
                className='px-4 py-2 mt-12 text-violet-300 border border-violet-300 rounded flex items-center gap-2 group hover:bg-violet-300/40 hover:text-white active:bg-violet-600'
            >
                Next Tip
                <HiChevronRight className='' />
            </button>
        </div>
    )
}
export default Facts
