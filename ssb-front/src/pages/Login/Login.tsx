import Button from '@/components/Button/Button'
import styles from './Login.module.scss'
import { ButtonSize, ButtonType } from '@/types/components/Button.type'
export default function Login(){
    return <div className={styles.login}>
                <div>
                    <div className={styles.login_title}>SSB
                        {/* <div className={styles.title_shadow}></div> */}
                        
                        
                    </div>
                    
                    <div className={styles.input_wrapper}>
                        
                        <div className={styles.input_container}>
                            <h2>로그인</h2>
                            <section className={styles.input}>
                                <input placeholder={'ID'}></input>
                                <input placeholder={'Password'}></input>
                            </section>
                            <section className={styles.social_logins}>
                                <Button size={ButtonSize.LARGE} content={"구글 로그인"} type={ButtonType.GOOGLE}/>
                                <Button size={ButtonSize.LARGE} content={"카카오 로그인"} type={ButtonType.KAKAO}/>
                                <Button size={ButtonSize.LARGE} content={"네이버 로그인"} type={ButtonType.NAVER}/>
                            </section>    
                        </div>
                        <div className={styles.container_shadow}></div>
                    </div>
                </div>
            </div>
}