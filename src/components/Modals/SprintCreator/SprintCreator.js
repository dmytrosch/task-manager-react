import React, { useState } from "react";
import style from "./SprintCreator.module.css";
import Button from "../../../common/Button/Button";
import { uk } from "date-fns/locale";
import { DateRangePickerCalendar } from "react-nice-dates";
import "./style.css";
import { START_DATE } from "react-nice-dates";
import classNames from "classnames";
import { format } from "date-fns";
import triangle from "../../../assest/icons/triangle.svg";
import { useDispatch, useSelector } from "react-redux";

import { createSprint } from "../../../redux/sprints/sprintsOperations";
import { isModalCreateSprint } from "../../../redux/modal/modalSelectors";

export default function SprintCreator({ onClose }) {
  const dispatch = useDispatch();
  const [sprintName, setSprintName] = useState("");
  const [isOn, setIsOn] = useState(false);
  const projectId = useSelector(isModalCreateSprint);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [focus, setFocus] = useState(START_DATE);
  const handleFocusChange = (newFocus) => {
    setFocus(newFocus || START_DATE);
  };

  const transformDate = (date) => {
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var year = date.getFullYear();
    const newDate = year + "/" + month + "/" + day;
    return newDate;
  };

  const heandleSubmit = (e) => {
    e.preventDefault();
    const newSprint = {
      name: sprintName,
      startAt: transformDate(startDate),
      finishedAt: transformDate(endDate),
    };
    dispatch(createSprint(projectId, newSprint));
    onClose();
  };

  return (
    <>
      <section className={style.container}>
        <form className={style.form} onSubmit={heandleSubmit}>
          <p className={style.title}>Створення спринта</p>
          <input
            className={style.input}
            defaultValue={sprintName}
            onChange={(e) => setSprintName(e.target.value)}
            type="text"
            placeholder="Назва спринта"
            required
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
              value={
                endDate ? format(endDate - startDate, "d", { locale: uk }) : ""
              }
              type="text"
              placeholder="Тривалість"
              required
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
        </form>
      </section>
    </>
  );
}
