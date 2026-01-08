export default function Caption(props) {
  return (
    <p className="text-xs sm:text-sm md:text-base italic flex justify-center pl-4 pr-4 ">
      {props.children}
    </p>
  );
}
