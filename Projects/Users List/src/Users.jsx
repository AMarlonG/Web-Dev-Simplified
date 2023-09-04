export function Users({ name, email, phone, username }) {
  return (
    <li>
      {name}, {email}, {phone}, {username}
    </li>
  );
}
