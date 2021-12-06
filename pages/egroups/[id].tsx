import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Header } from '../../components/Header'
import { DropdownSelector } from '../../components/DropdownSelector'
import { communityInfo } from '../../data'

const EgroupSelector: NextPage = () => {
  const router = useRouter()
  const { id } = router.query

  const pageData = communityInfo.filter((data) => {
    return data.slugCampusName === id
  })

  return (
    <>
      <Header />
      {id === 'nocampus' ? (
        <div className='text-center pt-8'>
          <h1>Find an eGroup</h1>
          <p>There's a group waiting for you.</p>
        </div>
      ) : (
        <div className='text-center pt-8'>
          <h1>Find an eGroup</h1>
          <p>There's an {pageData[0].campusName} group waiting for you.</p>
        </div>
      )}
      <DropdownSelector />
    </>
  )
}

export default EgroupSelector
