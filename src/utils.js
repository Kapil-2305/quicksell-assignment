import backlog from './assets/Backlog.svg';
import todo from './assets/To-do.svg';
import inprogress from './assets/in-progress.svg';
import done from './assets/Done.svg';
import canceled from './assets/Cancelled.svg';

import nopriority from './assets/No-priority.svg';
import low from './assets/Img - Low Priority.svg';
import medium from './assets/Img - Medium Priority.svg';
import high from './assets/Img - High Priority.svg';
import urgent from './assets/SVG - Urgent Priority colour.svg';

export const groupTicketsByStatus = (tickets) => {
    const groups = tickets.reduce((result, ticket) => {
        if (!result[ticket.status]) {
            result[ticket.status] = [];
        }
        result[ticket.status].push(ticket);
        return result;
    }, { "Backlog": [], "Todo": [], "In progress": [], "Done": [], "Canceled": [] });

    return groups;
};

export const groupTicketsByPriority = (tickets) => {
    const groups = tickets.reduce((result, ticket) => {
        const priority = getPriorityLabel(ticket.priority);
        if (!result[priority]) {
            result[priority] = [];
        }
        result[priority].push(ticket);
        return result;
    }, { "No priority": [], "Urgent": [], "High": [], "Medium": [], "Low": [] });

    return groups;
};

export const groupTicketsByUserId = (tickets) => {
    const groups = tickets.reduce((result, ticket) => {
        if (!result[ticket.userId]) {
            result[ticket.userId] = [];
        }
        result[ticket.userId].push(ticket);
        return result;
    }, {});

    return groups;
};

export const mapUsersByUserId = (users) => {
    const group = users.reduce((accumulator, user) => {
        accumulator[user.id] = user;
        return accumulator;
    }, {});

    return group;
};

const getPriorityLabel = (priority) => {
    switch (priority) {
        case 0: return "No priority";
        case 1: return "Low";
        case 2: return "Medium";
        case 3: return "High";
        case 4: return "Urgent";
        default: return "NA";
    }
};

const orderByPriority = (tickets) => tickets.sort((a, b) => a.priority > b.priority ? -1 : 1);
const orderByTitle = (tickets) => tickets.sort((a, b) => a.title < b.title ? -1 : 1);

export const loadGrid = (tickets, grouping, ordering) => {
    let orderedTickets;
    if (ordering === "priority") {
        orderedTickets = orderByPriority(tickets);
    } else {
        orderedTickets = orderByTitle(tickets);
    }

    switch (grouping) {
        case "status": return groupTicketsByStatus(orderedTickets);
        case "priority": return groupTicketsByPriority(orderedTickets);
        case "user": return groupTicketsByUserId(orderedTickets);
        default: return groupTicketsByUserId(orderedTickets);
    }
};

export const getStatusIcon = (priority) => {
    switch (priority) {
        case "Backlog": return <img src={backlog} />
        case "Todo": return <img src={todo} />
        case "In progress": return <img src={inprogress} />
        case "Done": return <img src={done} />
        case "Canceled": return <img src={canceled} />
        default: return <img src={canceled} />
    }
}

export const getPriorityIcon = (priority) => {
    switch (priority) {
        case "No priority": return <img src={nopriority} />
        case "Low": return <img src={low} />
        case "Medium": return <img src={medium} />
        case "High": return <img src={high} />
        case "Urgent": return <img src={urgent} />
        default: return <img src={urgent} />
    }
}