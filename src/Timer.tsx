import type { Addiction } from "./Addiction"

type Props = {
    addiction: Addiction;
}

type CustomDate = {
    nbYears: number,
    nbMonths: number
    nbDays: number,
    nbHours: number
}

export function calculateTime(addiction: Addiction): CustomDate {
    const now = new Date();

    let years = now.getFullYear() - addiction.date.getFullYear();
    let months = now.getMonth() - addiction.date.getMonth();
    let days = now.getDate() - addiction.date.getDate();
    let hours = now.getHours() - addiction.date.getHours();

    if (hours < 0) {
        hours += 24;
        days--;
    }

    if (days < 0) {
        months--;
        const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += previousMonth.getDate();
    }

    if (months < 0) {
        months += 12;
        years--;
    }

    return {
        nbYears: years,
        nbMonths: months,
        nbDays: days,
        nbHours: hours,
    };
}

export default function Timer({ addiction }: Props) {
    const time = calculateTime(addiction);

    return (
        <p>
            {time.nbYears} ans, {time.nbMonths} mois,
            {time.nbDays} jours, {time.nbHours} heures
        </p>
    );
}