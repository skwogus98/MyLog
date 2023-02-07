import React, { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHouseChimney, faBars, faXmark
} from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";

const menus = [1,2,3,4,5]

const header = (props: any) => {
  return (
    <Popover className='flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10'>
      <div className='flex justify-start mx-3 lg:w-0 lg:flex-2'>
        <Link href="/">
          <span className='sr-only'></span>
          <FontAwesomeIcon icon={faHouseChimney} className="h-6 w-6"/>
        </Link>
      </div>
      <div className='hidden mx-20 items-center justify-center md:w-0 md:flex-1 md:flex'>
        <div className="mx-10">
          <Link href="posts">전체 글</Link>
        </div>
        <div className="mx-10">
          <Link href="#">카테고리</Link>
        </div>
        <div className="mx-10">
          <Link href="#">??</Link>
        </div>
      </div>
      <div className="hidden md:flex-2 md:flex">
        <div className="ml-8 inline-flex items-center jusify-center whitespace-nowrap rounded-md border border-transparent bg-jyr px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-jyr">
          <Link href='/login'>로그인</Link>
        </div>
      </div>
      <div className="-my-2 -mr-2 md:hidden">
        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
          <span className="sr-only">Open menu</span>
          <FontAwesomeIcon icon={faBars} className="h-6 w-6" aria-hidden="true" />
        </Popover.Button>
        <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo='opacity-100 translate-y-0'
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Link href="#">
                      <span className='sr-only'></span>
                      <FontAwesomeIcon icon={faHouseChimney} className="h-6 w-6"/>
                    </Link>
                  </div>
                  <div className='-mr-2'>
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <FontAwesomeIcon icon={faXmark} className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="border-b-2 py-5">
                  카테고리 들어감<br/>
                  카테고리 들어감<br/>
                  카테고리 들어감<br/>
                </div>
                <div className="pt-5">
                  로그인 들어감
                </div>
              </div>
            </div>
          </Popover.Panel>

        </Transition>
      </div>
    </Popover>
  )
}

export default header