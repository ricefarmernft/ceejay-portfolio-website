import Image from "next/image";

export default function PortfolioImg(props) {
  return (
    <div className="flex justify-center">
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
          width={props.width || 900}
          height={props.height || 200}
          unoptimized
        ></Image>
      </a>
    </div>
  );
}
