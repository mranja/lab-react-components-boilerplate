function Data (props) {
  console.log(props)
  const imageData = props.myprop
  return (
      <div>
          {
          imageData.map(image=>{
              return(
              <div key={image.id} className="column">
                  <img src={image.img} alt=""></img>
              </div>
              )
          })
          }
    </div>
  )
}

export default Data