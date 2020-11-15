import React from 'react';
import ReactDOM from 'react-dom';
// import '../pages/chat/chat.css';

import Message from './Message.js';
import OrderInfo from '../comps/OrderInfo/index.js';
import Divider from '../comps/Divider';

class Chatroom extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            chats: [{
                username: "Kevin Hsu",
                content: <p>Hello!, I'm intereted in your post.</p>,
                img: "user.png",
            }, {
                username: "Alice Chen",
                content: <p>Hello</p>,
                img: "user.png",
            
            }]
        };

        this.submitMessage = this.submitMessage.bind(this);
    }

    componentDidMount() {
        this.scrollToBot();
    }

    componentDidUpdate() {
        this.scrollToBot();
    }

    scrollToBot() {
        ReactDOM.findDOMNode(this.refs.chats).scrollTop = ReactDOM.findDOMNode(this.refs.chats).scrollHeight;
    }

    submitMessage(e) {
        e.preventDefault();

        this.setState({
            chats: this.state.chats.concat([{
                username: "Kevin Hsu",
                content: <p>{ReactDOM.findDOMNode(this.refs.msg).value}</p>,
                img: "user.png",
            }])
        }, () => {
            ReactDOM.findDOMNode(this.refs.msg).value = "";
        });
    }

    render() {
        const username = "Kevin Hsu";
        const { chats } = this.state;

        return (
            <div className="chatroom">
                <OrderInfo />
                <Divider/>
                <br/>
                <ul className="chats" ref="chats">
                    {
                        chats.map((chat) => 
                            <Message chat={chat} user={username} />
                        )
                    }
                </ul>
                <form className="input" onSubmit={(e) => this.submitMessage(e)}>
                    <input type="text" ref="msg" />
                    <input type="submit" value="Send" />
                </form>
            </div>
        );
    }
}

export default Chatroom;