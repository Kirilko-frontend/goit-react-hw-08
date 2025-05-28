// Объявляем и экспортируем компонент SearchBox по умолчанию
// Принимает два пропса:
// - value: текущее значение фильтра (строка)
// - onFilter: функция, вызываемая при изменении ввода
export default function SearchBox({ value, onFilter }) {
  return (
    // Контейнер для поля поиска
    <div>
      {/* Метка и поле ввода */}
      <label>
        Find contacts by name:
        {/* Поле ввода текста */}
        <input
          type="text" // Тип поля — текст
          value={value} // Устанавливаем текущее значение из пропса value
          onChange={(e) => onFilter(e.target.value)}
          // При изменении текста вызываем onFilter, передавая новое значение поля
        />
      </label>
    </div>
  );
}
