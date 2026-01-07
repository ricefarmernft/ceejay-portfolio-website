export default function List(props) {
  return (
    <div className="flex justify-between flex-wrap w-full p-4 md:p-6">
      {props.languages && (
        <div>
          <p className="text-xl md:text-3xl ">Languages</p>
          <ul className="pt-2">
            {props.languages.map((language, index) => (
              <li key={index}>{language}</li>
            ))}
          </ul>
        </div>
      )}
      {props.dependencies && (
        <div>
          <p className="text-xl md:text-3xl ">Dependencies</p>
          <ul className="pt-2">
            {props.dependencies.map((dependency, index) => (
              <li key={index}>{dependency}</li>
            ))}
          </ul>
        </div>
      )}
      {props.apis && (
        <div>
          <p className="text-xl md:text-3xl ">APIs</p>
          <ul className="pt-2">
            {props.apis.map((api, index) => (
              <li key={index}>{api}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
