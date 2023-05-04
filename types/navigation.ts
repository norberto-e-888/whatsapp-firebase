export type ChatSettingsParams = { chatId: string };

export type RootStackParamList = {
  Home: undefined;
  ChatSettings: ChatSettingsParams;
};

export type TabParamList = {
  ChatList: undefined;
  ChatSettings: ChatSettingsParams;
  Settings: undefined;
};
