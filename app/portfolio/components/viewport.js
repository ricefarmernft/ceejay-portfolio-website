export default function Viewport(props) {
  return (
    <>
      <div className="mx-auto max-w-3xl">{props.children}</div>
    </>
  );
}
