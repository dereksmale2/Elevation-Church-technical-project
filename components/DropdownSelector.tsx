import { AccordianMenu } from './AccordianMenu'
import eGroupsLogo from '../public/eGroups-Logo.png'
import Image from 'next/image'
import { FilteredData } from './FilteredData'

export const DropdownSelector = () => {
  return (
    <>
      <div className='pl-24'>
        <Image height='50' width='115' src={eGroupsLogo} alt='eGroups Logo' />
      </div>
      <div className='pt-5 pl-24'>
        <AccordianMenu />
        <FilteredData />
      </div>
    </>
  )
}
