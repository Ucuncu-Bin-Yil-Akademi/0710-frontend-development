export default function SpanComponent({ spanText, users }) {
  return (
    <>
      <span>{spanText}</span>
      <span>
        {users.map((user) => {
          return user.username;
        })}
      </span>
    </>
  );
}
