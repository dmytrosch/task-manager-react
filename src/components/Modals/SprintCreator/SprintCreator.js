import React, { useState, useEffect } from "react";
import style from "./SprintCreator.module.css";
import Button from "../../../common/Button/Button";
import { uk } from "date-fns/locale";
import { DateRangePickerCalendar } from "react-nice-dates";
import "./style.css";
import { START_DATE } from "react-nice-dates";
import classNames from "classnames";
import { format } from "date-fns";
import triangle from "../../../assest/icons/triangle.svg";
import Input from "../../../common/Input/Input";

export default function SprintCreator({ onClose }) {
  const [nameSprint, setNameSprint] = useState("");
  const [isOn, setIsOn] = useState(false);
  const [isClose, setOn] = useState(false); // hook for opening modal
  const [scheduledTime, setScheduledTime] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [focus, setFocus] = useState(START_DATE);
  const [errorLengthSprint, setErrorLengthSprint] = useState("");

  const handleFocusChange = (newFocus) => {
    setFocus(newFocus || START_DATE);
  };
  function heandleSubmit(e) {
    e.preventDefault();
    if (errorLengthSprint) return;
  }

  function handlerReset(e) {
    e.preventDefault();
    setNameSprint("");
    setScheduledTime("");
    setEndDate();
    setStartDate();
  }
  const handlerNameSprint = (e) => {
    setNameSprint(e.target.value);
    if (e.target.value.length > 50) {
      return setErrorLengthSprint("Максимальна кількість символів 50");
    }
    setErrorLengthSprint(null);
  };
  return (
    <>
      <section className={style.container}>
        <div className={style.form}>
          <p className={style.title}>Створення спринта</p>
          <div className={style.inputSprintContainer}>
            <Input
              onChange={handlerNameSprint}
              type="text"
              error={errorLengthSprint}
              errorMessage={errorLengthSprint}
              inputClassNames={style.inputSprint}
              label="Назва спрінта"
              value={nameSprint}
            />
          </div>

          <div className={style.dateInputContainer}>
            <div className={style.triangleContainer}>
              <input
                className={classNames(style.input, style.dateEndBtn)}
                defaultValue=""
                value={
                  startDate ? format(startDate, "dd MMM", { locale: uk }) : ""
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
                endDate ? format(endDate - startDate, "d", { locale: uk }) : ""
              }
              type="text"
              placeholder="Тривалість"
            />
          </div>

          <Button type="submit" shape="oval" buttonCustomClass={style.addedBtn}>
            Готово
          </Button>
          {isOn && (
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
          <span onClick={onClose} className={style.subtitle}>
            Відміна
          </span>
        </div>
      </section>
    </>
  );
}
