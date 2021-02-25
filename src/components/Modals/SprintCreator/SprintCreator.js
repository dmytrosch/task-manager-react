import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSprint } from "../../../redux/sprints/sprintsOperations";
import { currentProjectId } from "../../../redux/modal/modalSelectors";
import style from "./SprintCreator.module.css";
import Button from "../../../common/Button/Button";
import { uk } from "date-fns/locale";
import { DateRangePickerCalendar } from "react-nice-dates";
import "./style.css";
import { START_DATE } from "react-nice-dates";
import classNames from "classnames";
import { format } from "date-fns";
import triangle from "../../../assest/icons/triangle.svg";

export default function SprintCreator({ onClose }) {
  const [nameTask, setNameTask] = useState("");
  const [isOn, setIsOn] = useState(false);
  const [isClose, setOn] = useState(false); // hook for opening modal
  const [scheduledTime, setScheduledTime] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [focus, setFocus] = useState(START_DATE);
  const handleFocusChange = (newFocus) => {
    setFocus(newFocus || START_DATE);
  };
  const projectId = useSelector(currentProjectId);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createSprint(projectId, {
        name: nameTask,
        startAt: format(startDate, "yyyy.MM.dd", { locale: uk }),
        finishedAt: format(endDate, "yyyy.MM.dd", { locale: uk }),
      })
    );
    setNameTask("");
    //send data
  };

  function handlerReset(e) {
    e.preventDefault();
    setNameTask("");
    setScheduledTime("");
    setEndDate();
    setStartDate();
  }

  return (
    <>
      <section className={style.container}>
        <div className={style.form}>
          <p className={style.title}>Створення спринта</p>
          <form onSubmit={submitHandler}>
            <input
              className={style.input}
              defaultValue={nameTask}
              onChange={(e) => setNameTask(e.target.value)}
              type="text"
              placeholder="Назва спринта"
            />

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
                  endDate
                    ? format(endDate - startDate, "d", { locale: uk })
                    : ""
                }
                type="text"
                placeholder="Тривалість"
              />
            </div>

            <Button
              type="submit"
              shape="oval"
              buttonCustomClass={style.addedBtn}
            >
              Готово
            </Button>
          </form>
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
