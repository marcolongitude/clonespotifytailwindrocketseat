import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import Image from 'next/image';

export const Main = () => {
    return (
        <main className="flex-1 p-6">
            <div className='flex items-center gap-4'>
                <button className='p-2 rounded-full bg-black/40'>
                    <ChevronLeft />
                </button>
                <button className='p-2 rounded-full bg-black/40'>
                    <ChevronRight />
                </button>
            </div>
            <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>
            <div className='grid grid-cols-3 gap-4 mt-4'>
                <a href="#" className='bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/20 transition-colors'>
                    <Image src="/album.jpg" width={104} height={104} alt='Album Arise da banda Sepultura' />
                    <strong>Arise</strong>
                    <button className='w-12 h-12 flex items-center justify-center pl-3 p-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                        <Play />
                    </button>
                </a>
                <a href="#" className='bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/20 transition-colors'>
                    <Image src="/album.jpg" width={104} height={104} alt='Album Arise da banda Sepultura' />
                    <strong>Arise</strong>
                    <button className='w-12 h-12 flex items-center justify-center pl-3 p-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                        <Play />
                    </button>
                </a>
                <a href="#" className='bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/20 transition-colors'>
                    <Image src="/album.jpg" width={104} height={104} alt='Album Arise da banda Sepultura' />
                    <strong>Arise</strong>
                    <button className='w-12 h-12 flex items-center justify-center pl-3 p-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                        <Play />
                    </button>
                </a>
                <a href="#" className='bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/20 transition-colors'>
                    <Image src="/album.jpg" width={104} height={104} alt='Album Arise da banda Sepultura' />
                    <strong>Arise</strong>
                    <button className='w-12 h-12 flex items-center justify-center pl-3 p-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                        <Play />
                    </button>
                </a>
                <a href="#" className='bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/20 transition-colors'>
                    <Image src="/album.jpg" width={104} height={104} alt='Album Arise da banda Sepultura' />
                    <strong>Arise</strong>
                    <button className='w-12 h-12 flex items-center justify-center pl-3 p-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                        <Play />
                    </button>
                </a>
                <a href="#" className='bg-white/5 group flex items-center gap-4 rounded overflow-hidden hover:bg-white/20 transition-colors'>
                    <Image src="/album.jpg" width={104} height={104} alt='Album Arise da banda Sepultura' />
                    <strong>Arise</strong>
                    <button className='w-12 h-12 flex items-center justify-center pl-3 p-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                        <Play />
                    </button>
                </a>
            </div>
            <h2 className='font-semibold text-2xl mt-10'>Marco Aurélio Guimarães</h2>
            <div className='grid grid-cols-8 gap-4 mt-4'>
                <a href="#" className='bg-white/5 flex flex-col gap-2 p-3 rounded-md hover:bg-white/10'>
                    <Image className='w-full' src="/album.jpg" width={104} height={104} alt='Album Arise da banda Sepultura' />
                    <strong className='font-semibold'>Daily Mix 1</strong>
                    <span className='text-sm text-zinc-400'>Marco Aurélio - GuitarMan</span>
                </a>
                <a href="#" className='bg-white/5 flex flex-col gap-2 p-3 rounded-md hover:bg-white/10'>
                    <Image className='w-full' src="/album.jpg" width={104} height={104} alt='Album Arise da banda Sepultura' />
                    <strong className='font-semibold'>Daily Mix 1</strong>
                    <span className='text-sm text-zinc-400'>Marco Aurélio - GuitarMan</span>
                </a>
                <a href="#" className='bg-white/5 flex flex-col gap-2 p-3 rounded-md hover:bg-white/10'>
                    <Image className='w-full' src="/album.jpg" width={104} height={104} alt='Album Arise da banda Sepultura' />
                    <strong className='font-semibold'>Daily Mix 1</strong>
                    <span className='text-sm text-zinc-400'>Marco Aurélio - GuitarMan</span>
                </a>
                <a href="#" className='bg-white/5 flex flex-col gap-2 p-3 rounded-md hover:bg-white/10'>
                    <Image className='w-full' src="/album.jpg" width={104} height={104} alt='Album Arise da banda Sepultura' />
                    <strong className='font-semibold'>Daily Mix 1</strong>
                    <span className='text-sm text-zinc-400'>Marco Aurélio - GuitarMan</span>
                </a>
                <a href="#" className='bg-white/5 flex flex-col gap-2 p-3 rounded-md hover:bg-white/10'>
                    <Image className='w-full' src="/album.jpg" width={104} height={104} alt='Album Arise da banda Sepultura' />
                    <strong className='font-semibold'>Daily Mix 1</strong>
                    <span className='text-sm text-zinc-400'>Marco Aurélio - GuitarMan</span>
                </a>
            </div>
        </main>
    )
}