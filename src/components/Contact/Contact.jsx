export default function Contact({ contact, onDelete }) {
  const { name, number } = contact;

  return (
    <>
      {name}: {number}
      <button onClick={onDelete}>Delete</button>
    </>
  );
}
