import { SafeAreaView } from 'react-native-safe-area-context'
import styled from "styled-components/native";
import { DefaultTheme } from "styled-components";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.GRAY_600};
  padding: 24px;
`;
