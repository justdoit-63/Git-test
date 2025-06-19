        const examDates = [
            { date: '2025-06-26', subject: 'Mathematics', day: 'Thursday' },
            { date: '2025-06-28', subject: 'English', day: 'Saturday' },
            { date: '2025-06-30', subject: 'Social Science', day: 'Monday' },
            { date: '2025-07-01', subject: 'Computer Science', day: 'Tuesday' },
            { date: '2025-07-03', subject: 'Science', day: 'Thursday (Early Morning)' },
            { date: '2025-07-04', subject: 'Hindi', day: 'Friday' }
        ];

        const studyPlan = {
            '2025-06-16': [
                { time: '6:30 PM - 8:00 PM', subject: 'Mathematics', topics: 'Real Numbers - Rational & Irrational Numbers', priority: 'high' },
                { time: '8:15 PM - 9:15 PM', subject: 'English', topics: 'A Letter to God - Character Analysis', priority: 'medium' },
                { time: '9:30 PM - 10:00 PM', subject: 'Science', topics: 'Chemical Reactions - Types of Reactions', priority: 'medium' }
            ],
            '2025-06-17': [
                { time: '6:30 PM - 8:30 PM', subject: 'Mathematics', topics: 'Real Numbers - Euclid\'s Division Algorithm (Extended)', priority: 'high' },
                { time: '8:45 PM - 9:30 PM', subject: 'Social Science', topics: 'Partition of Bengal - Background & Causes', priority: 'medium' },
                { time: '9:45 PM - 10:15 PM', subject: 'Hindi', topics: 'पद-युग्म और लिंग', priority: 'low' }
            ],
            '2025-06-18': [
                { time: '6:30 PM - 8:30 PM', subject: 'Mathematics', topics: 'Polynomials - Types and Operations (Extended)', priority: 'high' },
                { time: '8:45 PM - 9:30 PM', subject: 'English', topics: 'Nelson Mandela - Themes and Context', priority: 'medium' },
                { time: '9:45 PM - 10:15 PM', subject: 'Computer Science', topics: 'Introduction to Computer Networks', priority: 'medium' }
            ],
            '2025-06-19': [
                { time: '6:30 PM - 8:30 PM', subject: 'Mathematics', topics: 'Triangles - Similarity and Congruence (Extended)', priority: 'high' },
                { time: '8:45 PM - 9:30 PM', subject: 'Science', topics: 'Life Processes - Nutrition and Respiration', priority: 'medium' },
                { time: '9:45 PM - 10:15 PM', subject: 'Hindi', topics: 'वन-मार्ग में और मुहावरे', priority: 'low' }
            ],
            '2025-06-20': [
                { time: '6:30 PM - 8:30 PM', subject: 'Mathematics', topics: 'Proportion and Square Roots (Extended)', priority: 'high' },
                { time: '8:45 PM - 9:30 PM', subject: 'Social Science', topics: 'Swadeshi Movement - Impact and Significance', priority: 'medium' },
                { time: '9:45 PM - 10:15 PM', subject: 'English', topics: 'A Tiger in the Zoo - Poetic Devices', priority: 'low' }
            ],
            '2025-06-21': [
                { time: '10:00 AM - 12:30 PM', subject: 'Mathematics', topics: 'Complete Revision - All Chapters', priority: 'high' },
                { time: '4:00 PM - 6:00 PM', subject: 'Mathematics', topics: 'Practice Papers and Problem Solving', priority: 'high' },
                { time: '7:00 PM - 8:00 PM', subject: 'English', topics: 'Amanda - Poem Analysis', priority: 'medium' }
            ],
            '2025-06-22': [
                { time: '10:00 AM - 12:30 PM', subject: 'Mathematics', topics: 'Final Revision and Mock Tests', priority: 'high' },
                { time: '6:30 PM - 8:00 PM', subject: 'Mathematics', topics: 'Mensuration and Factorization Review', priority: 'high' },
                { time: '8:15 PM - 9:00 PM', subject: 'Science', topics: 'Light - Reflection Laws', priority: 'medium' }
            ],
            '2025-06-23': [
                { time: '6:30 PM - 8:00 PM', subject: 'Mathematics', topics: 'Indices, Power, and Cube Roots', priority: 'high' },
                { time: '8:15 PM - 9:15 PM', subject: 'English', topics: 'Complete Literature Review', priority: 'medium' },
                { time: '9:30 PM - 10:00 PM', subject: 'Hindi', topics: 'आओ उद्यमी बनें और उपसर्ग', priority: 'low' }
            ],
            '2025-06-24': [
                { time: '6:30 PM - 8:30 PM', subject: 'Mathematics', topics: 'Final Practice and Weak Areas', priority: 'high' },
                { time: '8:45 PM - 9:30 PM', subject: 'Computer Science', topics: 'Loops in C Programming', priority: 'medium' },
                { time: '9:45 PM - 10:15 PM', subject: 'General Review', topics: 'Quick revision of all subjects', priority: 'low' }
            ],
            '2025-06-25': [
                { time: '6:30 PM - 7:30 PM', subject: 'Mathematics', topics: 'Light Revision and Formula Practice', priority: 'high' },
                { time: '7:45 PM - 8:30 PM', subject: 'Relaxation', topics: 'Early sleep for exam tomorrow', priority: 'high' }
            ],
            '2025-06-27': [
                { time: '6:30 PM - 8:00 PM', subject: 'English', topics: 'A Letter to God - Complete Analysis', priority: 'high' },
                { time: '8:15 PM - 9:15 PM', subject: 'English', topics: 'Nelson Mandela - Key Points', priority: 'high' },
                { time: '9:30 PM - 10:00 PM', subject: 'Science', topics: 'Chemical Reactions Review', priority: 'medium' }
            ],
            '2025-06-29': [
                { time: '6:30 PM - 7:30 PM', subject: 'Social Science', topics: 'Rise of Gandhi - Key Events', priority: 'high' },
                { time: '7:45 PM - 8:30 PM', subject: 'Social Science', topics: 'Indian Democracy - Features', priority: 'high' },
                { time: '8:45 PM - 9:15 PM', subject: 'Economics', topics: 'Money and Banking Basics', priority: 'medium' }
            ]
        };

        let currentDateIndex = 0;
        const startDate = new Date('2025-06-16');
        
        function getDaysUntilExam(examDate) {
            const today = new Date();
            const exam = new Date(examDate);
            const diffTime = exam - today;
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            return diffDays;
        }

        function displayExamDates() {
            const container = document.getElementById('examDates');
            container.innerHTML = '';
            
            examDates.forEach(exam => {
                const daysLeft = getDaysUntilExam(exam.date);
                const card = document.createElement('div');
                card.className = 'exam-card';
                
                let statusText = '';
                if (daysLeft < 0) {
                    statusText = 'Completed';
                } else if (daysLeft === 0) {
                    statusText = 'Today!';
                } else {
                    statusText = `${daysLeft} days left`;
                }
                
                card.innerHTML = `
                    <div class="exam-date">${exam.day}</div>
                    <div class="exam-subject">${exam.subject}</div>
                    <div class="days-left">${statusText}</div>
                `;
                container.appendChild(card);
            });
        }

        function formatDate(date) {
            return date.toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            });
        }

        function displayDailySchedule() {
            const date = new Date(startDate);
            date.setDate(date.getDate() + currentDateIndex);
            const dateString = date.toISOString().split('T')[0];
            
            document.getElementById('currentDate').textContent = formatDate(date);
            
            const container = document.getElementById('dailySchedule');
            const schedule = studyPlan[dateString] || [];
            
            if (schedule.length === 0) {
                container.innerHTML = '<div class="time-slot"><div>No study schedule for this day. Take a break or do light revision!</div></div>';
                return;
            }
            
            container.innerHTML = '';
            schedule.forEach((slot, index) => {
                const slotDiv = document.createElement('div');
                slotDiv.className = 'time-slot';
                slotDiv.innerHTML = `
                    <div class="time-info">
                        <div class="time">${slot.time}</div>
                        <div class="subject">${slot.subject}</div>
                        <div class="topics">${slot.topics}</div>
                    </div>
                    <div class="priority ${slot.priority}">${slot.priority.toUpperCase()}</div>
                `;
                container.appendChild(slotDiv);
            });
        }

        function changeDate(direction) {
            currentDateIndex += direction;
            if (currentDateIndex < 0) currentDateIndex = 0;
            if (currentDateIndex > 20) currentDateIndex = 20; // Limit to 3 weeks
            displayDailySchedule();
        }
        // Special code for dev viewers 2010

        function displayProgress() {
            const subjects = ['Mathematics', 'English', 'Science', 'Social Science', 'Hindi', 'Computer Science'];
            const progress = {
                'Mathematics': 0o0,
                'English': 0o0,
                'Science': 0o0,
                'Social Science': 0o0,
                'Hindi': 0o0,
                'Computer Science': 0o0
            };
            
            const container = document.getElementById('progressSection');
            container.innerHTML = '';
            
            subjects.forEach(subject => {
                const subjectDiv = document.createElement('div');
                subjectDiv.className = 'subject-progress';
                subjectDiv.innerHTML = `
                    <h3>${subject} - ${progress[subject]}% Complete</h3>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${progress[subject]}%"></div>
                    </div>
                `;
                container.appendChild(subjectDiv);
            });
        }

        // Initialize the planner
        displayExamDates();
        displayDailySchedule();
        displayProgress();
        
        // Update every hour
        setInterval(() => {
            displayExamDates();
        }, 3600000);