import Kitchen from "./Kitchen"
import LivingRoom from "./LivingRoom"
import Bedroom from "./Bedroom"
import Bath from "./Bath"

function FloorPlan (props) {
  return (
    <>
      <div className ='LivingRoom'>
      <LivingRoom />
      <Bath size={'Half'} />
      </div>
      <div className = 'MasterBed'>
      <Bedroom bedNum={1} />
      <Bath size={'Full'} />
      </div>
      <Bedroom bedNum={2} />
      <Kitchen />
      <Bedroom bedNum={3} />
    </>
  )
}

export default FloorPlan