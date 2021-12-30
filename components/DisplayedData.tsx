export const DisplayedData = ({ data }) => {
  return (
    <div className='text-right justify-end'>
      <h2 className='pr-16'>Brand New Groups</h2>
      {data.map((eGroup) => {
        return (
          <div className='container mx-auto' key={eGroup.id}>
            {eGroup.name} - {eGroup.campusName}
          </div>
        )
      })}
    </div>
  )
}
