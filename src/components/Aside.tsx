import { HomeIcon, Library, Search } from "lucide-react"

export const Aside = () => {
    return (
        <aside className="w-72 bg-zinc-950 p-6">
            <div className='flex items-center gap-2'>
                <div className='w-3 h-3 bg-red-500 rounded-full' />
                <div className='w-3 h-3 bg-yellow-500 rounded-full' />
                <div className='w-3 h-3 bg-green-500 rounded-full' />
            </div>
            <nav className='space-y-5 mt-10'>
                <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-100'><HomeIcon />Home</a>
                <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-100'><Search />Search</a>
                <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-100'><Library />Your Library</a>
            </nav>
            <nav className='mt-6 pt-10 border-t border-zinc-800 flex flex-col gap-3'>
                <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Músicas pessoais</a>
                <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Músicas internacionais</a>
                <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Nacionais</a>
                <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Internacionais</a>
                <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Rock nacional</a>
                <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Rock internacional</a>
                <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Jazz</a>
                <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Funk americano</a>
                <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Blues nacional</a>
                <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Blues internacional</a>
                <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>As melhores CBJR</a>
                <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>As melhores O Rappa</a>
            </nav>
        </aside>
    )
}