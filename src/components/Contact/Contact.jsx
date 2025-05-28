// Объявляем и экспортируем компонент Contact по умолчанию
// Принимает пропсы: id (уникальный идентификатор), name (имя), number (номер телефона), onDelete (функция удаления)
export default function Contact({ id, name, number, onDelete }) {
  return (
    // Контейнер для отображения информации о контакте и кнопки удаления
    <div>
      {/* Выводим имя и номер телефона */}
      <p>
        {name}: {number}
      </p>

      {/* Кнопка удаления. При клике вызывается функция onDelete с ID текущего контакта */}
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}
