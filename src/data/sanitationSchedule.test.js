import { getDayDetails, getScheduleBanner } from './sanitationSchedule';

const detailTypes = (date) => getDayDetails(date).map((detail) => detail.type);

test('keeps the storm exception as regular Thursday service', () => {
    expect(detailTypes('2026-02-12')).toContain('notice');
    expect(detailTypes('2026-02-12')).not.toContain('holiday');
});

test('keeps ordinary pickup days visually quiet', () => {
    expect(getDayDetails('2026-09-14')).toEqual([]);
    expect(getDayDetails('2026-09-17')).toEqual([]);
});

test('replaces Labor Day collection with Monday set-out and Tuesday pickup', () => {
    expect(detailTypes('2026-09-06')).toContain('holiday');
    expect(detailTypes('2026-09-06')).not.toContain('setout');
    expect(detailTypes('2026-09-07')).toEqual(expect.arrayContaining(['holiday', 'setout']));
    expect(detailTypes('2026-09-08')).toContain('delayed');
});

test('shows the timely Labor Day banner', () => {
    const banner = getScheduleBanner(new Date(2026, 8, 6));
    expect(banner.title).toBe('No Monday collection');
    expect(banner.text).toContain('Tuesday, September 8');
});
