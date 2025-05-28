// Импортируем компонент Contact, который отображает отдельный контакт
import Contact from "../Contact/Contact";

// Определяем функциональный компонент ContactList, который принимает пропсы: contacts (массив контактов) и onDelete (функция удаления)
export default function ContactList({ contacts, onDelete }) {
  return (
    // Возвращаем список (ul), в котором будет отображаться каждый контакт
    <ul>
      {/* Проходим по каждому контакту в массиве contacts с помощью map */}
      {contacts.map((contact) => (
        // Каждый элемент списка (li) получает уникальный ключ — ID контакта
        <li key={contact.id}>
          {/* Отображаем компонент Contact, передавая ему нужные данные через пропсы */}
          <Contact
            id={contact.id} // Уникальный идентификатор контакта
            name={contact.name} // Имя контакта
            number={contact.number} // Номер телефона контакта
            onDelete={onDelete} // Функция удаления, передаётся дальше в компонент Contact
          />
        </li>
      ))}
    </ul>
  );
}
