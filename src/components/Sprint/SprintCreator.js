import React, { useState, useEffect } from 'react'
import style from './SprintCreator.module.css'
import Button from '../../common/Button/index'
import Modal from './SprintModal'
import Portal from '../../common/ModalPortal/ModalPortal'
import { uk } from 'date-fns/locale'
import { DateRangePickerCalendar } from 'react-nice-dates'
import './style.css'
import { START_DATE } from 'react-nice-dates'
import classNames from 'classnames'
import { format } from 'date-fns'
import triangle from '../../assest/icons/triangle.svg'

export default function SprintCreator() {
  const [nameTask, setNameTask] = useState('')
  const [isOn, setIsOn] = useState(false)
  const [day, setDay] = useState('')
  const [isClose, setOn] = useState(false) // hook for opening modal
  const [scheduledTime, setScheduledTime] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [focus, setFocus] = useState(START_DATE)
  const handleFocusChange = (newFocus) => {
    setFocus(newFocus || START_DATE)
  }
  function heandleSubmit() {
    //send data
  }

  function handlerReset(e) {
    e.preventDefault()
    setNameTask('')
    setScheduledTime('')
    setEndDate()
    setStartDate()
  }

  function downHandler({ key }) {
    if (key === 'Escape') {
      setOn(false)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', downHandler)

    return () => {
      window.removeEventListener('keydown', downHandler)
    }
  }, [])

  return (
    <>
      {isClose && (
        <Modal setOn={setOn}>
          <section className={style.container}>
            <p className={style.title}>Створення спринта</p>
            <div className={style.form}>
              <input
                className={style.input}
                defaultValue={nameTask}
                onChange={(e) => setNameTask(e.target.value)}
                type="text"
                placeholder="Назва спринта"
              />
              <div className={style.radioBtnContainer}>
                <button onClick={() => setDay(!day)} className={style.radioBtn}>
                  <p className={style.btnArtibute}></p>
                  {day && <p className={style.btnOvale}></p>}
                </button>

                <p className={style.btnText}>Попередні дні</p>
              </div>

              {day && (
                <div className={style.dateInputContainer}>
                  <div className={style.triangleContainer}>
                    <input
                      className={classNames(style.input, style.dateEndBtn)}
                      defaultValue=""
                      value={
                        startDate
                          ? format(startDate, 'dd MMM', { locale: uk })
                          : ''
                      }
                      type="text"
                      placeholder="Дата закінчення"
                      onClick={() => setIsOn(!isOn)}
                    />
                    <img
                      onClick={() => setIsOn(!isOn)}
                      src={triangle}
                      className={classNames(
                        style.triangle,
                        isOn && style.triangleRot
                      )}
                      alt="triangle"
                    ></img>
                  </div>
                  <input
                    className={classNames(style.input, style.durationBtn)}
                    defaultValue=""
                    value={
                      endDate
                        ? format(endDate - startDate, 'd', { locale: uk })
                        : ''
                    }
                    type="text"
                    placeholder="Тривалість"
                  />
                </div>
              )}
              <Button
                type="submit"
                shape="oval"
                buttonCustomClass={style.addedBtn}
              >
                Готово
              </Button>
              {day && isOn && (
                <div className={style.pickerDateContainer}>
                  <div className={style.dayWeeks}>
                    <p>ПН</p>
                    <p>ВТ</p>
                    <p>СР</p>
                    <p>ЧТ</p>
                    <p>ПН</p>
                    <p>СБ</p>
                    <p>НД</p>
                  </div>

                  <DateRangePickerCalendar
                    startDate={startDate}
                    endDate={endDate}
                    focus={focus}
                    onStartDateChange={setStartDate}
                    onEndDateChange={setEndDate}
                    onFocusChange={handleFocusChange}
                    locale={uk}
                  />
                </div>
              )}
            </div>
            <span onClick={() => setOn(false)} className={style.subtitle}>
              Відміна
            </span>
          </section>
        </Modal>
      )}
    </>
  )
}
