import Banner from "@/components/Banner/Banner";
import GNB from "@/components/GNB/GNB";
import styles from './main.module.scss';
import Templates from "@/components/Templates/templates";

export default function Main() {
  return (
    <div className={styles.main}>
      <Banner/>
      <h2>지금 인기있는 템플릿</h2>

      <div><Templates /></div>
      <h2>포트폴리오</h2>
      <div><Templates /></div>
      <h2>광고/홍보</h2>
      <div><Templates /></div>


    </div>
  );
}
