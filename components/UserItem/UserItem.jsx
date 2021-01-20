import React from 'react'
import PropTypes from 'prop-types'
import styles from './UserItem.module.sass'
import Button from '../Button/Button'

const UserItem = ({ user, openUserHandler, openUser }) => (
  <div className={styles.container} onClick={() => openUserHandler(user.id)}>
    <div className={styles.upPart}>
      <p>{`${user.name} ${user.secondName}`}</p>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 6L10 11L15 6L17 7L10 14L3 7L5 6Z" fill="white" />
      </svg>
    </div>
    <div>
      {
        openUser === user.id
          ? (
            <div className={styles.downPart}>
              <div>
                <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M18.5625 1.6875H8.4375C7.98995 1.6875 7.56073 1.86529 7.24426 2.18176C6.92779 2.49822 6.75 2.92745 6.75 3.375V23.625C6.75 24.0726 6.92779 24.5018 7.24426 24.8182C7.56073 25.1347 7.98995 25.3125 8.4375 25.3125H18.5625C19.0101 25.3125 19.4393 25.1347 19.7557 24.8182C20.0722 24.5018 20.25 24.0726 20.25 23.625V3.375C20.25 2.92745 20.0722 2.49822 19.7557 2.18176C19.4393 1.86529 19.0101 1.6875 18.5625 1.6875ZM8.4375 0C7.54239 0 6.68395 0.355579 6.05101 0.988515C5.41808 1.62145 5.0625 2.47989 5.0625 3.375V23.625C5.0625 24.5201 5.41808 25.3785 6.05101 26.0115C6.68395 26.6444 7.54239 27 8.4375 27H18.5625C19.4576 27 20.316 26.6444 20.949 26.0115C21.5819 25.3785 21.9375 24.5201 21.9375 23.625V3.375C21.9375 2.47989 21.5819 1.62145 20.949 0.988515C20.316 0.355579 19.4576 0 18.5625 0L8.4375 0Z" fill="white" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M13.5 23.625C13.9476 23.625 14.3768 23.4472 14.6932 23.1307C15.0097 22.8143 15.1875 22.3851 15.1875 21.9375C15.1875 21.4899 15.0097 21.0607 14.6932 20.7443C14.3768 20.4278 13.9476 20.25 13.5 20.25C13.0524 20.25 12.6232 20.4278 12.3068 20.7443C11.9903 21.0607 11.8125 21.4899 11.8125 21.9375C11.8125 22.3851 11.9903 22.8143 12.3068 23.1307C12.6232 23.4472 13.0524 23.625 13.5 23.625Z" fill="white" />
                </svg>
                <p>{user.Phone}</p>
              </div>
              <div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 8H20C20.2652 8 20.5196 8.10536 20.7071 8.29289C20.8946 8.48043 21 8.73478 21 9V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V9C3 8.73478 3.10536 8.48043 3.29289 8.29289C3.48043 8.10536 3.73478 8 4 8H6V7C6 5.4087 6.63214 3.88258 7.75736 2.75736C8.88258 1.63214 10.4087 1 12 1C13.5913 1 15.1174 1.63214 16.2426 2.75736C17.3679 3.88258 18 5.4087 18 7V8ZM16 8V7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7V8H16ZM11 14V16H13V14H11ZM7 14V16H9V14H7ZM15 14V16H17V14H15Z" fill="white" />
                </svg>
                <p>{ user.Password }</p>
              </div>
              <div className={styles.btnContainer}>
                <Button
                  btnName="Видалити користувача"
                />
              </div>
            </div>
          )
          : null
      }
    </div>
  </div>
)

UserItem.propTypes = {
  user: PropTypes.object,
  openUserHandler: PropTypes.func,
  openUser: PropTypes.number
}

export default UserItem
