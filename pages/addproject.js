import React, { useState, useEffect } from 'react'
// import PropTypes from 'prop-types'
import Select from 'react-select'
import styles from '../styles/addproject.module.sass'
import FormLogoContainer from '../components/FormLogoContainer/FormLogoContainer'
import FormName from '../components/FormName/FormName'
import Input from '../components/Input_line/Input_line'
import Button from '../components/Button/Button'
import Tabs from '../components/Tabs/Tabs'

const addproject = () => {
  const [NewInputValue, setNewInputValue] = useState(null)
  const [CurrentUser, setCurrentUser] = useState(null)
  const [UserPhones, setUserPhones] = useState(null)
  const [GetGeoLocation, setGetGeoLocation] = useState(null)
  const tabsAble = [
    'Обробка хімією', 'Висушування стін', 'Висушування підлоги',
    'Гідроізоляція', 'Опалення', 'Вологість', 'Витяжка'
  ]
  const geoLocations = [{
    value: 'Івано-Франківськ',
    label: 'Івано-Франківськ'
  },
  {
    value: 'Київ',
    label: 'Київ'
  }]

  const handleChange = (e) => {
    setNewInputValue(e)
  }

  const getCreatorName = async () => {
    const response = await fetch(`${window.location.origin}/api/getCurrentUser`, {
      method: 'POST',
      body: JSON.stringify(localStorage.getItem('iea')),
      headers: {
        'Content-Type': 'application/json'
      },
      cors: 'no-cors'
    })
    const result = await response.json()
    setCurrentUser(result[0])
    setUserPhones([{
      value: result[0].Phone,
      label: result[0].Phone
    },
    {
      value: result[0]?.Phone2,
      label: result[0]?.Phone2
    }])
  }

  useEffect(() => {
    getCreatorName()
    console.log(GetGeoLocation)
  }, [GetGeoLocation])

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <FormLogoContainer />
        <FormName
          Name={CurrentUser ? CurrentUser.Name : null}
        />

        <Select
          value={NewInputValue}
          onChange={(e) => handleChange(e)}
          options={UserPhones}
          isClearable
          placeholder="Номер на який дзвонили"
          instanceId={1}
          className={styles.selectNumber}
          theme={(theme) => ({
            ...theme,
            borderColor: 'transparent',
            colors: {
              ...theme.colors,
              primary: '#f05c5c',
              primary75: 'transparent',
              primary25: 'rgba(255,0,0,.3)',
              neutral0: 'black',
              neutral80: '#e63c3c'
            }
          })}
        />

        <Input
          placeholder="Ім'я клієнта"
          inputName="firstName"
          inputType="text"

        />
        <Input
          placeholder="Номер клієнта"
          inputName="namber"
          inputType="tel"

        />
        <Select
          value={GetGeoLocation}
          onChange={(e) => setGetGeoLocation(e)}
          options={geoLocations}
          isClearable
          placeholder="Оберіть місто"
          instanceId={2}
          className={styles.selectNumber}
          theme={(theme) => ({
            ...theme,
            borderColor: 'transparent',
            colors: {
              ...theme.colors,
              primary: '#f05c5c',
              primary75: 'transparent',
              primary25: 'rgba(255,0,0,.3)',
              neutral0: 'black',
              neutral80: '#e63c3c'
            }
          })}
        />
        <Input
          placeholder="Адреса"
          inputName="address"
          inputType="text"
        />
        <div className={styles.TagCloud}>
          <p>Оберіть тип робіт</p>
          <Tabs
            arrValue={tabsAble}
          />
        </div>
        <Button
          btnName="Додати"
        />
      </div>
    </div>
  )
}
export default addproject
