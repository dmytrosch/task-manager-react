import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSprint } from "../../../../redux/sprints/sprintsOperations";
import { currentProjectId } from "../../../../redux/modal/modalSelectors";
import style from "./SprintCreator.module.css";
import Button from "../../../../common/Button/Button";
import { uk } from "date-fns/locale";
import { DateRangePickerCalendar } from "react-nice-dates";
import "./style.css";
import { START_DATE } from "react-nice-dates";
import classNames from "classnames";
import { format } from "date-fns";
import triangle from "../../../../assest/icons/triangle.svg";
import Input from "../../../../common/Input/Input";

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
  function time(startDate, endDate) {
    return (
      Math.round((new Date(endDate) - new Date(startDate)) / 1000 / 3600 / 24) +
      1
    );
  }
  const projectId = useSelector(currentProjectId);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (errorLengthSprint) return;
    dispatch(
      createSprint(projectId, {
        name: nameSprint,
        startAt: format(startDate, "yyyy/MM/dd", { locale: uk }),
        finishedAt: format(endDate, "yyyy/MM/dd", { locale: uk }),
      })
    );
    onClose();
  };

  const handlerNameSprint = (e) => {
    setNameSprint(e.target.value);
    if (e.target.value.length > 50) {
      return setErrorLengthSprint("Максимальна кількість символів 50");
    }
    setErrorLengthSprint(null);
  };

  return (
    <section
      className={style.container}
      onClick={() => {
        isOn && startDate && !endDate && setIsOn(false);
      }}
    >
      <div className={style.form}>
        <p className={style.title}>Створення спринта</p>
        <form onSubmit={submitHandler}>
          <div className={style.inputSprintContainer}>
            <Input
              onChange={handlerNameSprint}
              type="text"
              error={errorLengthSprint}
              errorMessage={errorLengthSprint}
              label="Назва спрінта"
              value={nameSprint}
              required
            />
          </div>

          <div className={style.dateInputContainer}>
            <div className={style.triangleContainer}>
              <input
                className={classNames(style.input, style.dateEndBtn)}
                defaultValue=""
                value={
                  startDate &&
                  endDate &&
                  `${format(startDate, "dd.MM", {
                    locale: uk,
                  })} - ${format(endDate, "dd.MM", { locale: uk })}`
                }
                type="text"
                placeholder="Оберіть дати"
                onClick={() => setIsOn(!isOn)}
                required
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
              value={endDate && time(startDate, endDate)}
              type="text"
              placeholder="Тривалість"
              required
            />
          </div>

          <Button type="submit" shape="oval" buttonCustomClass={style.addedBtn}>
            Готово
          </Button>
        </form>
        {isOn && (
          <div className={classNames(style.pickerDateContainer)}>
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
              onStartDateChange={(value) => {
                setStartDate(value);
                setEndDate(null)
              }}
              onEndDateChange={(value) => {
                setEndDate(value);
                setIsOn(!isOn);
              }}
              onFocusChange={handleFocusChange}
              locale={uk}
            />
          </div>
        )}
        <span onClick={onClose} className={style.subtitle}>
        Скасувати
        </span>
      </div>
    </section>
  );
}
