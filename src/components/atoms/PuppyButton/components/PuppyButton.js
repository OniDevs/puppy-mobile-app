import { Pressable } from 'react-native';
import { Label } from '../../fonts';
import { FontAwesome5 } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';

const PuppyButton = ({
  themeStyle = 'primary',
  children = 'Press Me',
  style,
  leftIcon = null,
  rightIcon = null,
  isIconButton = false }) => {

  const { themeStyles } = useTheme();

  return (
    <Pressable
      style={({ pressed }) => [{
        ...themeStyles.buttonStyles[themeStyle].style({ pressed }),
        ...style
      }]}>{({ pressed }) =>
        <Label style={{ color: themeStyles.buttonStyles[themeStyle].textColor }}>
          <Choose>
            <When condition={isIconButton}>
              <FontAwesome5
                name={leftIcon || rightIcon}
                size={themeStyles.buttonStyles[themeStyle].iconSize}
                color={themeStyles.buttonStyles[themeStyle].textColor} />
            </When>
            {/* //* if not icon button is a button with text */}
            <Otherwise>
              <If condition={leftIcon}>
                <FontAwesome5
                  name={leftIcon}
                  size={themeStyles.buttonStyles[themeStyle].iconSize}
                  color={themeStyles.buttonStyles[themeStyle].textColor} />
                {' '}
                {' '}
              </If>
              <Label style={{ textDecorationLine: pressed ? 'underline' : '' }}>{children}</Label>
              <If condition={rightIcon}>
                {' '}
                {' '}
                <FontAwesome5
                  name={rightIcon}
                  size={themeStyles.buttonStyles[themeStyle].iconSize}
                  color={themeStyles.buttonStyles[themeStyle].textColor} />
              </If>
            </Otherwise>
          </Choose>
        </Label>}
    </Pressable>
  );
}

export { PuppyButton };
