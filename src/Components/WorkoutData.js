const WorkoutData = {
    Monday: [ ],
    Tuesday: [
        {
            name: "Chest Day",
            exercises: [
                {
                    name: "Barbell Bench Press",
                    sets: [
                        { weight: "50 lb", reps: "5" },
                        { weight: "60 lb", reps: "5" },
                        { weight: "70 lb", reps: "5" },
                    ],
                },
                {
                    name: "Exercise B",
                    sets: [
                        { weight: "40 lb", reps: "10" },
                    ],
                },
            ],
        },
    ],
    Wednesday: [
        {
            name: "Leg Day",
            exercises: [
                {
                    name: "Exercise C",
                    sets: [
                        { weight: "30 lb", reps: "6"},
                        { weight: "40 lb", reps: "5"},
                        { weight: "50 lb", reps: "5"},
                    ],
                },
            ],
        },
        {
            name: "Arm Day",
            exercises: [
                {
                    name: "Exercise F",
                    sets: [
                        { weight: "60 lb", reps: "6"},
                    ],
                },
            ],
        },
    ],
};

export default WorkoutData;