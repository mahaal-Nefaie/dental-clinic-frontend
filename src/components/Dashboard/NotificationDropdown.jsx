import { useEffect, useState } from "react";

import {
    getNotifications,
    getUnreadNotificationCount,
    markNotificationAsRead
} from "../../services/api";

import {
    Bell,
    CalendarDays
} from "lucide-react";

//import "./NotificationDropdown.css";


function NotificationDropdown() {

    const [notifications, setNotifications] =
        useState([]);

    const [unreadCount, setUnreadCount] =
        useState(0);

    const [showNotifications, setShowNotifications] =
        useState(false);


    useEffect(() => {

        const token =
            localStorage.getItem("token");

        if (!token) return;


        const loadNotifications = async () => {

            try {

                const notificationsData =
                    await getNotifications(token);

                setNotifications(
                    notificationsData
                );


                const unreadCountData =
                    await getUnreadNotificationCount(
                        token
                    );

                setUnreadCount(
                    unreadCountData
                );

            } catch (error) {

                console.error(error);

            }

        };


        loadNotifications();

    }, []);


    const handleNotificationClick = async (
        notification
    ) => {

        if (notification.isRead) {
            return;
        }


        try {

            const token =
                localStorage.getItem("token");

            if (!token) return;


            await markNotificationAsRead(
                token,
                notification.notificationId
            );


            setNotifications(
                notifications.map(item =>
                    item.notificationId ===
                    notification.notificationId
                        ? {
                            ...item,
                            isRead: true
                        }
                        : item
                )
            );


            setUnreadCount(
                previousCount =>
                    Math.max(
                        previousCount - 1,
                        0
                    )
            );


        } catch (error) {

            console.error(error);

        }
    };


    return (

        <div className="notification-wrapper">

            <button
                className="notification-button"
                type="button"
                aria-label="Notifications"
                onClick={() =>
                    setShowNotifications(
                        !showNotifications
                    )
                }
            >

                <Bell size={19} />


                {unreadCount > 0 && (

                    <span className="notification-badge">
                        {unreadCount}
                    </span>

                )}

            </button>


            {showNotifications && (

                <div className="notification-dropdown">

                    <div className="notification-header">

                        <h3>
                            Notifications
                        </h3>

                        <span>
                            {unreadCount}
                        </span>

                    </div>


                    {notifications.length === 0 ? (

                        <div className="no-notifications">

                            <Bell size={22} />

                            <p>
                                No notifications
                            </p>

                        </div>

                    ) : (

                        notifications.map(
                            notification => (

                                <div
                                    className={
                                        notification.isRead
                                            ? "notification-item"
                                            : "notification-item unread"
                                    }
                                    key={
                                        notification.notificationId
                                    }
                                    onClick={() =>
                                        handleNotificationClick(
                                            notification
                                        )
                                    }
                                >

                                    <div className="notification-icon">

                                        <CalendarDays
                                            size={18}
                                        />

                                    </div>


                                    <div className="notification-content">

                                        <strong>
                                            {
                                                notification.title
                                            }
                                        </strong>

                                        <p>
                                            {
                                                notification.message
                                            }
                                        </p>

                                        <small>
                                            {
                                                new Date(
                                                    notification.createdAt
                                                ).toLocaleString()
                                            }
                                        </small>

                                    </div>

                                </div>

                            )
                        )

                    )}

                </div>

            )}

        </div>
    );
}


export default NotificationDropdown;