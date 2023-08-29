import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from "react-chat-engine-advanced";

const ChatsPage = (props) => {

    const chatProps = useMultiChatLogic(
        'ce73e03d-8ffe-4166-bf2b-a2333a321fc3',
        // eslint-disable-next-line react/prop-types
        props.user.username,
        // eslint-disable-next-line react/prop-types
        props.user.secret
        );

  return <div style = {{ height: '100vh' }}>
    <MultiChatSocket {...chatProps} />
    <MultiChatWindow {...chatProps} style={{height: '100%'}} />

  </div>
};

export default ChatsPage;