import _ from 'lodash'
import { communityInfo } from '../data'
import Group from '../types/group'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { DisplayedData } from './DisplayedData'

export const FilteredData = () => {
  const [filters, setFilters] = useState([])
  const [childCare, setChildCare] = useState(false)
  const [groups, setGroups] = useState(communityInfo)

  useEffect(() => {
    filteredGroups(filters)
    console.log(filters)
  }, [filters])

  const handleChildCare = () => {
    setChildCare(!childCare)
  }

  // Filter through an array and push the items selected into a new array/splice items that already exist in the array if doubled

  const setFilter = (newFilter: any) => {
    const filtersArray = [...filters]

    let foundIndex = filtersArray.findIndex((x) => x.filter == newFilter.filter)
    if (foundIndex > -1) {
      filtersArray.splice(foundIndex, 1)
    } else {
      filtersArray.push(newFilter)
    }
    setFilters(filtersArray)
  }

  // Map through the filtered data and return

  const filteredData = (key: any) => {
    return uniqArray(
      communityInfo.map((data) => {
        return {
          category: key,
          filter: data[key]
        }
      })
    )
  }

  // Create a copy of each group, filter through to update based on which filter is selected, more to do

  const filteredGroups = (filters: any) => {
    let groupsCopy = [...groups]

    if (filters.length > 0) {
      filters.forEach((filter: any) => {
        groupsCopy.filter((group) => {
          console.log(group.name)
        })
      })
    }
    setGroups(groupsCopy)
  }

  // Keep each array unique -> https://newbedev.com/remove-duplicates-from-an-array-of-objects-in-javascript

  let uniqArray = (arr: any) => {
    return arr.filter(
      (v, i, a) =>
        a.findIndex((t) => JSON.stringify(t) === JSON.stringify(v)) === i
    )
  }

  // Make the campus selection one choice, identified by slugCampusName. Only one is chosen at a time

  let uniq = (a: Array<Group>) => [...new Set(a)]

  const uniqueCampusCommunities = [
    ...new Map(communityInfo.map((v) => [v.slugCampusName, v])).values()
  ]

  return (
    <>
      <div>
        <DisplayedData data={groups} />
        <div>
          <h3 className='font-bold text-lg'>Campus Community</h3>
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
                key={item.filter}
                className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
              >
                {item.filter}
              </button>
            )
          })}
        </div>
        <div>
          <h3 className='font-bold text-lg'>Gender</h3>
          {filteredData('gender').map((item) => {
            return (
              <button
                onClick={() => setFilter(item)}
                key={item.filter}
                className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
              >
                {item.filter}
              </button>
            )
          })}
        </div>
        <div>
          <h3 className='font-bold text-lg'>Topic</h3>
          {filteredData('egroupType').map((item) => {
            return (
              <button
                onClick={() => setFilter(item)}
                key={item.filter}
                className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
              >
                {item.filter}
              </button>
            )
          })}
        </div>
        <div>
          <h3 className='font-bold text-lg'>Days</h3>
          {filteredData('dayOfWeek').map((item) => {
            return (
              <button
                onClick={() => setFilter(item)}
                key={item.filter}
                className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
              >
                {item.filter}
              </button>
            )
          })}
        </div>
        <div>
          <h3 className='font-bold text-lg'>In-Person</h3>
          {filteredData('meetingType').map((item) => {
            return (
              <button
                onClick={() => setFilter(item)}
                key={item.filter}
                className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
              >
                {item.filter}
              </button>
            )
          })}
        </div>
        <div>
          <h3 className='font-bold text-lg'>Language</h3>
          {filteredData('language').map((item) => {
            return (
              <button
                onClick={() => setFilter(item)}
                key={item.filter}
                className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
              >
                {item.filter}
              </button>
            )
          })}
        </div>
        <div>
          <h3 className='font-bold text-lg'>Childcare</h3>
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
              htmlFor='toggle'
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
    </>
  )
}
