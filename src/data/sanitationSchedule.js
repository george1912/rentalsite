export const SANITATION_YEAR = 2026;

export const WEEKLY_SCHEDULE = [
    {
        setOutDay: 'Sunday night',
        pickupDay: 'Monday',
        time: '8–10 PM',
        services: ['Trash', 'Recycling'],
    },
    {
        setOutDay: 'Wednesday night',
        pickupDay: 'Thursday',
        time: '8–10 PM',
        services: ['Trash'],
    },
];

export const SANITATION_HOLIDAYS = [
    { date: '2026-01-01', name: "New Year's Day", affectsSchedule: true },
    { date: '2026-01-19', name: 'Martin Luther King Jr. Day', affectsSchedule: true },
    {
        date: '2026-02-12',
        name: "Lincoln's Birthday",
        affectsSchedule: false,
        regularService: true,
        note: 'DSNY ultimately operated regular collection because of a storm-related exception.',
    },
    { date: '2026-02-16', name: "Presidents' Day", affectsSchedule: true },
    { date: '2026-05-25', name: 'Memorial Day', affectsSchedule: true },
    { date: '2026-06-19', name: 'Juneteenth', affectsSchedule: false },
    { date: '2026-07-04', name: 'Independence Day', affectsSchedule: false },
    {
        date: '2026-09-07',
        name: 'Labor Day',
        affectsSchedule: true,
        confirmed: true,
        replacementSetOut: '2026-09-07',
        replacementPickup: '2026-09-08',
    },
    { date: '2026-10-12', name: 'Italian Heritage Day / Indigenous Peoples’ Day', affectsSchedule: true },
    { date: '2026-11-03', name: 'Election Day', affectsSchedule: false },
    { date: '2026-11-11', name: 'Veterans Day', affectsSchedule: false },
    { date: '2026-11-26', name: 'Thanksgiving', affectsSchedule: true },
    { date: '2026-12-25', name: 'Christmas Day', affectsSchedule: false },
];

export const isoFromDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

export const dateFromISO = (iso) => {
    const [year, month, day] = iso.split('-').map(Number);
    return new Date(year, month - 1, day);
};

export const formatFullDate = (iso) => dateFromISO(iso).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
});

const holidayForDate = (iso) => SANITATION_HOLIDAYS.find((holiday) => holiday.date === iso);

const holidayAfterDate = (date) => {
    const tomorrow = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
    return holidayForDate(isoFromDate(tomorrow));
};

export const getDayDetails = (iso) => {
    const date = dateFromISO(iso);
    const weekday = date.getDay();
    const holiday = holidayForDate(iso);
    const nextHoliday = holidayAfterDate(date);
    const details = [];

    if (holiday) {
        if (holiday.regularService) {
            details.push({ type: 'notice', title: holiday.name, text: holiday.note });
        } else {
            details.push({
                type: 'holiday',
                title: holiday.name,
                text: holiday.affectsSchedule
                    ? 'No regular collection for this building.'
                    : 'City sanitation holiday; this building has no regular pickup today.',
            });
        }
    }

    if (iso === '2026-09-07') {
        details.push({
            type: 'setout',
            title: 'Holiday set-out',
            text: 'Put trash and recycling out between 8 and 10 PM for collection beginning Tuesday.',
        });
    }

    if (iso === '2026-09-08') {
        details.push({
            type: 'delayed',
            title: 'Delayed collection begins',
            text: 'DSNY begins collecting Monday’s trash and recycling. Delays may continue.',
        });
    }

    const cancelledForHoliday = nextHoliday && nextHoliday.affectsSchedule && !nextHoliday.regularService;
    if ((weekday === 0 || weekday === 3) && !cancelledForHoliday) {
        details.push({
            type: 'setout',
            title: weekday === 0 ? 'Sunday set-out' : 'Wednesday set-out',
            text: weekday === 0
                ? 'Put trash and recycling out between 8 and 10 PM.'
                : 'Put trash out between 8 and 10 PM.',
        });
    }

    if (cancelledForHoliday) {
        details.push({
            type: 'holiday',
            title: 'Skip tonight’s set-out',
            text: `${nextHoliday.name} changes the next day’s collection. Check the holiday guidance before putting anything out.`,
        });
    }

    return details;
};

export const getScheduleBanner = (today = new Date()) => {
    const todayISO = isoFromDate(today);

    if (todayISO >= '2026-09-01' && todayISO <= '2026-09-07') {
        return {
            tone: 'holiday',
            eyebrow: 'Labor Day update',
            title: 'No Monday collection',
            text: 'Skip Sunday set-out. Put trash and recycling out Monday evening between 8 and 10 PM for collection beginning Tuesday, September 8.',
        };
    }

    const candidates = [];
    for (let offset = 0; offset < 8; offset += 1) {
        const date = new Date(today.getFullYear(), today.getMonth(), today.getDate() + offset);
        const weekday = date.getDay();
        const nextHoliday = holidayAfterDate(date);
        if ((weekday === 0 || weekday === 3) && !(nextHoliday && nextHoliday.affectsSchedule && !nextHoliday.regularService)) {
            candidates.push({ date, weekday });
        }
    }

    const next = candidates[0];
    if (!next) return null;

    const when = isoFromDate(next.date) === todayISO ? 'Tonight' : next.date.toLocaleDateString('en-US', { weekday: 'long' });
    return {
        tone: 'regular',
        eyebrow: 'Next set-out',
        title: `${when}, 8–10 PM`,
        text: next.weekday === 0
            ? 'Put out trash and recycling for Monday collection.'
            : 'Put out trash for Thursday collection.',
    };
};
