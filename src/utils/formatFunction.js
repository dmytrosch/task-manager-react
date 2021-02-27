export function formatDate(date) {
  const [year, month, day] = date.split("/");
  let textMonth;
  // let monthName = "";
  switch (month) {
    case "1":
      textMonth = "Січ";
      break;
    case "2":
      textMonth = "Лют";
      break;
    case "3":
      textMonth = "Бер";
      break;
    case "4":
      textMonth = "Квіт";
      break;
    case "5":
      textMonth = "Трав";
      break;
    case "6":
      textMonth = "Черв";
      break;
    case "7":
      textMonth = "Лип";
      break;
    case "8":
      textMonth = "Серп";
      break;
    case "9":
      textMonth = "Вер";
      break;
    case "10":
      textMonth = "Жовт";
      break;
    case "11":
      textMonth = "Лист";
      break;
    case "12":
      textMonth = "Груд";
      break;
    default:
      textMonth = "";
  }
  const formatData = `${day} ${textMonth}`;
  return formatData;
}
