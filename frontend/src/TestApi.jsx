// @ts-nocheck
import axios from 'axios'
import React, { useEffect, useState } from 'react'

/* eslint-disable no-console */
function Text() {

  const customStyles = {
    width: '70px',
    height: '70px',
    padding: '0.3rem',
    borderRadius: '50%'
  }

  const [mydata, setData] = useState(null)

  useEffect(() => {
    const config = {
      method: 'get',
      url: 'https://api.github.com/repos/IT-Academy-BCN/ita-directory/contributors',
      headers: {
        Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}` || '',
      },
    }
    axios(config)
      .then(({ data }) => setData(data))
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div>
      <ul>
        {mydata?.map((/** @type {{ id: React.Key | null | undefined; avatar_url: string | undefined; login: string | undefined; }} */ d) => (
          <img key={d.id} src={d.avatar_url} alt={d.login} style={customStyles} />
        ))}
      </ul>
    </div>
  )
}

export default Text
