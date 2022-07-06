function Bath (props) {
  return (
    <>
      <div id={`bath-${props.size}`}>
        <div>{props.size} Bath</div>
      </div>
    </>
  )
}

export default Bath