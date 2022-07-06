function Bedroom (props) {
  return (
    <>
      <div id={`bed-${props.bedNum}`}>
        <div>Bedroom {props.bedNum}</div>
      </div>
    </>
  )
}

export default Bedroom