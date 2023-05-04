export type ChatSettingsParams = { chatId: string };

export type RootStackParamList = {
  Home: undefined;
  Chat: ChatSettingsParams;
  ChatSettings: ChatSettingsParams;
};

export type TabParamList = {
  ChatList: undefined;
  Chat: ChatSettingsParams;
  ChatSettings: ChatSettingsParams;
  Settings: undefined;
};
