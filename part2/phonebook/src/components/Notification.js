import React from 'react'

const Notification = ({ notification }) => {

    const errorStyle = {
        color: 'red',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    const successStyle = {
        color: 'green',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    if (notification === null) return null
    else {
        let notificationType = null
        
        switch (notification.type) {
            case 'error': notificationType = errorStyle; break;
            case 'success': notificationType = successStyle;  break;
            default: notificationType = null
        }
        return <div style={notificationType}> {notification.message} </div>
    }
}

export default Notification