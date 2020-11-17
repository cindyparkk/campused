import React from 'react';

const Message = ({chat, user}) => (
    <div>
    <li className={`chat ${user === chat.username ? "right" : "left"}`}>
        {user !== chat.username
            && <img src={chat.img} alt={`${chat.username}'s profile pic`} />
        }
        {chat.content}
    </li>
    </div>
);

Message.defaultProps = {
    chat: null,
    user: null
}

export default Message;