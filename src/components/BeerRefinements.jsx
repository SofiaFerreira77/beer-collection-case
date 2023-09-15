import { Fragment, useState } from "react"
import { IconFilter, IconSort } from "./ui/Icons"
import { Listbox, Transition } from '@headlessui/react'

export default function BeerRefinements(props) {

  const filterByOptions = [
    { id: 1, label: 'Name' },
    { id: 2, label: 'Type' },
    { id: 3, label: 'Year' }
  ]

  const sortByOptions = [
    { id: 1, label: 'Name' },
    { id: 2, label: 'Type' },
    { id: 3, label: 'Year' }
  ]
  
  const [filterSelected, setFilterSelected] = useState([])
  const [sortBySelected, setSortBySelected] = useState(sortByOptions[0])

  return (
    <div className="relative z-30 container mx-auto flex justify-between items-center mt-2 p-7 gap-4">
        
        <p className="text-sm">Refinements:</p>

        <div className="flex gap-2">
            <Listbox as="div" value={filterSelected} onChange={setFilterSelected} 
                className="relative text-left">
              <Listbox.Button className="flex items-center gap-1 px-3 py-2 text-xs text-brown hover:text-gray">
                  {IconFilter}
                  <span className="text-gray truncate">Filter by</span>
                  <span className="font-semibold">{filterSelected.label}</span>
              </Listbox.Button>
              
              <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                <Listbox.Options className="absolute right-0 left-0 z-20 flex flex-col bg-white drop-shadow-md rounded-lg text-right">
                    {filterByOptions.map((item, index) => (
                      <Listbox.Option
                        key={item.id}
                        className={({ active }) =>
                            `text-sm relative cursor-pointer select-none py-1 px-5 hover:bg-white_2 ${
                              active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                            }`
                        }
                        value={item}
                      >
                        {item.label}
                      </Listbox.Option>
                    ))}
                </Listbox.Options>
              </Transition>
            </Listbox>

            <Listbox as="div" value={sortBySelected} onChange={setSortBySelected} 
                className="relative text-left">
              <Listbox.Button className="flex items-center gap-1 px-3 py-2 text-xs text-brown hover:text-gray">
                  {IconSort}
                  <span className="text-gray truncate">Sort by</span>
                  <span className="font-semibold">{sortBySelected.label}</span>
              </Listbox.Button>
              
              <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                <Listbox.Options className="absolute right-0 left-0 z-20 flex flex-col bg-white drop-shadow-md rounded-lg text-right">
                    {filterByOptions.map((item, index) => (
                      <Listbox.Option
                        key={item.id}
                        className={({ active }) =>
                            `text-sm relative cursor-pointer select-none py-1 px-5 hover:bg-white_2 ${
                              active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                            }`
                        }
                        value={item}
                      >
                        {item.label}
                      </Listbox.Option>
                    ))}
                </Listbox.Options>
              </Transition>
            </Listbox>
        </div>
    </div>
  )
}
