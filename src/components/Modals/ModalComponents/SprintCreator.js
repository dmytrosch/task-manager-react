import React, { useState, useDispatch } from 'react'
import style from './SprintCreator.module.css'
import Button from '../../../common/Button'

export default function SprintCreator({ onClose }) {
  const [nameTask, setNameTask] = useState('')
  const [scheduledTime, setScheduledTime] = useState('')
  // const dispatch = useDispatch();

  const handlerSubmit = (e) => {
    e.preventDefault()
    setNameTask('')
    setScheduledTime('')
  }

  return (
    <section className={style.container}>
      <h2 className={style.title}>Створення задачі</h2>
      <form onSubmit={handlerSubmit}>
        <input
          className={style.input}
          value={nameTask}
          onChange={(e) => setNameTask(e.target.value)}
          type="text"
          placeholder="Назва задачі"
        />
        <input
          className={style.input}
          value={scheduledTime}
          onChange={(e)=>setScheduledTime(e.target.value)}
          type="number"
          placeholder="Заплановано годин"
        />
        <Button type="submit" shape="oval">
          Готово
        </Button>
      </form>
      <span onClick={onClose} className={style.subtitle}>
        Відміна
      </span>
    </section>
  )
}
