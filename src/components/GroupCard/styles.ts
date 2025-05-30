import { TouchableOpacity } from "react-native";
import { UsersThree } from "phosphor-react-native";
import styled, { css, DefaultTheme } from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 90px;
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  padding: 24px;
  margin-bottom: 12px;
`;

export const Title = styled.Text`
  ${({ theme }: { theme: DefaultTheme }) => css`
  font-size: ${theme.FONT_SIZE.MD}px;
  color: ${theme.COLORS.GRAY_200};
  font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;

export const Icon = styled(UsersThree).attrs(({ theme }: { theme: DefaultTheme }) => ({
  color: theme.COLORS.GREEN_700,
  size: 32,
  weight: "fill",
}))`
  margin-right: 20px;
`;
