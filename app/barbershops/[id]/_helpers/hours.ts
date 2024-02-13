import { setHours, setMinutes, format, addMinutes, isToday } from "date-fns";

export function generateDayTimeList(date: Date): string[] {
    const startTime = setMinutes(setHours(date, 9), 0);
    const endTime = setMinutes(setHours(date, 21), 0);
    const interval = 45;
    const timeList: string[] = [];
    const currentDate = new Date();

    let currentTime = startTime;

    if (isToday(date)) {
        const currentHour = currentDate.getHours();
        const currentMinute = currentDate.getMinutes();
        const currentHourStartTime = setMinutes(setHours(date, currentHour + 1), 0);
        if (currentHourStartTime > startTime) {
            currentTime = currentHourStartTime;
        }
    }

    while (currentTime <= endTime) {
        timeList.push(format(currentTime, "HH:mm"));
        currentTime = addMinutes(currentTime, interval);
    }
    return timeList;
}
