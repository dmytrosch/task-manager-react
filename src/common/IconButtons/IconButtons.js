import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./IconButton.module.css";

import { ReactComponent as Analytics } from "../../assest/ui/analytica.svg";
import { ReactComponent as ColoredBin } from "../../assest/ui/coloredBin.svg";
import { ReactComponent as ColoredBinMobile } from "../../assest/ui/coloredBinMobile.svg";
import { ReactComponent as GreyBin } from "../../assest/ui/greyBin.svg";
import { ReactComponent as Search } from "../../assest/ui/search.svg";
import { ReactComponent as Pen } from "../../assest/ui/pen.svg";
import { ReactComponent as Plus } from "../../assest/ui/plus.svg";
import { ReactComponent as Checkmark } from "../../assest/ui/checkmark.svg";
import { ReactComponent as CrossIcon } from "../../assest/ui/crossIcon.svg";

const IconButton = ({
  size,
  icon,
  iconButtonCustomClass,
  iconName,
  ...props
}) => {
  return (
    <button
      className={classNames(
        styles.button,
        styles[icon],
        ...[iconButtonCustomClass]
      )}
      {...props}
    >
      {iconName === "analytica" && <Analytics />}
      {iconName === "coloredBin" && <ColoredBin />}
      {iconName === "coloredBinMobile" && <ColoredBinMobile />}
      {iconName === "greyBin" && <GreyBin />}
      {iconName === "search" && <Search />}
      {iconName === "pen" && <Pen />}
      {iconName === "plus" && <Plus />}
      {iconName === "checkmark" && <Checkmark />}
      {iconName === "crossIcon" && <CrossIcon />}
    </button>
  );
};

IconButton.proprTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.object,
};

IconButton.defaultProps = {
  iconName: "coloredBin",
  icon: "coloredBin",

  //   size: {
  //       width: 34,
  //       height: 34,
  //   },
};

export default IconButton;
