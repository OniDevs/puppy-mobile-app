import { metrics } from "../../theme/metrics";
import colors from "../../theme/colors";

const bases = {
  baseStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: metrics.buttonPaddingLeft,
    paddingRight: metrics.buttonPaddingRight,
    height: metrics.buttonHeight,
    borderRadius: metrics.buttonBorderRadius,
  },
  baseProps: {
    textColor: colors.neutral.neutral,
    iconSize: metrics.buttonIconSize
  },
};

const buttonStyles = {
  primary: {
    ...bases.baseProps,
    style: ({ pressed }) => {
      return {
        ...bases.baseStyle,
        backgroundColor: pressed ? colors.master.primary6 : colors.master.primary4,
      }
    },
  },
  secondary: {
    ...bases.baseProps,
    style: ({ pressed }) => {
      return {
        ...bases.baseStyle,
        backgroundColor: pressed ? 'rgba(17, 39, 33, 0.80)' : colors.secondary.secondary10,
      }
    },
  }
};

export { buttonStyles };
