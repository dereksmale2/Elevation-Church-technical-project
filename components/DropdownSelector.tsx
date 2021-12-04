import { communityInfo } from '../data'

export const DropdownSelector = () => {
  const allData = communityInfo.map((data) => {
    return data.campusName
  })

  console.log(allData)

  return (
    <div className='pt-12 pl-24'>
      <h3>Campus Community</h3>
      <ul>
        <li>{allData}</li>
      </ul>
    </div>
  )
}
