import Kitchen from "./Kitchen"
import LivingRoom from "./LivingRoom"
import Bedroom from "./Bedroom"
import Bath from "./Bath"

function FloorPlan (props) {
  return (
    <>
        <div className=''>
          <LivingRoom />
          <Bath size={'Half'} />
        </div>
        <div className="first">
          <Bedroom bedNum={1} />
          <Bath size={'Full'} />
        </div>
        <div className="second">
          <Bedroom bedNum={2} />
        </div>
        <div className="kitchen">
          <Kitchen />
        </div>
        <div className="third">
          <Bedroom bedNum={3} />
      </div>
    </>
  )
}

export default FloorPlan