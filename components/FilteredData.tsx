import { communityInfo } from '../data'
import Group from '../types/group'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'

export const FilteredData = () => {
  const [filters, setFilters] = useState([])
  const [childCare, setChildCare] = useState(false)

  useEffect(() => {
    console.log(filters)
  }, [filters])

  const handleChildCare = () => {
    setChildCare(!childCare)
  }

  const setFilter = (item: any) => {
    const filtersArray = [...filters]

    const index = filtersArray.indexOf(item)
    if (index > -1) {
      filtersArray.splice(index, 1)
    } else {
      filtersArray.push(item)
    }
    setFilters(filtersArray)
  }

  const filteredData = (key: any) => {
    return uniq(
      communityInfo.map((data) => {
        return data[key]
      })
    )
  }

  let uniq = (a: Array<Group>) => [...new Set(a)]

  const uniqueCampusCommunities = [
    ...new Map(communityInfo.map((v) => [v.slugCampusName, v])).values()
  ]

  return (
    <div>
      <div>
        <h3>Campus Community</h3>
        {uniqueCampusCommunities.map((campus) => {
          return (
            <Link
              key={campus.id}
              href={`/egroups/${campus.slugCampusName}`}
              passHref
            >
              <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
                {campus.campusName}
              </button>
            </Link>
          )
        })}
      </div>
      <div>
        <h3 className='font-bold text-lg'>Demographic</h3>
        {filteredData('demographic').map((item) => {
          return (
            <button
              onClick={() => setFilter(item)}
              key={item}
              className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
            >
              {item}
            </button>
          )
        })}
      </div>
      <div>
        <h3>Gender</h3>
        {filteredData('gender').map((item) => {
          return (
            <button
              onClick={() => setFilter(item)}
              key={item}
              className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
            >
              {item}
            </button>
          )
        })}
      </div>
      <div>
        <h3>Topic</h3>
        {filteredData('egroupType').map((item) => {
          return (
            <button
              onClick={() => setFilter(item)}
              key={item}
              className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
            >
              {item}
            </button>
          )
        })}
      </div>
      <div>
        <h3>Days</h3>
        {filteredData('dayOfWeek').map((item) => {
          return (
            <button
              onClick={() => setFilter(item)}
              key={item}
              className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
            >
              {item}
            </button>
          )
        })}
      </div>
      <div>
        <h3>In-Person</h3>
        {filteredData('meetingType').map((item) => {
          return (
            <button
              onClick={() => setFilter(item)}
              key={item}
              className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
            >
              {item}
            </button>
          )
        })}
      </div>
      <div>
        <h3>Language</h3>
        {filteredData('language').map((item) => {
          return (
            <button
              onClick={() => setFilter(item)}
              key={item}
              className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
            >
              {item}
            </button>
          )
        })}
      </div>
      <div>
        <h3>Childcare</h3>
        <div
          className='
              relative
              inline-block
              w-10
              mr-2
              align-middle
              select-none
              transition
              duration-200
              ease-in
              '
        >
          <input
            checked={childCare}
            onChange={handleChildCare}
            type='checkbox'
            name='toggle'
            id='toggle'
            className='
              toggle-checkbox
              absolute
              block
              w-6
              h-6
              rounded-full
              bg-white
              border-4
              appearance-none
              cursor-pointer
              '
          />
          <label
            for='toggle'
            className='
              toggle-label
              block
              overflow-hidden
              h-6
              rounded-full
              bg-gray-300
              cursor-pointer
              '
          ></label>
        </div>
      </div>
    </div>
  )
}
