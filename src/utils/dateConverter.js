export function dateConverter(inputDate) {
    // Get today's date
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Clear hours, minutes, seconds, and milliseconds

    // Get yesterday's date
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    // Get the date after 7 days
    const sevenDaysAfter = new Date(today);
    sevenDaysAfter.setDate(today.getDate() + 7);

    // Convert inputDate to Date object
    const inputDateObj = new Date(inputDate);
    inputDateObj.setHours(0, 0, 0, 0); // Clear hours, minutes, seconds, and milliseconds

    // Compare inputDate with today, yesterday, and within 7 days
    if (inputDateObj.getTime() === today.getTime()) {
        return "today";
    } else if (inputDateObj.getTime() === yesterday.getTime()) {
        return "yesterday";
    } else if (
        inputDateObj.getTime() > today.getTime() &&
        inputDateObj.getTime() <= sevenDaysAfter.getTime()
    ) {
        const daysDifference = Math.floor(
            (inputDateObj.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
        );
        return `in ${daysDifference} days`;
    } else {
        // Format date as "Thursday, February 25, 2021"
        const options = {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric",
        };
        return inputDateObj.toLocaleDateString("en-US", options);
    }
}
