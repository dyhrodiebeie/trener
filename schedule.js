document.addEventListener('DOMContentLoaded', function() {
    const scheduleData = {
        '09': {
            'пн': [],
            'вт': [{ time: '09:00-09:55', class: 'Boxing-Kids-Новички' }],
            'ср': [],
            'чт': [{ time: '09:00-09:55', class: 'Boxing-Kids-Новички' }],
            'пт': [],
            'сб': [{ time: '09:00-09:55', class: 'Boxing-Kids-Новички' }],
            'вс': []
        },
        '10': {
            'пн': [{ time: '10:00-10:55', class: 'Tabata' }],
            'вт': [{ time: '10:00-10:55', class: 'Soft Exers' }],
            'ср': [{ time: '10:00-10:55', class: 'Boxing-Kids-Новички' }],
            'чт': [],
            'пт': [{ time: '10:00-10:55', class: 'Soft Exers' }],
            'сб': [],
            'вс': [{ time: '10:00-10:55', class: 'Soft Exers' }]
        },
        '11': {
            'пн': [{ time: '11:00-11:55', class: 'Stretching' }],
            'вт': [{ time: '11:00-11:55', class: 'Boxing- Sparring day' }],
            'ср': [{ time: '11:00-11:55', class: 'Body Ballet' }],
            'чт': [{ time: '11:00-11:55', class: 'Body Ballet' }],
            'пт': [{ time: '11:00-11:55', class: 'Boxing- Sparring day' }],
            'сб': [{ time: '11:00-11:55', class: 'Boxing- Sparring day' }],
            'вс': []
        },
        '12': {
            'пн': [],
            'вт': [],
            'ср': [{ time: '12:00-12:55', class: 'Super Sculpt' }],
            'чт': [{ time: '12:00-12:55', class: 'Super Sculpt' }],
            'пт': [],
            'сб': [],
            'вс': [{ time: '12:00-12:55', class: 'Super Sculpt' }]
        },
        '13': {
            'пн': [],
            'вт': [{ time: '13:00-13:55', class: 'Pilates' }],
            'ср': [],
            'чт': [{ time: '13:00-13:55', class: 'Pilates' }],
            'пт': [],
            'сб': [{ time: '13:00-13:55', class: 'Pilates' }],
            'вс': [{ time: '13:00-13:55', class: 'Pilates' }]
        },
        '14': {
            'пн': [],
            'вт': [{ time: '14:00-14:55', class: 'Soft Exers' }],
            'ср': [{ time: '14:00-14:55', class: 'ABD Stretch' }],
            'чт': [],
            'пт': [],
            'сб': [],
            'вс': []
        },
        '15': {
            'пн': [{ time: '15:00-15:55', class: 'Boxing-Kids-Новички' }],
            'вт': [],
            'ср': [],
            'чт': [{ time: '15:00-15:55', class: 'Boxing-Kids-Новички' }],
            'пт': [],
            'сб': [{ time: '15:00-15:55', class: 'Boxing-Kids-Новички' }],
            'вс': []
        },
        '16': {
            'пн': [],
            'вт': [{ time: '16:00-16:55', class: 'Make Body' }],
            'ср': [],
            'чт': [],
            'пт': [],
            'сб': [{ time: '16:00-16:55', class: 'Make Body' }],
            'вс': [{ time: '16:00-16:55', class: 'Make Body' }]
        },
        '17': {
            'пн': [],
            'вт': [{ time: '17:00-17:55', class: 'Изотон' }],
            'ср': [{ time: '17:00-17:55', class: 'Boxing-Kids-Новички' }],
            'чт': [{ time: '15:00-15:55', class: 'Boxing-Kids-Новички' }],
            'пт': [],
            'сб': [],
            'вс': [{ time: '17:00-17:55', class: 'Изотон' }]
        }
    };

    const scheduleContent = document.querySelector('.schedule-content');
    const hours = Object.keys(scheduleData).sort();
    const days = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

    hours.forEach(hour => {
        // Add time slot
        const timeSlot = document.createElement('div');
        timeSlot.className = 'time-slot';
        timeSlot.textContent = hour;
        scheduleContent.appendChild(timeSlot);

        // Add class slots for each day
        days.forEach(day => {
            const classSlot = document.createElement('div');
            classSlot.className = 'class-slot';

            const classes = scheduleData[hour][day];
            if (classes && classes.length > 0) {
                const classItem = document.createElement('div');
                classItem.className = 'class-item';
                classItem.innerHTML = `
                    <div>${classes[0].time}</div>
                    <div>${classes[0].class}</div>
                `;
                classSlot.appendChild(classItem);
            }

            scheduleContent.appendChild(classSlot);
        });
    });
});
