import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
    const [location, setLocation] = useState('');
    const [floor, setFloor] = useState('');

    const locations = {
        'W.E.B. Du Bois Library': {
            'E': "Info Desk; Procrastination Station Café",
            '2': "Quiet Study; RECESS",
            '3': "Staff Offices",
            '4': "Library Administration Offices",
            '5': "Graduate Commons & Quiet Study",
            '6': "Digital Scholarship Center",
            '7': "Instructional Media Lab",
            '8': "Books: K, P-PQ5999",
            '9': "Books: M, N, TR Art, Photography, Music, Media, group study",
            '10': "Learning Resource Center",
            '11': "Books: PQ6000-PT",
            '12': "Writing Program",
            '13': "Writing Program",
            '14': "Books: DS-DZ, E, F",
            '15': "Books: C, D-DR",
            "16": "IT Classrooms",
            "17": "Books: A, HG2000-HZ, J",
            "18": "Books: G, H-HG1999",
            "19": "Scholarly Communication, OFD conf. Room",
            "20": "Books: B, L; Theses and Dissertations",
            "21": "Juvenile Collection; East Asian & Near Eastern Collections; Group Study Space",
            "22": "East Asian Reference Collection; W. E. B. Du Bois Center",
            "23": "Books: Q, R, S, T (not TR), U, V; Best View",
            "24": "Archives Storage",
            "25": "Robert S. Cox Special Collections & University Archives",
            "26": "Conf. Rm; Faculty & Librarian Commons, OFD",
        },
        'Isenberg Innovation Hub': {
            'Ground Floor': ['G26', 'G31', 'G35', '117', '118', '119', '122', '123', '124', '125', '127', '129'],
            'First Floor': ['Learning Commons (North Wing)', 'N135', 'N145'],
            'Second Floor': ['Breakout Room (North Wing)'],
        },
        'South College': {
            'Central Atrium': ['Central Atrium'],
        },
    };

    const [availability, setAvailability] = useState({ available: 46, capacity: 50 });

    useEffect(() => {
        fetch("http://localhost:4000/availability")
            .then(response => response.json())
            .then(data => setAvailability(data))
            .catch(error => console.error("Error fetching availability:", error));
    }, []);

    return (
        <div className="App">
            <h1 className="title">StudySphere</h1>
            <title>StudySphere</title>
            {!location && (
                <div className="options">
                    {Object.keys(locations).map(loc => (
                        <button key={loc} className="option-btn" onClick={() => setLocation(loc)}>
                            {loc}
                        </button>
                    ))}
                </div>
            )}

            {location === 'Isenberg Innovation Hub' && (
                <div className="floors">
                    {Object.keys(locations[location]).map(f => (
                        <button key={f} className="floor-btn" onClick={() => setFloor(f)}>
                            {f}
                        </button>
                    ))}
                </div>
            )}

            {location === 'South College' && (
                <div className="floors">
                    {Object.keys(locations[location]).map(f => (
                        <button key={f} className="floor-btn" onClick={() => setFloor(f)}>
                            {f}
                        </button>
                    ))}
                </div>
            )}

            {location === 'W.E.B. Du Bois Library' && (
                <div className="floors">
                    <div className='floor-card-container'>
                        {Object.keys(locations[location]).map(f => (
                            <div key={f} className="floor-card">
                                <h2>{f}</h2>
                                <p>{locations['W.E.B. Du Bois Library'][f]}</p>
                                <p>Availability: {availability.available}/{availability.capacity}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {floor && (
                <div className="rooms">
                    <button className="back-button" onClick={() => setFloor('')}>← Back to Floors</button>
                    <h2>{floor}</h2>
                    {locations[location][floor].map((room, idx) => (
                        <div key={idx} className="room-card">
                            <h3>{room}</h3>
                            <p>Availability: {availability.available}/{availability.capacity}</p>
                        </div>
                    ))}
                </div>
            )}

            {location && !floor && (
                <button className="back-button" onClick={() => setLocation('')}>← Back to Locations</button>
            )}
        </div>
    );
}

export default App;