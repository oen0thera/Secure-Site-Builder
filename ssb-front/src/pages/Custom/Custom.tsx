import styles from "./custom.module.scss";
import Customizer from "./Customizer/Customizer";
export default function Custom() {
  return (
    <div className={styles.custom}>
      <section className={styles.custom_section}>
        <div className={styles.custom_components}>
          <h2>Customizer</h2>
          <Customizer />
        </div>
        <canvas className={styles.custom_canvas}></canvas>
      </section>
    </div>
  );
}
