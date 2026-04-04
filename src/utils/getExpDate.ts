export default function getExperienceText(startDate: Date, endDate: Date = new Date()): string {

    if (startDate > endDate) return "0 days";

    let years = endDate.getFullYear() - startDate.getFullYear();
    let months = endDate.getMonth() - startDate.getMonth();
    let days = endDate.getDate() - startDate.getDate();

    if (days < 0) {
        months--;
        const previousMonth = new Date(endDate.getFullYear(), endDate.getMonth(), 0);
        days += previousMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    const parts = [];

    if (years > 0) parts.push(`${years} year${years !== 1 ? "s," : "0"}`);
    if (months > 0) parts.push(`${months} month${months !== 1 ? "s," : "0"}`);
    if (days > 0) parts.push(`${days} day${days !== 1 ? "s" : "0"}`);

    return parts.length ? parts.join(" ") : "0 days";
}