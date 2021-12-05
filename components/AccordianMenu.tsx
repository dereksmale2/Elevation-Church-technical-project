export const AccordianMenu = () => {
  return (
    <div className='accordion'>
      <div className='accordion-item bg-white border border-gray-200'>
        <h2 className='accordion-header mb-0'>
          <button
            className='
          accordion-button
          relative
          flex
          items-center
          w-full
          py-4
          px-5
          text-base text-gray-800 text-left
          bg-white
          border-0
          rounded-none
          transition
          focus:outline-none
        '
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#collapseOne'
            aria-expanded='true'
            aria-controls='collapseOne'
          >
            Accordion Item #1
          </button>
        </h2>
        <div
          className='accordion-collapse collapse show'
          aria-labelledby='headingOne'
        >
          <div className='accordion-body py-4 px-5'>1</div>
        </div>
      </div>
      <div className='accordion-item bg-white border border-gray-200'>
        <h2 className='accordion-header mb-0'>
          <button
            className='
          accordion-button
          collapsed
          relative
          flex
          items-center
          w-full
          py-4
          px-5
          text-base text-gray-800 text-left
          bg-white
          border-0
          rounded-none
          transition
          focus:outline-none
        '
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#collapseTwo'
            aria-expanded='false'
            aria-controls='collapseTwo'
          >
            Accordion Item #2
          </button>
        </h2>
        <div
          className='accordion-collapse collapse'
          aria-labelledby='headingTwo'
        >
          <div className='accordion-body py-4 px-5'>2</div>
        </div>
      </div>
      <div className='accordion-item bg-white border border-gray-200'>
        <h2 className='accordion-header mb-0' id='headingThree'>
          <button
            className='
          accordion-button
          collapsed
          relative
          flex
          items-center
          w-full
          py-4
          px-5
          text-base text-gray-800 text-left
          bg-white
          border-0
          rounded-none
          transition
          focus:outline-none
        '
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#collapseThree'
            aria-expanded='false'
            aria-controls='collapseThree'
          >
            Accordion Item #3
          </button>
        </h2>
        <div
          className='accordion-collapse collapse'
          aria-labelledby='headingThree'
        >
          <div className='accordion-body py-4 px-5'>3</div>
        </div>
      </div>
    </div>
  )
}
