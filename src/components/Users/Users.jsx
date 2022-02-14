import axios from 'axios'
import React from 'react';
import userPhoto from '../../assets/images/user.png'
import s from './Users.module.css'

class Users extends React.Component {

  constructor(props) {
      super(props)
    }


    componentDidMount() {
      axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then(response => {
        this.props.setUsers(response.data.items)
        console.log(response.data.totalCount)
      })
  
    }
    
  


  render() {
    return (
      
      <div>
        <div>
          <span>1</span>
          <span className={s.selectedPage}>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
        </div>
        {this.props.users.map((item) => {
          return (
            <div key={item.id}>
              <div>
                <div>
                  <img style={{ height: 100 }} src={item.photos.small === null ? userPhoto : item.photos.small} alt='ava' />
                </div>
                <div>
                  {item.followed 
                    ?<button onClick={() => this.props.followToggle(item.id)}>followed</button>
                    :<button onClick={() => this.props.followToggle(item.id)}>unfollowed</button>
                  }
                </div>
              </div>
  
              <div className="wrapperContent">
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.status}</p>
                </div>
  
                <div>
                  <p>{'item.location.city'}</p>
                  <p>{'item.location.country'}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }


}


export default Users;
