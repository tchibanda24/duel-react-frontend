import React from 'react'
import PropTypes from 'prop-types'

import Wrapper from './Wrapper'
import Username from './Username'
import Stat from './Stat'


const checkNull = val => val !== null ? val : undefined

const ResultCard = ({ user }) => (
  <Wrapper>
    <Username>{checkNull(user.username)}</Username>
    <span>{checkNull(user.name)}</span>
    <span>{checkNull(user.location)}</span>
    <span>{checkNull(user.email)}</span>
    <span>{checkNull(user.bio)}</span>
    <img src={checkNull(user.avatar_url)} alt="The user's profile from GitHub"/>
    <div>
      <Stat
        label='Titles:'
        value={checkNull(user.titles)
          .toString()
          .replace(/,/g, ', ')}
      />
      <Stat
        label='Favorite Language:'
        value={checkNull(user['favorite-language'])}
      />
      <Stat label='Total Stars:' value={checkNull(user['total-stars'])}/>
      <Stat
        label='Highest Star Count:'
        value={checkNull(user['highest-starred'])}
      />
      <Stat label='Public Repos:' value={checkNull(user['public-repos'])}/>
      <Stat label='Perfect Repos:' value={checkNull(user['perfect-repos'])}/>
      <Stat label='Followers:' value={checkNull(user['followers'])}/>
      <Stat label='Following:' value={checkNull(user['following'])}/>
    </div>
  </Wrapper>
)

ResultCard.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    name: PropTypes.string,
    location: PropTypes.string,
    email: PropTypes.string,
    bio: PropTypes.string,
    avatar_url: PropTypes.string,
    titles: PropTypes.arrayOf(PropTypes.oneOf([
      'Forker',
      'One-Trick Pony',
      'Jack of all Trades',
      'Stalker',
      'Mr. Popular'
    ])),
    'favorite-language': PropTypes.string,
    'total-stars': PropTypes.number,
    'highest-starred': PropTypes.number,
    'public-repos': PropTypes.number,
    'perfect-repos': PropTypes.number,
    'followers': PropTypes.number,
    'following': PropTypes.number
  })
}

export default ResultCard
