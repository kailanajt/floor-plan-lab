function Bedroom (props) {
  return (
    <>
      <div className="bedroom" id={`bed-${props.bedNum}`}>
        <div className="room-title">Bedroom {props.bedNum}</div>
      </div>
    </>
  )
}

export default Bedroom