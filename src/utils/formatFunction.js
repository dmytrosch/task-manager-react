const monthNameMap = {
  1: "Січ",
  2: "Лют",
  3: "Бер",
  4: "Квіт",
  5: "Трав",
  6: "Черв",
  7: "Лип",
  8: "Серп",
  9: "Вер",
  10: "Жовт",
  11: "Лист",
  12: "Груд",
}

export function formatDate(date) {
  const [year, month, day] = date.split("/");
  const monthName = monthNameMap[month];
  const formatData = `${day} ${monthName}`;
  return formatData;
}
