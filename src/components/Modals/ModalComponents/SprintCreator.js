import React, {useDispatch} from 'react'
import style from './SprintCreator.module.css'
import Button from '../../../common/Button'

export default function SprintCreator({ onClose }) {
  const dispatch = useDispatch
  return (
    <section className={style.container}>
      <h2 className={style.title}>Створення задачі</h2>
      <form>
        <input className={style.input} placeholder="Назва задачі" />
        <input className={style.input} placeholder="Заплановано годин" />
        <Button onClick={dispatch} shape="oval">Готово</Button>
      </form>
      <span onClick={onClose} className={style.subtitle}>
        Відміна
      </span>
    </section>
  )
}
