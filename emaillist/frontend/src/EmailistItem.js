import React from 'react';

function EmailistItem({firstName,lastName,email}) {
    return (
        <li>
            {firstName + lastName}
            <br/>
            {email}
        </li>
    );
}

export default EmailistItem;