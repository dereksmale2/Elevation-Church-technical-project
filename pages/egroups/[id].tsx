import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Header } from '../../components/Header'
import { DropdownSelector } from '../../components/DropdownSelector'

const EgroupSelector: NextPage = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <Header />
      <div className='text-center pt-8'>
        <h1>Find an eGroup</h1>
        <p>There's an {id} group waiting for you.</p>
      </div>
      <DropdownSelector />
    </>
  )
}

export default EgroupSelector
