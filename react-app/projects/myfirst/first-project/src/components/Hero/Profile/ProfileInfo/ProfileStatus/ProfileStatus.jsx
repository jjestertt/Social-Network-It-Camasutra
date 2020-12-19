import React from "react";
import style from "../ProfileInfo.module.css";

class ProfileStatus extends React.Component {
    state = {
        inEdit: false,
    }
    setInEdit = () => {
        if (this.state.inEdit) {
            this.setState({inEdit: false});
        } else {
            this.setState({inEdit: true});
        }
    }

    render() {
        return (
            <div> {
                this.state.inEdit
                    ? <div>
                        <form action="" onSubmit={(e) => {
                            e.preventDefault();
                            this.setInEdit();
                        }}>
                            <input className={style.statusInput} type="text" value={this.props.userProfileStatus}
                                   placeholder='Твой статус'
                                   onChange={(e) => {
                                       this.props.setUserProfileStatus(e.target.value);
                                   }}
                                   autoFocus={true}
                                   onBlur={this.setInEdit}
                            />
                        </form>
                    </div>
                    :
                    <div onDoubleClick={this.setInEdit}><p
                        className={style.statusText}>{
                        this.props.userProfileStatus.length <= 0
                            ? 'Введите статус'
                            : this.props.userProfileStatus
                    }
                    </p></div>
            }
            </div>
        );
    }
}

export default ProfileStatus;