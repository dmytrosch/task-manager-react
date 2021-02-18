import React, { useState, useDispatch } from 'react'
import style from './ProjectCreator.module.css'
import Button from '../../../common/Button'

export default function ProjectCreator({ onClose }) {
  const [nameProject, setNameProject] = useState('')
  const [description , setDescription ] = useState('')
  // const dispatch = useDispatch();

  const handlerSubmit = (e) => {
    e.preventDefault()
    setNameProject('')
    setDescription('')
  }

  return (
    <section className={style.container}>
      <h2 className={style.title}>Створення проекту</h2>
      <form onSubmit={handlerSubmit}>
        <input
          className={style.input}
          value={nameProject}
          onChange={(e) => setNameProject(e.target.value)}
          type="text"
          placeholder="Назва проекту"
        />
        <textarea
        
          className={style.input}
          value={description}
          onChange={(e)=>setDescription(e.target.value)}
          type="text"
          placeholder="Опис"
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
