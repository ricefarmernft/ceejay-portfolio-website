import Image from "next/image";

export default function ProjectImg(props) {
  return (
    <div className="project-img">
      <a
        href={props.href}
        className="project-link"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          className={`${props.class} shadow-lg`}
          src={props.src}
          alt={props.alt}
          width={900}
          height={200}
        ></Image>
      </a>
    </div>
  );
}
