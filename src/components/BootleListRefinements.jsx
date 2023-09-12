import { IconFilter, IconSort } from "./ui/Icons"

export default function BootleListRefinements(props) {
  return (
    <div className="w-full flex justify-between items-center mt-2 p-7 gap-4">
        <p className="text-sm">Refinements:</p>

        <div className="flex gap-2">
            <button className={`hover:text-brown_2`}>
                <span className="sr-only">Filter by</span>
                {IconFilter}
            </button>
            <button className={`hover:text-brown_2`}>
                <span className="sr-only">Order by</span>
                {IconSort}
            </button>
        </div>
    </div>
  )
}
