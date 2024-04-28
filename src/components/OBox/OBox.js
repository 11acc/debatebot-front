
import React from "react";
import ModsOnline from '../ModsOnline/ModsOnline'
import UsersOnline from '../UsersOnline/UsersOnline'

import './OBox.css';
import { ReactComponent as PplIcon } from '../../assets/ppl.svg';

const OBox = ({ usertype, users }) => {
    return (
        <div className="on_box">
            <div className="on_header">
                <PplIcon className="icon" />
                {usertype} online
            </div>
            {/* if condition to show mods or users in the obox depending on input */}
            {usertype === "Moderators" ? (
                users.map(mod => (
                    <ModsOnline key={mod.id} name={mod.name} title={mod.title} pfp={mod.pfp} />
                ))
            ) : (
                <UsersOnline users={users} />
            )}
        </div>
    );
};

export default OBox;