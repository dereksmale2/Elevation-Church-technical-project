import { communityInfo } from '../data'
import Group from '../types/group'
import { AccordianMenu } from './AccordianMenu'

export const DropdownSelector = () => {
  const filteredData = (key: any) => {
    return uniq(
      communityInfo.map((data) => {
        return data[key]
      })
    )
  }

  let uniq = (a: Array<Group>) => [...new Set(a)]

  return (
    <>
      <div className='pt-12 pl-24'>
        <div>
          {/* <AccordianMenu /> */}
          <h3>Campus Community</h3>
          <ul>
            <li>{filteredData('campusName')}</li>
          </ul>
        </div>
        <div>
          <h3>Demographic</h3>
          <ul>
            <li>{filteredData('demographic')}</li>
          </ul>
        </div>
      </div>
    </>
  )
}
