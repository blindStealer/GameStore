let Users = ({ users, followToggle, setUsers }) => {

  if(users.length === 0)

    
    
    setUsers([
      { id: 1, photoUrl: 'https://yt3.ggpht.com/VQzovPuSAzlRHw_iLfnRk5Tu_px5z1t7P0CvUOMAftQ7gq0BACCy5Z_pczZicsAooGhNQAEkKw=s900-c-k-c0x00ffffff-no-rj', followed: true, fullName: 'Sasha', status: 'i am a boss too', location: { city: 'Moscow', country: 'Russia' } },
      { id: 2, photoUrl: 'https://yt3.ggpht.com/VQzovPuSAzlRHw_iLfnRk5Tu_px5z1t7P0CvUOMAftQ7gq0BACCy5Z_pczZicsAooGhNQAEkKw=s900-c-k-c0x00ffffff-no-rj', followed: false, fullName: 'Andrew', status: 'i am a boss too!!!', location: { city: 'Kiev', country: 'Ukraine' } },
      { id: 3, photoUrl: 'https://yt3.ggpht.com/VQzovPuSAzlRHw_iLfnRk5Tu_px5z1t7P0CvUOMAftQ7gq0BACCy5Z_pczZicsAooGhNQAEkKw=s900-c-k-c0x00ffffff-no-rj', followed: false, fullName: 'Vita', status: 'i am a boss too!!!', location: { city: 'Arkhangel', country: 'Russia' } },
  ])
  
 
  return (
    <div>
      {users.map((item) => {
        return (
          <div key={item.id}>
            <div>
              <div>
                <img style={{ height: 100 }} src={item.photoUrl} alt='ava' />
              </div>
              <div>
                {item.followed 
                  ?<button onClick={() => followToggle(item.id)}>followed</button>
                  :<button onClick={() => followToggle(item.id)}>unfollowed</button>
                }
              </div>
            </div>

            <div className="wrapperContent">
              <div>
                <h3>{item.fullName}</h3>
                <p>{item.status}</p>
              </div>

              <div>
                <p>{item.location.city}</p>
                <p>{item.location.country}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
