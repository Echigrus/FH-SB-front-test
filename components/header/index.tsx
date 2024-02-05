'use client'

import { useRouter } from "next/navigation";
import { Button, Col, Row } from "antd";
import Logo from "../common/logo";
import styles from "./index.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "./search-bar";
import Categories from "./categories";

export default function Header() {
    const router = useRouter();

    return (
        <div className={styles.header}>
            <div className={styles.top}>
                <Logo size="big" />
                <Row gutter={[13, 0]}>
                    <Col>
                        <Button 
                            onClick={() => router.push('/categories')}
                        >
                            Купить
                        </Button>
                    </Col>
                    <Col>
                        <Button
                            className={styles["green-btn"]}
                            onClick={() => router.push('/sell')}
                            type="primary"
                        >
                            Продать
                        </Button>
                    </Col>
                    <Col>
                        <Button 
                            icon={<FontAwesomeIcon icon={faCartShopping} />}
                            shape="circle"
                        />
                    </Col>
                    <Col>
                        <Button 
                            icon={<FontAwesomeIcon icon={faUser} />}
                            shape="circle"
                        />
                    </Col>
                </Row>
            </div>
            <div className={styles.navigation}>
                <Categories />
                <SearchBar />
            </div>
        </div>
    );
}