import React, { useEffect } from 'react'
import styles from './editProject.module.sass'

const editProject = ({ newData }) => {
  useEffect(() => {
    console.log(newData)
  }, [])
  return (
    <div className={styles.editProject}>
      {
        newData
            ? <div className={styles.currentProject}>
                
            </div>
            : <p>Такого проекту не існує</p>
      }
    </div>
  )
}

export async function getServerSideProps({ params }) {
  const res = await fetch('https://admin-panel-fce34-default-rtdb.firebaseio.com/projects/.json')
  const dataDB = await res.json()
  const newData = dataDB.filter((item) => item.id === params.slug)
  if (newData.length) {
    return { props: { newData } }
  }
  return { props: { value: null } }
}

export default editProject
