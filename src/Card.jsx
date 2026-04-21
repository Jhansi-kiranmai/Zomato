import React from "react"


export class Card extends React.Component{
  constructor(props){
    super(props)
  console.log(props)
}
    render(){
    return(<div style={{border:"1px solid black",padding:"32px 16px",width:"250px",backgroundColor:"lightpink",height:"300px",borderRadius:"10px"}}>
      <img  style={{width:"150px"}} src= {this.props.image_url}/>
      <h1>{this.props.title}</h1>
      <p>Get the app now to start ordering your favorite dishes !</p>
    </div>)
}
}
export default Card