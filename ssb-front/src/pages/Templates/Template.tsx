import Templates from "@/components/Templates/templates";
import styles from "./template.module.scss";

export default function Template() {
  return (
    <div className={styles.template}>
      <section className={styles.template_section}>
        <div className={styles.template_top}>
          <h2>Template</h2>
          <div className={styles.template_search}>
            <h3>검색</h3>
            <input type="text" />
          </div>
        </div>
      </section>

      <section className={styles.template_section}>
        <Templates />
      </section>
    </div>
  );
}
