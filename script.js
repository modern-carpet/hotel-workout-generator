// Refined Exercise Database
const exerciseDatabase = {
    exercises: [
        // Bodyweight Exercises
        { name: "Push-ups", type: "strength", muscleGroup: "chest", equipment: "bodyweight", difficulty: 2, instructions: "Start in a plank position, lower your body until your chest nearly touches the floor, then push back up." },
        { name: "Squats", type: "strength", muscleGroup: "legs", equipment: "bodyweight", difficulty: 2, instructions: "Stand with feet shoulder-width apart, lower your body as if sitting back into a chair, then stand back up." },
        { name: "Lunges", type: "strength", muscleGroup: "legs", equipment: "bodyweight", difficulty: 2, instructions: "Step forward with one leg, lowering your hips until both knees are bent at about 90 degrees. Push back to the starting position." },
        { name: "Mountain Climbers", type: "strength", muscleGroup: "full body", equipment: "bodyweight", difficulty: 2, instructions: "Start in a push-up position and alternately bring your knees towards your chest in a running motion." },
        { name: "Burpees", type: "strength", muscleGroup: "full body", equipment: "bodyweight", difficulty: 3, instructions: "Start standing, drop into a squat, kick your legs back into a push-up position, do a push-up, jump your feet back to your hands, then jump up with hands overhead." },
        { name: "Tricep Dips", type: "strength", muscleGroup: "arms", equipment: "bodyweight", difficulty: 2, instructions: "Using a chair or bench, place your hands shoulder-width apart and lower your body by bending your elbows, then push back up." },
        { name: "Jump Squats", type: "strength", muscleGroup: "legs", equipment: "bodyweight", difficulty: 3, instructions: "Perform a regular squat, but explosively jump up at the top of the movement." },

        // Dumbbell Exercises
        { name: "Dumbbell Bench Press", type: "strength", muscleGroup: "chest", equipment: "dumbbells", difficulty: 2, instructions: "Lie on a bench, hold dumbbells at chest level, press them up until arms are extended, then lower back down." },
        { name: "Dumbbell Rows", type: "strength", muscleGroup: "back", equipment: "dumbbells", difficulty: 2, instructions: "Bend at the hips with a dumbbell in each hand, pull the dumbbells up to your sides, then lower them back down." },
        { name: "Dumbbell Shoulder Press", type: "strength", muscleGroup: "shoulders", equipment: "dumbbells", difficulty: 2, instructions: "Hold dumbbells at shoulder height, press them overhead until arms are fully extended, then lower back down." },
        { name: "Dumbbell Lunges", type: "strength", muscleGroup: "legs", equipment: "dumbbells", difficulty: 2, instructions: "Hold dumbbells at your sides, step forward into a lunge, then push back to the starting position." },
        { name: "Dumbbell Bicep Curls", type: "strength", muscleGroup: "arms", equipment: "dumbbells", difficulty: 1, instructions: "Hold dumbbells at your sides, curl them up towards your shoulders, then lower back down." },
        { name: "Dumbbell Tricep Extensions", type: "strength", muscleGroup: "arms", equipment: "dumbbells", difficulty: 2, instructions: "Hold a dumbbell with both hands above your head, lower it behind your head by bending your elbows, then extend your arms to raise it back up." },
        { name: "Dumbbell Deadlifts", type: "strength", muscleGroup: "back", equipment: "dumbbells", difficulty: 2, instructions: "Hold dumbbells in front of your thighs, hinge at the hips to lower them along your legs, then stand back up." },
        { name: "Dumbbell Flyes", type: "strength", muscleGroup: "chest", equipment: "dumbbells", difficulty: 2, instructions: "Lie on a bench with dumbbells extended above your chest, lower them out to the sides, then bring them back up." },
        { name: "Dumbbell Lateral Raises", type: "strength", muscleGroup: "shoulders", equipment: "dumbbells", difficulty: 2, instructions: "Hold dumbbells at your sides, raise them out to the sides until they're at shoulder level, then lower back down." },
        { name: "Dumbbell Romanian Deadlifts", type: "strength", muscleGroup: "legs", equipment: "dumbbells", difficulty: 2, instructions: "Hold dumbbells in front of your thighs, hinge at the hips to lower them along your legs while keeping your legs straight, then stand back up." },

        // Core Exercises
        { name: "Plank", type: "core", muscleGroup: "core", equipment: "bodyweight", difficulty: 1, instructions: "Hold a push-up position with your forearms on the ground, keeping your body straight." },
        { name: "Russian Twists", type: "core", muscleGroup: "core", equipment: "bodyweight", difficulty: 2, instructions: "Sit on the floor with knees bent, lean back slightly, lift your feet off the ground, and twist your torso from side to side." },
        { name: "Bicycle Crunches", type: "core", muscleGroup: "core", equipment: "bodyweight", difficulty: 2, instructions: "Lie on your back, hands behind your head, alternate bringing opposite elbow to opposite knee while extending the other leg." },
        { name: "Leg Raises", type: "core", muscleGroup: "core", equipment: "bodyweight", difficulty: 2, instructions: "Lie on your back with legs straight, lift your legs up to a 90-degree angle, then lower them back down slowly." },
        { name: "Dumbbell Russian Twists", type: "core", muscleGroup: "core", equipment: "dumbbells", difficulty: 2, instructions: "Sit on the floor holding a dumbbell with both hands, lift your feet slightly off the ground, and twist your torso from side to side." },
        { name: "Dumbbell Woodchoppers", type: "core", muscleGroup: "core", equipment: "dumbbells", difficulty: 2, instructions: "Stand with feet shoulder-width apart, hold a dumbbell with both hands, and swing it diagonally from high on one side to low on the opposite side." },

        // Cardio Exercises
        { name: "Treadmill - Long Run", type: "cardio", muscleGroup: "full body", equipment: "treadmill", difficulty: 2, instructions: "Maintain a steady, comfortable pace for an extended period (20-30 minutes)." },
        { name: "Treadmill - Medium Run", type: "cardio", muscleGroup: "full body", equipment: "treadmill", difficulty: 2, instructions: "Run at a moderately challenging pace for 15-20 minutes." },
        { name: "Treadmill - Running Intervals", type: "cardio", muscleGroup: "full body", equipment: "treadmill", difficulty: 3, instructions: "Alternate between 1 minute of high-intensity running and 1 minute of low-intensity jogging or walking for 15-20 minutes." },
        { name: "Treadmill - Run and Strength Superset", type: "cardio", muscleGroup: "full body", equipment: "treadmill", difficulty: 3, instructions: "Alternate between 2 minutes of running and 1 minute of a bodyweight exercise (e.g., push-ups, squats) for 15-20 minutes." },
        { name: "Stationary Bike - Endurance Ride", type: "cardio", muscleGroup: "legs", equipment: "bike", difficulty: 2, instructions: "Maintain a steady, moderate pace for 20-30 minutes." },
        { name: "Stationary Bike - HIIT", type: "cardio", muscleGroup: "legs", equipment: "bike", difficulty: 3, instructions: "Alternate between 30 seconds of high-intensity pedaling and 30 seconds of low-intensity recovery for 15-20 minutes." },
        { name: "Stationary Bike - Climb Simulation", type: "cardio", muscleGroup: "legs", equipment: "bike", difficulty: 3, instructions: "Increase resistance and maintain a slower, steady pace as if climbing a hill for 15-20 minutes." },
        { name: "Rowing Machine - Steady State", type: "cardio", muscleGroup: "full body", equipment: "rowing-machine", difficulty: 2, instructions: "Maintain a consistent, moderate pace for 15-20 minutes, focusing on proper form." },
        { name: "Rowing Machine - Intervals", type: "cardio", muscleGroup: "full body", equipment: "rowing-machine", difficulty: 3, instructions: "Alternate between 1 minute of high-intensity rowing and 1 minute of low-intensity recovery for 15-20 minutes." },
        { name: "Rowing and Bodyweight Superset", type: "cardio", muscleGroup: "full body", equipment: "rowing-machine", difficulty: 3, instructions: "Alternate between 2 minutes of rowing and 1 minute of a bodyweight exercise (e.g., push-ups, squats) for 15-20 minutes." },

        // Machine Exercises
        { name: "Upper Body Machine Exercise", type: "strength", muscleGroup: "upper body", equipment: "machines-upper", difficulty: 2, instructions: "Choose an upper body machine (e.g., chest press, lat pulldown, shoulder press). Perform 3 sets of 10-12 reps with a weight that challenges you." },
        { name: "Lower Body Machine Exercise", type: "strength", muscleGroup: "lower body", equipment: "machines-lower", difficulty: 2, instructions: "Choose a lower body machine (e.g., leg press, leg extension, hamstring curl). Perform 3 sets of 10-12 reps with a weight that challenges you." }
    ]
};
// Workout Generation Function
function generateWorkout(equipment, duration, fitnessLevel) {
    let availableExercises = exerciseDatabase.exercises.filter(exercise => 
        equipment.includes(exercise.equipment) || exercise.equipment === "bodyweight"
    );

    const maxDifficulty = fitnessLevel === "beginner" ? 2 : fitnessLevel === "intermediate" ? 3 : 4;
    availableExercises = availableExercises.filter(exercise => exercise.difficulty <= maxDifficulty);

    const workout = [
        {
            name: "Warm-up Cardio",
            type: "warmup",
            instructions: "Choose any cardio equipment or do jumping jacks if no equipment is available. Perform at a light to moderate intensity to get your blood flowing.",
            duration: 5
        },
        {
            name: "Dynamic Stretching",
            type: "warmup",
            instructions: "Perform a variety of dynamic stretches such as arm circles, leg swings, torso twists, and light lunges. Focus on full range of motion and gradually increasing intensity.",
            duration: 5
        }
    ];

    const muscleGroups = ['chest', 'back', 'legs', 'shoulders', 'arms', 'core'];
    let totalTime = 10; // Start with 10 minutes for warm-up

    while (totalTime < duration - 15 && muscleGroups.length > 0) {
        const targetMuscle = muscleGroups.shift();
        const muscleExercises = availableExercises.filter(ex => 
            ex.muscleGroup === targetMuscle && ex.type === 'strength'
        );

        if (muscleExercises.length > 0) {
            const exercise = muscleExercises[Math.floor(Math.random() * muscleExercises.length)];
            const enhancedExercise = {
                ...exercise,
                sets: Math.floor(Math.random() * 2) + 3, // 3 or 4 sets
                reps: Math.floor(Math.random() * 11) + 5, // 5 to 15 reps
                restTime: Math.floor(Math.random() * 2) + 1 // 1 or 2 minutes
            };
            workout.push(enhancedExercise);
            totalTime += Math.round((enhancedExercise.sets * (enhancedExercise.reps * 3 + enhancedExercise.restTime * 60)) / 60);
            availableExercises = availableExercises.filter(ex => ex !== exercise);
        }

        if (muscleGroups.length === 0 && totalTime < duration - 15) {
            muscleGroups.push(...['chest', 'back', 'legs', 'shoulders', 'arms']);
        }
    }

    // Add core exercise
    const coreExercises = availableExercises.filter(ex => ex.type === 'core');
    if (coreExercises.length > 0) {
        const coreExercise = coreExercises[Math.floor(Math.random() * coreExercises.length)];
        const enhancedCoreExercise = {
            ...coreExercise,
            sets: Math.floor(Math.random() * 2) + 3,
            reps: Math.floor(Math.random() * 11) + 5,
            restTime: Math.floor(Math.random() * 2) + 1
        };
        workout.push(enhancedCoreExercise);
        totalTime += Math.round((enhancedCoreExercise.sets * (enhancedCoreExercise.reps * 3 + enhancedCoreExercise.restTime * 60)) / 60);
    }

    // Add cardio at the end
    const cardioExercises = availableExercises.filter(ex => ex.type === 'cardio');
    if (cardioExercises.length > 0 && totalTime < duration) {
        const cardio = cardioExercises[Math.floor(Math.random() * cardioExercises.length)];
        const remainingTime = Math.min(duration - totalTime, 20); // Cap cardio at 20 minutes
        workout.push({...cardio, duration: remainingTime});
    }

    return workout;
}

// Function to display the workout
function displayWorkout(workout) {
    const workoutPlan = document.getElementById('workout-plan');
    let html = '<h2>Your Custom Hotel Workout</h2>';

    if (workout.length === 0) {
        html += '<p>No suitable exercises found. Please try different equipment options.</p>';
    } else {
        html += '<ol>';
        workout.forEach((exercise, index) => {
            html += `
                <li>
                    <strong>${exercise.name}</strong> ${exercise.equipment ? `(${exercise.equipment})` : ''}
                    <br>
                    <em>Type: ${exercise.type.charAt(0).toUpperCase() + exercise.type.slice(1)}</em>
                    <br>
                    ${exercise.muscleGroup ? `<em>Muscle Group: ${exercise.muscleGroup.charAt(0).toUpperCase() + exercise.muscleGroup.slice(1)}</em><br>` : ''}
                    ${exercise.difficulty ? `<em>Difficulty: ${getExerciseDifficulty(exercise.difficulty)}</em><br>` : ''}
                    ${exercise.type !== 'cardio' && exercise.type !== 'warmup' ? 
                        `<strong>Sets:</strong> ${exercise.sets} | 
                        <strong>Reps:</strong> ${exercise.reps} | 
                        <strong>Rest between sets:</strong> ${exercise.restTime} minute${exercise.restTime > 1 ? 's' : ''}<br>`
                        : ''
                    }
                    <strong>Instructions:</strong> ${exercise.instructions}
                    <br>
                    <strong>Duration:</strong> ${getDuration(exercise)} minutes
                    ${index < workout.length - 1 ? '<hr>' : ''}
                </li>
            `;
        });
        html += '</ol>';
        html += `<p><strong>Estimated Total Workout Time:</strong> ${estimateWorkoutTime(workout)} minutes</p>`;
    }

    workoutPlan.innerHTML = html;
    workoutPlan.style.display = 'block';
}

function getDuration(exercise) {
    if (exercise.type === 'warmup' || exercise.type === 'cardio') {
        return exercise.duration || 15;
    } else {
        // Round to nearest minute
        return Math.round((exercise.sets * (exercise.reps * 3 + exercise.restTime * 60)) / 60);
    }
}

function estimateWorkoutTime(workout) {
    return workout.reduce((total, exercise) => {
        return total + getDuration(exercise);
    }, 0);
}

function getExerciseDifficulty(difficulty) {
    switch(difficulty) {
        case 1: return "Easy";
        case 2: return "Moderate";
        case 3: return "Hard";
        default: return "Very Hard";
    }
}

// Event listener for form submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('workout-form');
    const durationSlider = document.getElementById('duration');
    const durationOutput = document.getElementById('duration-output');
    const workoutPlan = document.getElementById('workout-plan');

    // Update duration output
    function updateDurationOutput() {
        durationOutput.textContent = `${durationSlider.value} minutes`;
    }

    // Initialize duration output
    updateDurationOutput();

    // Update duration output when slider changes
    durationSlider.addEventListener('input', updateDurationOutput);

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const equipment = Array.from(document.querySelectorAll('input[name="equipment"]:checked')).map(input => input.value);
        const duration = parseInt(durationSlider.value);
        const fitnessLevel = document.querySelector('input[name="fitness-level"]:checked')?.value;

        if (equipment.length === 0) {
            alert('Please select at least one piece of equipment.');
            return;
        }

        if (!fitnessLevel) {
            alert('Please select a fitness level.');
            return;
        }

        const workout = generateWorkout(equipment, duration, fitnessLevel);
        displayWorkout(workout);

        // Scroll to the workout plan
        workoutPlan.scrollIntoView({ behavior: 'smooth' });
    });
});
