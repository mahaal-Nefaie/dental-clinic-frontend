import {
    CalendarDays,
    Clock3,
    CircleCheck,
    CheckCircle2
} from "lucide-react";

import "./StatusCards.css";

function StatusCards({ appointments }) {

    const total = appointments.length;

    const pending = appointments.filter(
        appointment => appointment.status === "PENDING"
    ).length;

    const confirmed = appointments.filter(
        appointment => appointment.status === "CONFIRMED"
    ).length;

    const completed = appointments.filter(
        appointment => appointment.status === "COMPLETED"
    ).length;


    const cards = [
        {
            title: "Total Appointments",
            value: total,
            color: "blue",
            icon: CalendarDays
        },
        {
            title: "Pending",
            value: pending,
            color: "orange",
            icon: Clock3
        },
        {
            title: "Confirmed",
            value: confirmed,
            color: "green",
            icon: CircleCheck
        },
        {
            title: "Completed",
            value: completed,
            color: "purple",
            icon: CheckCircle2
        }
    ];


    return (
        <section className="status-cards">

            {cards.map(card => {

                const Icon = card.icon;

                return (
                    <div
                        className={`status-card ${card.color}`}
                        key={card.title}
                    >

                        <div className="status-card-top">

                            <div className="status-card-icon">
                                <Icon size={19} />
                            </div>

                            <span>
                                {card.title}
                            </span>

                        </div>

                        <strong>
                            {card.value}
                        </strong>

                    </div>
                );
            })}

        </section>
    );
}

export default StatusCards;