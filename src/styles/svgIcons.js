import classes from "../components/signUp/RegForm.module.css";

export const errorElement = (text, exported=false) => {
  return (
    <div className={`${exported ? classes.exportedErrorNotif : classes.errorNotif }`}>
      <svg
        width="16"
        height="13"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-name="Failure"
        role="img"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.5 8C13.5 11.0376 11.0376 13.5 8 13.5C4.96243 13.5 2.5 11.0376 2.5 8C2.5 4.96243 4.96243 2.5 8 2.5C11.0376 2.5 13.5 4.96243 13.5 8ZM15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM4.96967 6.03033L6.93934 8L4.96967 9.96967L6.03033 11.0303L8 9.06066L9.96967 11.0303L11.0303 9.96967L9.06066 8L11.0303 6.03033L9.96967 4.96967L8 6.93934L6.03033 4.96967L4.96967 6.03033Z"
          fill="currentColor"
        ></path>
      </svg>
      <p className={classes.errorText}>{text}</p>
    </div>
  );
};

export const successfulSvg = (
  <svg
    width="800px"
    height="800px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0" />
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g id="SVGRepo_iconCarrier">
      <g id="Interface / Check_All_Big">
        <path
          id="Vector"
          d="M7 12L11.9497 16.9497L22.5572 6.34326M2.0498 12.0503L6.99955 17M17.606 6.39355L12.3027 11.6969"
          stroke="#e50914"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
  </svg>
);

export const failedSvg = (
  <svg
    width="800px"
    height="800px"
    viewBox="0 0 14 14"
    xmlns="http://www.w3.org/2000/svg"
    fill="#ffffff"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0" />

    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g id="SVGRepo_iconCarrier">
      <g fillRule="evenodd">
        <path d="M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7z" />{" "}
        <path
          d="M13 7A6 6 0 1 0 1 7a6 6 0 0 0 12 0z"
          fill="#e50914"
        />
        <path d="M7 5.969L5.599 4.568a.29.29 0 0 0-.413.004l-.614.614a.294.294 0 0 0-.004.413L5.968 7l-1.4 1.401a.29.29 0 0 0 .004.413l.614.614c.113.114.3.117.413.004L7 8.032l1.401 1.4a.29.29 0 0 0 .413-.004l.614-.614a.294.294 0 0 0 .004-.413L8.032 7l1.4-1.401a.29.29 0 0 0-.004-.413l-.614-.614a.294.294 0 0 0-.413-.004L7 5.968z" />{" "}
      </g>
    </g>
  </svg>
);
