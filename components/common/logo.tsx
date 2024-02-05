import Link from "next/link";
import styles from "./common.module.scss";

export default function Logo({ size }: Readonly<{ size: "big" | "small" }>) {
    return (
        <Link className={styles["logo-"+size]} href="/">
            <div className={styles["logo-"+size+"__main-text"]}>
                Scale
                <div className={styles["logo-"+size+"__main-text-red"]}>
                    Bay
                </div>
            </div>
            <div className={styles["logo-"+size+"__bottom-text"]}>
                интернет аукцион без комиссии
            </div>
        </Link>
    )
}