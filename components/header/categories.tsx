import styles from "./index.module.scss";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Dropdown, MenuProps, Space } from "antd";

const items: MenuProps["items"] = [
    {
        label: '1st menu item',
        key: '1',
    },
    {
        label: '2nd menu item',
        key: '2',
    },
];

export default function Categories() {
    return (
        <Dropdown menu={{ items }}>
            <Button className={styles.categories} size="large" type="primary">
                <Space>
                    Каталог товаров
                    <FontAwesomeIcon icon={faAngleDown} />
                </Space>
            </Button>
        </Dropdown>
    );
}