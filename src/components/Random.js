import React, {useState, useEffect} from 'react'

const url = 'https://api.github.com/users';

const useEffectSecondArgument = () => {

  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
  };
  
  useEffect(() => {
    getUsers();
  }, []);
  
  return (
    <>
      <h3>Github Users</h3>
      <ul className="wrapper">
        {users.map((user) => {
          const {id, login, avatar_url, html_url} = user;
          return(
            <li key={id} className="item">
              <img src={avatar_url} alt={login} className="img-size"/>
              <div>
                <h4>{login}</h4>
                <a href={html_url}>Profile</a>
              </div>
            </li>

          )
        })}
      </ul>
    </>
  )
}

export default useEffectSecondArgument


