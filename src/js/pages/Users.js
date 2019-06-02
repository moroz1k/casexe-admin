import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

const Item = ({ item }) => (
  <div className="users-list-item">
    <div className="users-list-item-photo" style={{ backgroundImage: `url('${item.picture.thumbnail}'` }}/>
    <div className="users-list-item-login">{item.login.username}</div>
    <div className="users-list-item-login">
      <a href={'mailto:' + item.email}>{item.email}</a>
    </div>
  </div>
)

const Users = ({
  fetchList,
  users
}) => {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!users.isLoaded) {
      setIsLoading(true)
      fetchList()
        .finally(() => setIsLoading(false))
    }
    // eslint-disable-next-line
  }, [])

  const Items = users.list.map((item) => <Item item={item} key={item.login.uuid}/>)

  return (
    <div className="users">
      <h1>Пользователи</h1>

      <div className="users-list">
        {isLoading ? <span>Загрузка..</span> : Items}
      </div>
    </div>
  )
}

const mapState = ({ users }) => ({
  users
})

const mapDispatch = ({ users: { fetchList } }) => ({
  fetchList
})

export default connect(mapState, mapDispatch)(Users)
