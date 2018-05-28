import React from 'react'
import { connect } from 'react-redux'
import { clickMain, fetchUser } from '../../actions'


export class Play extends React.Component{

  handleMainClick(){
    // console.log('screen clicked!'); 
    this.props.dispatch(clickMain());   
  }

  componentDidMount(){
    this.props.dispatch(fetchUser())
  }


render(){

  let user = this.props.currentUser.map((user,i) => <li key={i}>userName: {user.userName} <br/> cash: $ {user.currentCash.toLocaleString('en')}</li>)
  return(
    <div className='playScreen-container' onClick={() => this.handleMainClick()}>
    
    <ul>
      {user}
    </ul>


    </div>
  )
}
}




const mapStateToProps = state => ({
  menuState: state.mainReducer.menuState,
  signedIn: state.mainReducer.signedIn,
  currentUser: state.mainReducer.currentUser
})

export default connect(mapStateToProps)(Play);








// let introScreen;
// if(!this.props.signedIn){
//   introScreen = (
//     <div>
//       <Intro/>
//     </div>
//   )
// }