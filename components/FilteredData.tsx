import { communityInfo } from '../data'
import Group from '../types/group'

export const FilteredData = () => {
  const filteredData = (key: any) => {
    return uniq(
      communityInfo.map((data) => {
        return data[key]
      })
    )
  }

  let uniq = (a: Array<Group>) => [...new Set(a)]

  return (
    <div>
      <div>
        <h3>Campus Community</h3>
        <ul>
          <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
            {filteredData('campusName')}
          </button>
        </ul>
      </div>
      <div>
        <h3>Demographic</h3>
        <ul>
          <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
            {filteredData('demographic')}
          </button>
        </ul>
      </div>
      <div>
        <h3>Gender</h3>
        <ul>
          <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
            {filteredData('gender')}
          </button>
        </ul>
      </div>
      <div>
        <h3>Topic</h3>
        <ul>
          <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
            {filteredData('egroupType')}
          </button>
        </ul>
      </div>
      <div>
        <h3>Days</h3>
        <ul>
          <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
            {filteredData('dayOfWeek')}
          </button>
        </ul>
      </div>
      <div>
        <h3>In-Person</h3>
        <ul>
          <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
            {filteredData('meetingType')}
          </button>
        </ul>
      </div>
      <div>
        <h3>Language</h3>
        <ul>
          <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
            {filteredData('language')}
          </button>
        </ul>
      </div>
      <div>
        <h3>Childcare</h3>
        <ul>
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
          <li>{filteredData('')}</li>
        </ul>
      </div>
    </div>
  )
}
