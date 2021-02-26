export function formatDate(date) {
    const data = date.split('/');
    const dataSlice = data.slice(1);
    console.log(data);
    console.log(dataSlice);
    // let monthName = "";
    switch(dataSlice[0]) {
        case "1": dataSlice[0] = "Січ";
            break;
        case "2": dataSlice[0] = "Люn";
            break;
        case "3": dataSlice[0] = "Бер";
            break;
        case "4": dataSlice[0] = "Квіт";
            break;
        case "5": dataSlice[0] = "Трав";
            break;
        case "6": dataSlice[0] = "Черв";
            break;
        case "7": dataSlice[0] = "Лип";
            break;
        case "8": dataSlice[0] = "Серп";
            break;
        case "9": dataSlice[0] = "Вер";
            break;
        case "10": dataSlice[0] = "Жовт";
            break;
        case "11": dataSlice[0] = "Лист";
            break;
        case "12": dataSlice[0] = "Груд";
            break;
        default: data[1] = "";
    }
    const formatData = dataSlice.join(' ');
    return formatData;
}

