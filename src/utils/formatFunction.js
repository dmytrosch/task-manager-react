export function formatDate(date) {
  const [year, month, day] = date.split("/");
  let monthName;
  switch (month) {
    case "1":
      monthName = "Січ";
      break;
    case "2":
      monthName = "Лют";
      break;
    case "3":
      monthName = "Бер";
      break;
    case "4":
      monthName = "Квіт";
      break;
    case "5":
      monthName = "Трав";
      break;
    case "6":
      monthName = "Черв";
      break;
    case "7":
      monthName = "Лип";
      break;
    case "8":
      monthName = "Серп";
      break;
    case "9":
      monthName = "Вер";
      break;
    case "10":
      monthName = "Жовт";
      break;
    case "11":
      monthName = "Лист";
      break;
    case "12":
      monthName = "Груд";
      break;
    default:
      monthName = "";
  }
  const formatData = `${day} ${monthName}`;
  return formatData;
}
