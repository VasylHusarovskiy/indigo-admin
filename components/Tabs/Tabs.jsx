import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styles from './Tabs.module.sass'
import Input from '../Input_line/Input_line'
import Button from '../Button/Button'
import TabItem from '../TabItem/TabItem'

const Tabs = ({ arrValue }) => {
  const [GetTabValues, setGetTabValues] = useState([])
  const [NewTabValue, setNewTabValue] = useState({})
  const [selected, setSelected] = useState([])
  const [Flag, setFlag] = useState(0)

  const getInputTabValue = (e) => {
    setNewTabValue(e.target.value)
  }

  const setCustomTabValue = () => {
    GetTabValues.push(NewTabValue)
    selected.push(NewTabValue)
    setFlag(Flag + 1)
  }

  const addToSelected = (text) => {
    if (selected.includes(text)) {
      const index = selected.indexOf(text)
      if (index > -1) {
        selected.splice(index, 1)
        setFlag(Flag + 1)
      }
    } else {
      selected.push(text)
      setFlag(Flag + 1)
    }
  }

  useEffect(() => {
    setGetTabValues(arrValue)
  }, [])

  useEffect(() => {
    setSelected(selected)
    console.log(selected)
  }, [Flag])
  return (
    <div>
      <div className={styles.tabsContainer}>
        {
            GetTabValues.map((item, key) => (
              <TabItem
                key={key}
                text={item}
                active={!!selected.includes(item)}
                clickHandler={(text) => addToSelected(text)}
              />
            ))
        }

      </div>
      <div className={styles.tabsInputContainer}>
        <Input
          placeholder="Введіть ваше значення"
          inputName="tabsTypeOfWork"
          inputType="text"
          changeHandler={(e) => getInputTabValue(e)}
        />
        <Button
          btnName="Додати значення"
          btnHandler={() => setCustomTabValue()}
        />
      </div>
      <div className={styles.selected}>
        <p>Обрано</p>
      </div>
    </div>
  )
}

Tabs.propTypes = {
  arrValue: PropTypes.array
}

export default Tabs
