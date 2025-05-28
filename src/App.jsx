// Импортируем хук useState из React для создания состояния
import { useState } from "react";

// Импортируем nanoid для генерации уникальных ID
import { nanoid } from "nanoid";

// Импортируем компонент списка контактов
import ContactList from "./components/ContactList/ContactList";

// Импортируем компонент формы добавления контакта
import ContactForm from "./components/ContactForm/ContactForm";

// Импортируем компонент поиска (фильтрации по имени)
import SearchBox from "./components/SearchBox/SearchBox";

// Импортируем стили для приложения
import "./App.css";

// Начальный список контактов — будет использоваться при первом рендере
const initialContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

// Основной компонент приложения
function App() {
  // Состояние для хранения списка контактов, по умолчанию — initialContacts
  const [contacts, setContacts] = useState(initialContacts);

  // Состояние для хранения текста фильтра
  const [filter, setFilter] = useState("");

  // Функция для добавления нового контакта
  const handleAddContact = (newContact) => {
    // Создаём новый контакт с уникальным ID
    const contactToAdd = {
      id: nanoid(), // Генерация уникального ID
      ...newContact, // Копируем свойства из формы (name, number)
    };

    // Обновляем состояние, добавляя новый контакт к текущему списку
    setContacts((prev) => [...prev, contactToAdd]);
  };

  // Функция для удаления контакта по ID
  const handleDeleteContact = (contactId) => {
    // Фильтруем список, исключая контакт с заданным ID
    setContacts((prev) => prev.filter((contact) => contact.id !== contactId));
  };

  // Создаём новый массив контактов, отфильтрованный по имени (с учётом регистра)
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  // JSX — то, что рендерится в браузере
  return (
    <div>
      <h1>Phonebook</h1>

      {/* Компонент формы добавления контакта. Передаём функцию handleAddContact */}
      <ContactForm onAdd={handleAddContact} />

      {/* Компонент поиска. Передаём текущее значение фильтра и функцию обновления */}
      <SearchBox value={filter} onFilter={setFilter} />

      {/* Компонент списка контактов. Передаём отфильтрованные контакты и функцию удаления */}
      <ContactList contacts={filteredContacts} onDelete={handleDeleteContact} />
    </div>
  );
}

// Экспортируем компонент App по умолчанию, чтобы его можно было использовать в других файлах
export default App;
