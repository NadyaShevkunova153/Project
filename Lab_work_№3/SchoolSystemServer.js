// Серверная часть: обработка запроса на получение расписания ученика
const express = require('express');

const app = express();

// Пример расписания для ученика
const studentScheduleData = {
  123: [
    { dayOfWeek: 'Понедельник', time: '9:00', subject: 'Математика' },
    { dayOfWeek: 'Вторник', time: '10:30', subject: 'Литература' },
    // Здесь может быть больше данных о расписании для ученика
  ],
  // Здесь может быть расписание для других учеников с разными ID
};

app.get('/students/:studentId/schedule', (req, res) => {
  const studentId = req.params.studentId;
  const schedule = studentScheduleData[studentId];

  if (!schedule) {
    return res.status(404).json({ error: 'Schedule not found' });
  }

  return res.status(200).json(schedule);
});

// Запуск сервера
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
