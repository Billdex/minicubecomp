export default function Competition(props) {
    return (
        <div>
            <div className="h-36 p-8">
                <div className="font-medium text-3xl">比赛列表</div>
            </div>
            <div className="border-b-2 border-orange-400"></div>
            <div className="flex justify-center items-center p-8 text-slate-400">
                <button
                    className="hover:border-orange-400 hover:border-solid hover:bg-white hover:text-orange-400 group w-full flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-slate-300 py-2">
                    <svg className="group-hover:text-orange-400 mb-1" width="20" height="20"
                         fill="currentColor" aria-hidden="true">
                        <path
                            d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z"/>
                    </svg>
                    创建比赛
                </button>
            </div>

        </div>)
}