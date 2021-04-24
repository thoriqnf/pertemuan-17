import React from 'react'
import { useParams } from 'react-router-dom'

const About = () => {
  const { id } = useParams();
  return (
    <div>
      ini adalah halaman {id}
    </div>
  )
}

export default About;
