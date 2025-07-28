function getSeason(month) {
    if (!month || typeof month !== "string") {
        console.log("❌ Invalid month");
        return;
    }

    switch (month.toLowerCase()) {
        case "december":
        case "january":
        case "february":
            console.log("❄️ Winter Season");
            break;

        case "march":
        case "april":
        case "may":
            console.log("☀️ Summer Season");
            break;

        case "june":
        case "july":
        case "august":
        case "september":
            console.log("🌧️ Monsoon Season");
            break;

        case "october":
        case "november":
            console.log("🍂 Post-Monsoon / Autumn Season");
            break;

        default:
            console.log("❌ Invalid month name");
    }
}


getSeason("March");
getSeason("August"); 
getSeason("October");  
getSeason("January");  
