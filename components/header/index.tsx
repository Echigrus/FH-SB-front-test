import { Button, Col, Row } from "antd";
import Logo from "../common/logo";
import styles from "./index.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "./search-bar";
import Categories from "./categories";
import Link from "next/link";

export default function Header() {

    return (
        <div className={styles.header}>
            <div className={styles.top}>
                <Logo size="big" />
                <Row gutter={[13, 0]}>
                    <Col>
                        <Link href='/categories'>
                            <Button>
                                Купить
                            </Button>
                        </Link>
                    </Col>
                    <Col>
                        <Link href='/sell'>
                            <Button className={styles["green-btn"]} type="primary">
                                Продать
                            </Button>
                        </Link>
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