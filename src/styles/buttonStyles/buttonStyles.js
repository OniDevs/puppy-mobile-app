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
  iconBaseStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: metrics.iconButtonPaddingLeft,
    paddingRight: metrics.iconButtonPaddingRight,
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
    base: ({ }) => {
      return {
        ...bases.baseProps,
      }
    },
    style: ({ pressed }) => {
      return {
        ...bases.baseStyle,
        backgroundColor: pressed ? colors.master.primary6 : colors.master.primary4,
      }
    },
  },
  secondary: {
    base: ({ }) => {
      return {
        ...bases.baseProps,
      }
    },
    style: ({ pressed }) => {
      return {
        ...bases.baseStyle,
        backgroundColor: pressed ? 'rgba(17, 39, 33, 0.80)' : colors.secondary.secondary10,
      }
    },
  },
  iconPrimary: {
    base: ({ }) => {
      return {
        ...bases.baseProps,
      }
    },
    style: ({ pressed }) => {
      return {
        ...bases.iconBaseStyle,
        backgroundColor: pressed ? colors.master.primary6 : colors.master.primary4,
      }
    }
  },
  whiteBase: {
    base: ({ pressed }) => {
      return {
        ...bases.baseProps,
        textColor: pressed ? colors.neutral.neutral : colors.neutral.neutral4,
      }
    },
    style: ({ pressed }) => {
      return {
        ...bases.baseStyle,
        backgroundColor: pressed ? colors.secondary.secondary2 : colors.secondary.secondary,
        borderColor: pressed ? colors.secondary.secondary2 : colors.secondary.secondary2,
        borderWidth: pressed ? 0 : metrics.borderWidth,
      }
    }
  },
  primaryRectangle: {
    base: ({ }) => {
      return {
        ...bases.baseProps,
      }
    },
    style: ({ pressed }) => {
      return {
        ...bases.baseStyle,
        borderRadius: metrics.buttonBorderRectangularRadius,
        backgroundColor: pressed ? colors.master.primary6 : colors.master.primary4,
      }
    },
  },
};

export { buttonStyles };
