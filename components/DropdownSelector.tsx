import { communityInfo } from '../data'

export const DropdownSelector = () => {
  console.log(communityInfo)
  return (
    <div className='pt-12 pl-28'>
      <h3>Campus Community</h3>
      <h3>Demographic</h3>
      <h3>Gender</h3>
      <h3>Topic</h3>
      <h3>Days</h3>
      <h3>In-Person</h3>
      <h3>Language</h3>
      <h3>Childcare</h3>
    </div>
  )
}
