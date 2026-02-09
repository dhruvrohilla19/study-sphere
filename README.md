# Study Sphere

Study Sphere is a full-stack web application built to provide **real-time room occupancy updates** to help students identify available study spaces. The project was developed during a 24-hour hackathon and focuses on low-latency updates, hardware–software integration, and a simple, responsive user experience.

## Overview

Finding open study spaces on campus can be difficult, especially during peak hours. Study Sphere addresses this problem by collecting live occupancy data from ultrasonic sensors installed in rooms and displaying the information through a web interface. The system is designed to be fast, reliable, and easy to use so students can quickly check room availability.

## Tech Stack

- **Frontend:** React  
- **Backend:** Node.js, Express  
- **Hardware Integration:** Ultrasonic sensors with a custom hardware API  

## How It Works

Ultrasonic sensors detect room occupancy and send data to the backend through a custom hardware API. The backend processes and aggregates this data, then exposes it through REST endpoints. The React frontend retrieves these updates and displays room availability in near real time, with end-to-end response latency under 200 ms during testing.

## Challenges & Learnings

A major challenge was handling hardware–software synchronization issues under tight hackathon constraints. Early versions experienced inconsistent sensor updates and delayed UI refreshes. Through iterative debugging and improvements to data handling, the system achieved more reliable updates and improved UI load performance.

This project provided hands-on experience with integrating hardware and software systems and highlighted the importance of designing for real-world constraints, testing early, and making pragmatic trade-offs under time pressure.

## Future Improvements

- Support for additional sensor types  
- Push-based updates using WebSockets  
- Historical occupancy tracking and analytics  
