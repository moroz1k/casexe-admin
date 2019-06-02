import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

const Profile = ({
  fetchProfile,
  profile
}) => {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!profile.isLoaded) {
      setIsLoading(true)
      fetchProfile()
        .finally(() => setIsLoading(false))
    }
    // eslint-disable-next-line
  }, [])

  return (
    <div className="profile">
      <h1>Профиль</h1>

      {isLoading ? <span>Загрузка..</span>
        : profile.isLoaded && (
          <div className="profile-info">
            <div className="profile-info-photo"
              style={{ backgroundImage: `url('${profile.profile.picture.medium}'` }}/>
            <div className="profile-info-username">
              <h2>{profile.profile.login.username}</h2>
            </div>
            <div className="profile-info-email">
              <a href={'mailto:' + profile.profile.email}>{profile.profile.email}</a>
            </div>
          </div>
        )}
    </div>
  )
}

const mapState = ({ profile }) => ({
  profile
})

const mapDispatch = ({ profile: { fetchProfile } }) => ({
  fetchProfile
})

export default connect(mapState, mapDispatch)(Profile)
