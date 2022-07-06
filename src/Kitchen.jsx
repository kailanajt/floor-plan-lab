import Oven from "./Oven"
import Sink from "./Sink"

function Kitchen (props) {
  return (
    <>
      <div className="kitchen-title">
        <div className="room-title">Kitchen</div>
        <div className="oven-sink">
          <Oven />
          <Sink />
        </div>
      </div>
    </>
  )
}

export default Kitchen