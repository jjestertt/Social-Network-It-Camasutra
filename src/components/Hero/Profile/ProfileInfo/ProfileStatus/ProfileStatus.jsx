import React from "react";
import style from "../ProfileInfo.module.css";

class ProfileStatus extends React.Component {
    state = {
        inEdit: false,
        status: this.props.userStatus
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.userStatus !== this.props.userStatus){
             this.setState({status: this.props.userStatus})
        }
    }

    setInEdit = () => {
        if (this.state.inEdit) {
            this.setState({inEdit: false});
        } else {
            this.setState({inEdit: true});
        }
    }
    setUserStatusToServer = () => {
        this.props.setUserProfileStatusToServer(this.state.status);
    }
    changeStatusText = (e) => {
        this.setState({status: e.target.value})
    }

    render() {
        return (
            <div> {
                this.state.inEdit && this.props.authUserId === this.props.currentUserId
                    ? <div>
                        <form action="" onSubmit={(e) => {
                                  e.preventDefault();
                                  this.setInEdit();
                                  this.setUserStatusToServer();
                              }}>
                            <input className={style.statusInput} type="text" autoFocus={true}
                                   placeholder='Твой статус'
                                   onChange={(e) => {
                                       this.changeStatusText(e)
                                   }}
                                   value={this.state.status}
                            />
                            <button type={"submit"}>Отправить</button>
                        </form>

                    </div>
                    :
                    <div onClick={this.setInEdit}>
                        <p className={style.statusText}>
                            {
                                !this.props.userStatus
                                    ? 'Нет статуса'
                                    : this.props.userStatus
                            }
                        </p>

                    </div>
            }
            </div>
        );
    }
}

export default ProfileStatus;