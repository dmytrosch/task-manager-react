import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import style from './style.module.css'
import Button from '../../common/Button'

import { login } from '../../redux/auth/authOperations'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const handlerSubmit = (e) => {
    e.preventDefault()
    dispatch(login({ email, password }))
    setEmail('')
    setPassword('')
  }
  return (
    <section className={style.container}>
      <div className={style.formContainer}>
        <p className={style.title}>Вхід</p>
        <form className={style.form} onSubmit={handlerSubmit}>
          <input
            className={style.input}
            placeholder="E-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className={style.input}
            placeholder="Пароль"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button shape="oval" type="submit">
            Увійти
          </Button>
        </form>
        <p className={style.subtitle}>
          Немає акаунту?&nbsp;
          <NavLink to="/signup" className={style.NavLink}>
            Зареєструватись
          </NavLink>
        </p>
      </div>
    </section>
  )
}
