export default function ProjectImg(props) {
  return (
    <div className="project-img">
      <a
        href={props.href}
        className="project-link"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className={`${props.class} shadow-lg`}
          src={props.src}
          alt={props.alt}
        ></img>
      </a>
    </div>
  );
}
