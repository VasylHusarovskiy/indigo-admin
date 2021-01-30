import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import Select from 'react-select'
import AlgoliaPlaces from 'algolia-places-react'
import styles from '../styles/addproject.module.sass'
import FormLogoContainer from '../components/FormLogoContainer/FormLogoContainer'
import FormName from '../components/FormName/FormName'
import Input from '../components/Input_line/Input_line'
import Button from '../components/Button/Button'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' }
]

const addproject = (props) => {
  const [NewInputValue, setNewInputValue] = useState(null)
  const handleChange = (e) => {
    setNewInputValue(e)
    console.log(e)
  }
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <FormLogoContainer />
        <FormName
          Name="Сергій"
        />

        <Select
          value={NewInputValue}
          onChange={(e) => handleChange(e)}
          options={options}
          isClearable
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
        />
        <Input
          placeholder="Номер клієнта"
          inputName="namber"
        />
        <AlgoliaPlaces
          placeholder="Введіть адресу"
          options={{
            appId: 'plXRY806GKQ7',
            apiKey: '9d6f8ba03176acf389564330409356ba',
            language: 'ua',
            countries: ['ua'],
            type: 'address',
            hit: {
                city: ['Івано-Франківськ']
            },
            accessibility: {
                pinButton: {
                  'aria-label': 'use browser geolocation',
                  'tab-index': 12,
                },
                clearButton: {
                  'tab-index': 13,
                }
              },
            templates: {
              suggestion: function(suggestion) {
                  console.log(suggestion)
                return `<div class="searchItem">${suggestion.city} ${suggestion.name}</div>`
              }
            }
            // Other options from https://community.algolia.com/places/documentation.html#options
          }}

          onChange={({
            query, rawAnswer, suggestion, suggestionIndex
          }) => console.log('Fired when suggestion selected in the dropdown or hint was validated.')}

          onSuggestions={({ rawAnswer, query, suggestions }) => console.log('Fired when dropdown receives suggestions. You will receive the array of suggestions that are displayed.')}

          onCursorChanged={({
            rawAnswer, query, suggestion, suggestonIndex
          }) => console.log('Fired when arrows keys are used to navigate suggestions.')}

          onClear={() => console.log('Fired when the input is cleared.')}

          onLimit={({ message }) => console.log('Fired when you reached your current rate limit.')}

          onError={({ message }) => console.log('Fired when we could not make the request to Algolia Places servers for any reason but reaching your rate limit.')}
        />
        <div className={styles.TagCloud}>
          <p>Оберіть тип робіт</p>

        </div>
        <Button
          btnName="Додати"
        />
      </div>
    </div>
  )
}
export default addproject
