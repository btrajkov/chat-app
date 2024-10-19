import React from 'react';
import Chat from '../../components/Chat/Chat'; // Assuming Chat component is in components folder

const ChatPanelPage = () => {
    // Mock chat data
    const chats = [
        {
            id: 1,
            name: 'Keely Griffith',
            lastMessage: 'I was there the whole day',
            messageSender: 'You',
        },
        {
            id: 2,
            name: 'John Doe',
            lastMessage: 'What time is the meeting?',
            messageSender: 'John',
        },
        {
            id: 3,
            name: 'Jane Smith',
            lastMessage: 'Let’s grab lunch tomorrow.',
            messageSender: 'You',
        },
    ];

    return (
        <div className="max-w-md mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Chats</h1>
            <div className="space-y-4">
                {/* Render each chat using the Hcat component */}
                {chats.map((chat) => (
                    <Chat
                        key={chat.id}
                        name={chat.name}
                        lastMessage={chat.lastMessage}
                        messageSender={chat.messageSender}
                    />
                ))}
            </div>
        </div>
    );
};

export default ChatPanelPage;
