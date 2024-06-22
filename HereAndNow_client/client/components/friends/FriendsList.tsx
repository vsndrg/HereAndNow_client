import React, { ChangeEvent, useState } from 'react';

export function FriendsList() {
    interface Friend {
        id: number;
        username: string;
        isFriend: boolean;
    }

    const [friends, setFriends] = useState<Friend[]>([
        { id: 1, username: 'vsndrg', isFriend: true },
        { id: 2, username: 'mihanzales', isFriend: true },
        { id: 3, username: 'wittmann', isFriend: false }
    ]);
    const [searchTerm, setSearchTerm] = useState<String>('');
    const [searchResults, setSearchResults] = useState<Friend[]>([]);

    const handleAddFriend = (id: number) => {
        const upadtedFriends = friends.map((friend) => {
            if (friend.id === id) {
                return { ...friend, isFriend: true };
            }
            return friend;
        });
        setFriends(upadtedFriends);
    };

    const handleRemoveFriend = (id: number) => {
        const updatedFriends = friends.map((friend) => {
            if (friend.id === id) {
                return { ...friend, isFriend: false };
            }
            return friend;
        });
        setFriends(updatedFriends);
    };

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchTerm(value);

        const results = friends.filter((friend) => friend.username.toLowerCase().includes(value.toLowerCase()));
    };

    return (
        <div className="fiends-list">
            <ul>
                {searchTerm === ''
                    ? friends.map((friend) => (
                          <li key={friend.id}>
                              {friend.username}
                              {friend.isFriend ? (
                                  <button
                                      onClick={() => {
                                          handleRemoveFriend(friend.id);
                                      }}
                                  >
                                      Remove
                                  </button>
                              ) : (
                                  <button
                                      onClick={() => {
                                          handleAddFriend(friend.id);
                                      }}
                                  >
                                      Add
                                  </button>
                              )}
                          </li>
                      ))
                    : searchResults.map((result) => (
                          <li key={result.id}>
                              {result.username}
                              {result.isFriend ? (
                                  <button onClick={() => {}}>Remove</button>
                              ) : (
                                  <button onClick={() => {}}>Add</button>
                              )}
                          </li>
                      ))}
            </ul>
        </div>
    );
}
