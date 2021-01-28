import React,{useState} from 'react'
import PropTypes from 'prop-types'
import styles from '../styles/addproject.module.sass'
import FormLogoContainer from '../components/FormLogoContainer/FormLogoContainer'
import Select from 'react-select';
import FormName from '../components/FormName/FormName'
import Input_line from '../components/Input_line/Input_line'
import { TagCloud } from 'react-tagcloud'

const addproject = () => {
    const [selectedOption, setSelectedOption] = useState(null)
    const options = [
        { value: 'number', label: '0961827301' },
        { value: 'number', label: '0973506735' },
        
      ];
       const handleChange = selectedOption => {
        setSelectedOption({ selectedOption });
        console.log(`Option selected:`, selectedOption);
      };
      const data = [
        { value: 'JavaScript', count: 16 },
        { value: 'React', count: 16 },
        { value: 'Nodejs', count: 16  },
        { value: 'Express.js', count: 16  },
        
      ]  
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <FormLogoContainer />
                <FormName
                    Name="Сергій" />
                <Select
                    placeholder={'Оберіть номер'}
                    value={selectedOption}
                    onChange={handleChange}
                    options={options}
                    className={styles.textInp}
                />
                <Input_line 
                    placeholder="Ім'я клієнта"
                    inputName="firstName"
                />
                <Input_line 
                    placeholder="Номер клієнта"
                    inputName="namber"
                />
                <div className={styles.TagCloud}>
                    <p>Оберіть тип робіт</p>
                    <TagCloud 
                        minSize={12}
                        maxSize={35}
                        tags={data}
                        onClick={tag => alert(`'${tag.value}' was selected!`)}
                    />
                </div>
            </div>

        </div>

    )
}
export default addproject
