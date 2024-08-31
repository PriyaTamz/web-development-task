const express = require('express');
const app = express();
app.use(express.json());

let rooms = [
    {
        id: 1,
        name: "Conference Room A",
        seats: 50,
        amenities: ["Projector", "Whiteboard", "Wi-Fi"],
        pricePerHour: 200
    },
    {
        id: 2,
        name: "Meeting Room B",
        seats: 20,
        amenities: ["TV", "Conference Phone"],
        pricePerHour: 100
    },
    {
        id: 3,
        name: "Event Hall C",
        seats: 100,
        amenities: ["Stage", "Sound System", "Lighting"],
        pricePerHour: 500
    }
];

let bookings = [
    {
        bookingId: 1,
        customerName: "John",
        date: "2024-09-01",
        startTime: "10:00",
        endTime: "12:00",
        roomId: 1,
        bookingDate: "2024-08-25",
        bookingStatus: "Booked"
    },
    {
        bookingId: 2,
        customerName: "Michal",
        date: "2024-09-02",
        startTime: "14:00",
        endTime: "16:00",
        roomId: 3,
        bookingDate: "2024-08-26",
        bookingStatus: "Booked"
    },
    {
        bookingId: 3,
        customerName: "Alice",
        date: "2024-09-03",
        startTime: "09:00",
        endTime: "10:30",
        roomId: 2,
        bookingDate: "2024-08-27",
        bookingStatus: "Booked"
    }
];

app.get('/rooms', (req, res) => {
    try {
        res.json(rooms);
    } catch (error) {
        res.json({ message: "Rooms Not Found" });
    }
});

app.post('/rooms', (req, res) => {
    const { name, seats, amenities, pricePerHour } = req.body;
    const newRoom = {
        id: rooms.length + 1,
        name,
        seats,
        amenities,
        pricePerHour
    };
    rooms.push(newRoom);
    res.json(newRoom);
});

app.get('/bookings', (req, res) => {
    try {
        res.json(bookings);
    } catch (error) {
        res.json({ message: "Bookings Not Found" });
    }
});

app.post('/bookings', (req, res) => {
    const { customerName, date, startTime, endTime, roomId } = req.body;

    const newBooking = {
        bookingId: bookings.length + 1,
        customerName,
        date,
        startTime,
        endTime,
        roomId,
        bookingDate: new Date(),
        bookingStatus: 'Booked'
    };

    bookings.push(newBooking);
    res.json(newBooking);
});

app.get('/listrooms', (req, res) => {
    const roomsBookingData = bookings.filter(booking => booking.bookingStatus === "Booked").map(booking => {
        const room = rooms.find(room => room.id === booking.roomId);

        return {
            roomName: room.name,
            status: "Booked",
            customerName: booking.customerName,
            date: booking.date,
            startTime: booking.startTime,
            endTime: booking.endTime
        };
    });

    res.json(roomsBookingData);
});

app.get('/customers', (req, res) => {
    const customersWithBookings = bookings.map(booking => {
        const room = rooms.find(room => room.id === booking.roomId);

        return {
            customerName: booking.customerName,
            roomName: room.name, 
            date: booking.date,
            startTime: booking.startTime,
            endTime: booking.endTime
        };
    });

    res.json(customersWithBookings);
});


app.get('/customers/:customerName/bookings', (req, res) => {
    const { customerName } = req.params;

    const customerBookings = bookings
        .filter(booking => booking.customerName.toLowerCase() === customerName.toLowerCase())
        .map(booking => ({
            customerName: booking.customerName,
            roomName: rooms.find(room => room.id === booking.roomId).name,
            date: booking.date,
            startTime: booking.startTime,
            endTime: booking.endTime,
            bookingId: booking.bookingId,
            bookingDate: booking.bookingDate,
            bookingStatus: booking.bookingStatus
        }));

    res.json(customerBookings);
});

app.listen(3001, () => {
    console.log("Server is running on http://localhost:3001");
});
