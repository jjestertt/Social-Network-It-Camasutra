import { connect } from "react-redux";
import Friends from './Friends'

const mapStateToProps = (state) => {
   return {
      friends: state.friends.friends
   }
}
const mapDispatchToProps = (dispatch) => {
   return {

   }
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);
export default FriendsContainer;