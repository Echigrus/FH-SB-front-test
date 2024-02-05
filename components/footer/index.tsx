import { Col, Row } from "antd";
import Logo from "../common/logo";
import styles from "./index.module.scss";
import rcforum from './rcforum.png';
import vk from './vk.svg';
import strangeThing from './strange-thing.png';
import fh from './fh.svg';
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <div className={styles.footer}>
            <Logo size="small" />
            <Row className={styles.links}>
                <Col className={styles["link-col"]}>
                    <span>Правила аукциона</span>
                    <span>Импорт лотов</span>
                </Col>
                <Col className={styles["link-col"]}>
                    <span>Интернет-магазин масштабных моделей</span>
                    <span>Купить рекламу на scalebay.ru</span>
                </Col>
                <Col className={styles["link-col-small"]}>
                    <span>Служба поддержки пользователей</span>
                    <span>
                        <a href="mailto:support@scalebay.ru" className={styles.mail}>
                            support@scalebay.ru
                        </a>
                    </span>
                </Col>
                <Col>
                    <Row className={styles.logos}>
                        <a href="http://rcforum.ru/showthread.php?t=50108">
                            <Image src={rcforum} alt="RC forum" />
                        </a>
                        <a href="https://vk.com/scalebay">
                            <Image src={vk} alt="VKontakte" />
                        </a>
                    </Row>
                </Col>
            </Row>
            <Row className={styles["bunker-level"]}>
                <Image src={strangeThing} alt="Big Brother is watching" />
                <div className={styles["made-by"]}>
                    <span>Сделано в</span>
                    <a href="https://forthill.ru">
                        <Image src={fh} alt="Fortress Hill" />
                    </a>
                </div>
            </Row>
        </div>
    );
}