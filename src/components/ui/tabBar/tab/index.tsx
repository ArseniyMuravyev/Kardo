import classNames from "classnames";
import classes from "./style.module.scss";

const Tab = ({ element: Component, isActive, title }) => {
  const titleActiveStyle = classNames(classes.tab__title, {
    [classes.tab__title_active]: isActive,
  });

  return (
    <button className={classes.tab}>
      <Component className={classes.tab__image} isActive={isActive} />
      <p className={titleActiveStyle}>{title}</p>
    </button>
  );
};

export default Tab;
