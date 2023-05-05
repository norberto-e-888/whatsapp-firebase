import { ViewStyle } from "react-native/types";

export type Component<P = {}> = React.FC<
  P & { children?: React.ReactNode; style?: ViewStyle }
>;
