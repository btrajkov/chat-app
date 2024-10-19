import React from 'react';
import Image from 'next/image'; // For Next.js optimized image loading

const Chat = ({ name, lastMessage, messageSender }) => {
    return (
        <div className="flex items-center p-4 border-b cursor-pointer hover:bg-gray-100">
            {/* Image placeholder */}
            <div className="mr-4">
                <Image
                    src="/placeholder-profile.png" // Replace with the path to the image fetched from your database
                    alt={`${name}'s profile`}
                    width={50} // Width of the image
                    height={50} // Height of the image
                    className="rounded-full object-cover" // Makes the image circular
                />
            </div>
            {/* Name and last message */}
            <div className="flex flex-col">
                <span className="font-bold text-gray-900">{name}</span>
                <span className="text-gray-500">{messageSender}: {lastMessage}</span>
            </div>
        </div>
    );
};

export default Chat;
