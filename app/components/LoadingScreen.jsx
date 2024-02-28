import Facts from './Tips'
import { Bars } from 'react-loader-spinner'

const LoadingScreen = ({ responseStream }) => {
    return (
        <>
            <div className='min-h-screen grid place-items-center'>
                <div className='w-[80%] flex flex-col items-center'>
                    <div className='flex items-center gap-4'>
                        <Bars width='60' height='60' color='violet' />
                        <div className='text-violet-400 uppercase text-4xl font-bold text-center translate-y-2'>
                            <p className=' animate-pulse'>Generating Quiz..</p>
                            <p className='text-xs text text-violet-300/40'>
                                (can take around 10-20 seconds)
                            </p>
                        </div>
                        <Bars width='60' height='60' color='violet' />
                    </div>
                    <div className='mt-8'>
                        <Facts />
                    </div>
                </div>
            </div>
        </>
    )
}
export default LoadingScreen
