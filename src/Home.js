import { useState } from "react";
import FunctionList from "./FunctionList";

const Home = () => {

    const [functions] = useState([
        { title: '📣 Announcements', body: 'Get instant notifications about school holidays, closures, upcoming events, and important updates directly from the administration. Never miss a beat!', description: 'View the latest moments captured in class.', id: 1 },
        { title: '🍎 Daily Menu', body: 'View the comprehensive meal plan including specific meal types (Breakfast, Lunch, Dinner, Snacks), detailed descriptions of what is being served, and crucial allergen information. We ensure transparency in your child\'s nutrition every day.', description: 'Check what\'s being served for lunch and snacks.', id: 2 },
        { title: '📸 Photo Gallery', body: 'Browse through secured albums of daily activities, events, and special moments captured by teachers. Share these memories with your family safely.', description: 'Receive important school updates and reminders.', id: 3 }
    ]);

    return (
        <div className="home">
            <FunctionList functions={functions} title='All Functionality:' />
        </div>
    );
}

export default Home;