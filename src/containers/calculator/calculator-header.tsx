import useDarkMode from "../../hooks/useDarkmode";
import Styles from "./calculator-header.module.css";
import { MdOutlineWbSunny } from "react-icons/md";
import { LuMoonStar } from "react-icons/lu";

const CalculatorHeader = () => {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <div className={Styles.header}>
      <h2>예산 계산기</h2>
      <div className={Styles.dark_mode} onClick={toggleDarkMode}>
        {isDark ? <MdOutlineWbSunny /> : <LuMoonStar />}
      </div>
    </div>
  );
};

export default CalculatorHeader;
