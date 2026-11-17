import styles from "./detail_gnb.module.scss";

interface DetailGNBProps {
  position?: string;
  height?: number;
  linkSection?: string[];
  userSection?: string[];
}

export default function DetailGNB({
  position = "top",
  height = 4,
  linkSection = ["소개", "요금", "고객지원"],
  userSection = ["로그인", "회원가입"],
}: DetailGNBProps) {
  return (
    <div
      className={`${styles.gnb} ${
        position === "top" ? styles.top : styles.side
      }`}
      style={{
        height: `${height}em`,
      }}
    >
      <section
        className={`${styles.link_section} ${
          position === "top" ? styles.top : styles.side
        }`}
      >
        <a>로고</a>
        {linkSection.map((item) => {
          return <a>{item}</a>;
        })}
      </section>
      <section
        className={`${styles.user_section} ${
          position === "top" ? styles.top : styles.side
        }`}
      >
        {userSection.map((item) => {
          return <a>{item}</a>;
        })}
      </section>
    </div>
  );
}
