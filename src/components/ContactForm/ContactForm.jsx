// Импортируем компоненты Formik: Formik (обёртка формы), Form (элемент формы), Field (поле ввода)
import { Formik, Form, Field } from "formik";

// Объявляем и экспортируем компонент ContactForm
// Принимает пропс onAdd — функцию, которая вызывается при добавлении нового контакта
export default function ContactForm({ onAdd }) {
  return (
    // Компонент <Formik> управляет состоянием и отправкой формы
    <Formik
      // Задаём начальные значения полей формы (пустые строки)
      initialValues={{ name: "", number: "" }}
      // Обработчик отправки формы
      onSubmit={(values, actions) => {
        onAdd(values); // Передаём введённые значения (name и number) в функцию onAdd
        actions.resetForm(); // Очищаем поля формы после отправки
      }}
    >
      {/* Компонент <Form> заменяет обычный <form> и работает с Formik */}
      <Form>
        {/* Метка и поле ввода имени */}
        <label>
          Name
          {/* Field автоматически подключается к Formik и обновляет состояние формы */}
          <Field name="name" />
        </label>

        {/* Метка и поле ввода номера телефона */}
        <label>
          Number
          <Field name="number" />
        </label>

        {/* Кнопка отправки формы */}
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
